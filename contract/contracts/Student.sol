// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Student {
    address private immutable Owner;
    string public name;
    uint public age;
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
