// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Student {
    struct Session {
        uint256 level;
        uint256 numberOfCoursesRegistered;
        string[] courseRegistratioHashes;
        string[] firseSemesterHashes;
        string[] secondSemesterHashes;
    }

    address private immutable Owner;
    Session[] private sessions;
    uint public age;
    string public name;
    string public faculty;
    string public department;

    constructor(
        address _ownerAddress,
        string memory _name,
        uint _age,
        string memory _department
    ) {
        Owner = _ownerAddress;
        name = _name;
        age = _age;
        department = _department;
    }
}
