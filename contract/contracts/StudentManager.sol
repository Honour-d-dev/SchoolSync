// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract StudentManager {
  event newStudentRegistration(address indexed _studentAddress, string id);

  modifier registrationCompliance() {
    require(msg.value >= s_registrationFee, "Insufficient registration fee");
    _;
  }

  struct Student {
    string studentId; //matriculation number
    string name;
    string studentInfo;
  }

  struct Document {
    string name;
    string uri;
  }

  struct Course {
    string courseCode;
    string courseTitle;
    uint8 unit;
    uint8 score;
  }

  struct Session {
    Course[] firstSemester;
    Course[] secondSemester;
  }

  enum Semester {
    FIRST,
    SECOND
  }

  enum StudentStatus {
    NOT_A_STUDENT, //default
    UNREGISTERED,
    REGISTERED
  }

  uint256 public constant s_registrationFee = 0.001 ether;
  mapping(address => string studentId) s_addressToId;
  mapping(string studentId => Student) s_studentProfile;
  mapping(string studentId => Document[]) public s_studentDocument;
  mapping(string studentId => Session[]) s_studentAcademicData;
  mapping(string studentId => StudentStatus) s_studentStatus;

  /**
   * Registers a new student
   * @param id the student id
   * @param studentInfo uri of student personal data off-chain
   * @param studentIdCard student id card
   */
  function studentRegistration(
    string calldata id,
    string calldata name,
    string calldata studentInfo,
    Document calldata studentIdCard
  ) external payable {
    //require(s_studentStatus[id] == StudentStatus.UNREGISTERED, "Invalid ID or Student already Registered");

    Student memory newStudent = Student(id, name, studentInfo);

    s_addressToId[msg.sender] = id;
    s_studentProfile[id] = newStudent;
    s_studentDocument[id].push(studentIdCard);

    s_studentStatus[id] = StudentStatus.REGISTERED;

    emit newStudentRegistration(msg.sender, newStudent.studentId);
  }

  function isIdRegistered(string memory id) public view returns (bool) {
    return s_studentStatus[id] == StudentStatus.REGISTERED;
  }

  function isRegistered() external view returns (bool) {
    string memory id = s_addressToId[msg.sender];
    return isIdRegistered(id);
  }

  /**
   * getter function for retrieving student data
   * @return studentInfo uri for the student personal data stored offchain
   * @return documents array of the stundents documents
   */
  function _getStudentData(
    string memory id
  ) internal view returns (Student memory, Document[] memory, Session[] memory) {
    require(s_studentStatus[id] == StudentStatus.REGISTERED, "Unregistered student ID");
    Student memory student = s_studentProfile[id];
    Document[] memory documents = s_studentDocument[id];
    Session[] memory sessions = s_studentAcademicData[id];
    return (student, documents, sessions);
  }
}
