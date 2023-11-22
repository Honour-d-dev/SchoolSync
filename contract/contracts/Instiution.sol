// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

//? This Contract is created and tracked when a student registers
import {Student} from "./Student.sol";

/**
 * @title SchoolSync
 * @author 3illBaby | Team 4
 * @notice This contract is still in development
 */

contract Institution {
    //! Contract events
    //? These events are emitted when certain actions are performed in the contract
    event newStudentRegistration(
        address indexed _studentAddress,
        string _name,
        Student indexed _studentProfile
    );
    event newAdminCreated(address indexed _adminAddress, string _name);
    event studentVerified(address indexed _studentAddress, string _name);

    //! Contract Structs
    //? This structure is created when a new student is registered
    struct NewStudent {
        uint id;
        string name;
        uint age;
        address Address;
        string faculty;
        string department;
        bool isBlacklisted;
        uint date;
    }

    struct Admin {
        uint256 id;
        string name;
        address Address;
        string faculty;
        string department;
        uint date;
    }

    struct Verification {
        string birthCertificateHash;
        string waecResultHash;
        string highSchoolCertificateHash;
        string stateOfOriginHash;
    }

    string public instiutionName;
    string public description;

    uint256 public counter = 0;
    uint256 public adminCounter = 0;
    uint256 public registrationFee = 0.01 ether;

    address private immutable Owner;
    address[] public admins;
    address[] public keys;
    address[] private clearedStudents;

    mapping(address => Student) public StudentProfile;
    mapping(address => NewStudent) public addressToStudent;
    mapping(address => Admin) public addressToAdmin;
    mapping(address => bool) public isRegistered;
    mapping(address => bool) public isAdmin;
    mapping(address => Verification) public verifiedStudents;

    constructor(
        address _ownerAddress,
        string memory _name,
        string memory _description
    ) {
        Owner = _ownerAddress;
        instiutionName = _name;
        description = _description;
    }

    //! Contract Modifiers
    modifier registrationFeeCompliance() {
        require(msg.value >= registrationFee, "Insufficient registration fee");
        _;
    }

    modifier registrationCompliance(address _studentAddress) {
        require(
            !isRegistered[_studentAddress],
            "Student has already registered"
        );
        _;
    }

    modifier adminCompliance(address _adminAddress) {
        require(isAdmin[_adminAddress], "Only admins can call this function");
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == Owner, "only owners can call this function");
        _;
    }

    //? This function registers a new student and creats a contract profile;
    function studentRegistration(
        string memory _name,
        string memory _faculty,
        string memory _department,
        uint _age
    )
        external
        payable
        registrationCompliance(msg.sender)
        registrationFeeCompliance
    {
        uint id = counter++;
        NewStudent memory newStudent = NewStudent({
            id: id,
            name: _name,
            age: _age,
            Address: msg.sender,
            faculty: _faculty,
            department: _department,
            isBlacklisted: false,
            date: block.timestamp
        });

        isRegistered[msg.sender] = true;
        keys.push(msg.sender);
        addressToStudent[msg.sender] = newStudent;

        Student newStudentProfile = new Student(
            newStudent.Address,
            newStudent.name,
            newStudent.age,
            newStudent.department
        );
        StudentProfile[msg.sender] = newStudentProfile;

        emit newStudentRegistration(
            newStudent.Address,
            newStudent.name,
            newStudentProfile
        );
    }

    function registerAdmin(
        string memory _name,
        string memory _faculty,
        string memory _department,
        address _address
    ) external onlyOwner adminCompliance(msg.sender) {
        uint id = adminCounter++;
        Admin memory newAdmin = Admin({
            id: id,
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
}
