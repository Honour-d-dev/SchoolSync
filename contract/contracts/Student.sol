// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Student {
    address private immutable Owner;
    string public name;
    uint public age;

    constructor(address _ownerAddress, string memory _name, uint _age) {
        Owner = _ownerAddress;
        name = _name;
        age = _age;
    }
}
