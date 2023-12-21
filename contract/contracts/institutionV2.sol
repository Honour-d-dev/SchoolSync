// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @title SchoolSync
 * @author 3illBaby | Team 4
 * @notice This contract is still in development
 */

contract InstitutionV2 {
  //! Contract events
  //? These events are emitted when certain actions are performed in the contract
  event newStudentRegistration(address indexed _studentAddress, uint id);
  event newAdminCreated(address indexed _adminAddress, string _name);

  //! Contract Structs
  //? This structure is created when a new student is registered
  struct Student {
    uint id; //matriculation number
    string studentInfo;
    string[] documents;
    string department;
  }

  struct Admin {
    uint256 id;
    string name;
    address Address;
    string faculty;
    string department;
    uint date;
  }

  string public instiutionName;
  string public description;

  uint256 public constant registrationFee = 0.001 ether;

  address private immutable Owner;
  address[] public admins;

  mapping(address => Student) public studentProfile;
  mapping(string department => mapping(uint year => uint[] id)) studentIds;
  mapping(address => Admin) public addressToAdmin;
  mapping(address => bool) public isRegistered;
  mapping(address => bool) public isAdmin;

  constructor(string memory _name, string memory _description) {
    Owner = msg.sender;
    instiutionName = _name;
    description = _description;
  }

  //! Contract Modifiers
  modifier registrationFeeCompliance() {
    require(msg.value >= registrationFee, "Insufficient registration fee");
    _;
  }

  modifier registrationCompliance() {
    require(!isRegistered[msg.sender], "Student has already registered");
    _;
  }

  modifier adminCompliance() {
    require(isAdmin[msg.sender], "Only admins can call this function");
    _;
  }

  modifier onlyOwner() {
    require(msg.sender == Owner, "only owners can call this function");
    _;
  }

  //? This function registers a new student and creats a contract profile;
  function studentRegistration(
    uint id,
    uint year,
    string calldata _department,
    string calldata studentInfoHash,
    string calldata studentIdCardHash
  ) external payable registrationCompliance registrationFeeCompliance {
    // require(isValidStudentId(id, year, _department), "Invalid user Id");
    (year);

    Student memory newStudent;
    newStudent.id = id;
    newStudent.department = _department;
    newStudent.studentInfo = studentInfoHash;

    studentProfile[msg.sender] = newStudent;
    studentProfile[msg.sender].documents.push(studentIdCardHash);

    isRegistered[msg.sender] = true;

    emit newStudentRegistration(msg.sender, newStudent.id);
  }

  function getStudent() external view returns (Student memory) {
    return studentProfile[msg.sender];
  }

  function isValidStudentId(uint id, uint year, string memory department) public view returns (bool isValid) {
    uint[] memory ids = studentIds[department][year];

    for (uint i = 0; i < ids.length; i++) {
      if (id == ids[i]) {
        isValid = true;
        break;
      }
    }
  }

  function registerAdmin(
    string memory _name,
    string memory _faculty,
    string memory _department,
    address _address
  ) external onlyOwner adminCompliance {
    Admin memory newAdmin = Admin({
      id: admins.length,
      name: _name,
      Address: _address,
      faculty: _faculty,
      department: _department,
      date: block.timestamp
    });

    isAdmin[_address] = true;
    admins.push(_address);
    addressToAdmin[_address] = newAdmin;

    emit newAdminCreated(_address, _name);
  }

  function uploadStudentIds(string calldata department, uint year, uint[] calldata ids) external adminCompliance {
    studentIds[department][year] = ids;
  }
}
