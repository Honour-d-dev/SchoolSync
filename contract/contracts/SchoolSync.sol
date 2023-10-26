// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract SchoolSync {
    address private immutable Owner;

    constructor() {
        Owner = msg.sender;
    }
}
