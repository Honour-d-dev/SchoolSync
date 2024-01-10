// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @title SchoolSync
 * @author 3illBaby | Team 4
 * @notice This contract is still in development
 */

struct Faculty {
  string name;
  string[] departments;
}

error facultyDoesnotExist(string);

contract InstitutionV2 {
  /* ==============================================================
                              EVENTS
    ==============================================================*/
  event newStudentRegistration(address indexed _studentAddress, uint id);
  event newAdminCreated(address indexed _adminAddress, string department);

  /* ==============================================================
                           CONTRACT STRUCTS
    ==============================================================*/
  struct Student {
    uint studentId; //matriculation number
    string studentInfo;
  }

  struct Document {
    uint studentId;
    string name;
    string uri;
  }

  struct Admin {
    address adminAddress;
    string faculty;
    string department;
  }

  /* ==============================================================
                              STATE
    ==============================================================*/
  string public instiutionName;
  Faculty[] private s_faculties;
  uint256 public constant s_registrationFee = 0.001 ether;
  address private immutable Owner;

  mapping(address => Admin) public s_adminProfile;
  mapping(address => Student) public s_studentProfile;
  mapping(uint studentId => Document[]) s_studentDocument;
  mapping(string department => mapping(uint year => uint[] id)) s_studentIds;
  mapping(address => bool) public isRegistered;

  /* ==============================================================
                              MODIFIERS
    ==============================================================*/
  modifier registrationCompliance() {
    require(!isRegistered[msg.sender], "Student has already registered");
    require(msg.value >= s_registrationFee, "Insufficient registration fee");
    _;
  }

  modifier adminCompliance() {
    require(s_adminProfile[msg.sender].adminAddress == msg.sender, "Only admins can call this function");
    _;
  }

  modifier adminOrOwner() {
    require(msg.sender == Owner || s_adminProfile[msg.sender].adminAddress == msg.sender, "not an owner or admin");
    _;
  }

  constructor(string memory name, Faculty[] memory faculties) {
    Owner = msg.sender;
    instiutionName = name;
    s_faculties = faculties;
  }

  /**
   * this function is called by a department admin to submit the list of viable student id's
   * for a given session/year
   * @param department the department of the students
   * @param year the student year/session
   * @param ids the students id's
   */
  function uploadStudentIds(string calldata department, uint year, uint[] calldata ids) external adminCompliance {
    _uploadStudentIds(department, year, ids);
  }

  /**
   * this function should allow an admin to upload students documents
   * @param documents an array of student documents to be added
   */
  function uploadStudentsDocument(Document[] calldata documents) external adminCompliance {
    _uploadStudentsDocument(documents);
  }

  function uploadStudentsIdsAndDocuments(
    string calldata department,
    uint year,
    uint[] calldata ids,
    Document[] calldata documents
  ) external {
    _uploadStudentIds(department, year, ids);
    _uploadStudentsDocument(documents);
  }

  function _uploadStudentsDocument(Document[] calldata documents) internal adminCompliance {
    for (uint i; i < documents.length; i++) {
      s_studentDocument[documents[i].studentId].push(documents[i]);
    }
  }

  function _uploadStudentIds(string calldata department, uint year, uint[] calldata ids) internal adminCompliance {
    s_studentIds[department][year] = ids;
  }

  /**
   * Registers a new student
   * @param id the student id
   * @param year addmission year
   * @param _department student's department
   * @param studentInfo uri of student personal data off-chain
   * @param studentIdCard student id card
   */
  function studentRegistration(
    uint id,
    uint year,
    string calldata _department,
    string calldata studentInfo,
    Document calldata studentIdCard
  ) external payable registrationCompliance {
    require(isValidStudentId(id, year, _department), "Invalid studentId");

    Student memory newStudent = Student(id, studentInfo);

    s_studentProfile[msg.sender] = newStudent;
    s_studentDocument[id].push(studentIdCard);

    isRegistered[msg.sender] = true;

    emit newStudentRegistration(msg.sender, newStudent.studentId);
  }

  /**
   * getter function for retrieving student data
   * @return studentInfo uri for the student personal data stored offchain
   * @return documents array of the stundents documents
   */
  function getStudentDocuments() external view returns (string memory, Document[] memory) {
    Student memory student = s_studentProfile[msg.sender];
    Document[] memory documents = s_studentDocument[student.studentId];
    return (student.studentInfo, documents);
  }

  function isValidStudentId(uint id, uint year, string memory department) public view returns (bool isValid) {
    uint[] memory ids = s_studentIds[department][year];

    for (uint i = 0; i < ids.length; i++) {
      if (id == ids[i]) {
        isValid = true;
        break;
      }
    }
  }

  function registerAdmins(string calldata faculty, string calldata department, address[] calldata addresses) external {
    for (uint i; i < addresses.length; i++) {
      registerAdmin(faculty, department, addresses[i]);
    }
  }

  function registerAdmin(string calldata faculty, string calldata department, address addr) public adminOrOwner {
    Admin memory newAdmin = Admin({adminAddress: addr, faculty: faculty, department: department});
    s_adminProfile[addr] = newAdmin;

    emit newAdminCreated(addr, department);
  }

  function getFaculties() external view returns (Faculty[] memory) {
    return s_faculties;
  }

  function addFaculty(Faculty calldata faculty) external {
    s_faculties.push(faculty);
  }

  function addDepartment(string calldata facultyName, string calldata department) external {
    for (uint i; i < s_faculties.length; i++) {
      if (keccak256(bytes(s_faculties[i].name)) == keccak256(bytes(facultyName))) {
        s_faculties[i].departments.push(department);
        return;
      }
    }
    revert facultyDoesnotExist(facultyName);
  }
}
