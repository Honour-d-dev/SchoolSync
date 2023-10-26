// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import {Student} from "./Student.sol";

/**
 * @title SchoolSync
 * @author 3illBaby | Team 4
 * @notice This contract is still in development
 */

contract SchoolSync {
    //! Contract events
    //? These events are emitted when certain actions are performed in the contract
    event newStudentRegistration(
        address indexed _studentAddress,
        string _name,
        Student indexed _studentProfile
    );

    //! Contract Structs
    //? This structure is created when a new student is registered
    struct NewStudent {
        uint id;
        string name;
        uint age;
        address Address;
        uint date;
    }

    uint256 public counter = 0;
    uint256 public registrationFee = 0.01 ether;

    address private immutable Owner;
    address[] public admins;
    address[] public keys;

    mapping(address => Student) public StudentProfile;
    mapping(address => NewStudent) public addressToStudent;
    mapping(address => bool) public isRegistered;
    mapping(address => bool) isAdmin;

    constructor() {
        Owner = msg.sender;
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

    //? This function registers a new student and creats a contract profile;
    function studentRegistration(
        string memory _name,
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
            date: block.timestamp
        });

        isRegistered[msg.sender] = true;
        keys.push(msg.sender);
        addressToStudent[msg.sender] = newStudent;

        Student newStudentProfile = new Student(
            newStudent.Address,
            newStudent.name,
            newStudent.age
        );
        StudentProfile[msg.sender] = newStudentProfile;

        emit newStudentRegistration(
            newStudent.Address,
            newStudent.name,
            newStudentProfile
        );
    }
}
