// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.19;

contract AdminManager {
  event newAdminCreated(address indexed _adminAddress, string department);

  modifier adminCompliance() {
    require(s_adminProfile[msg.sender].adminAddress == msg.sender, "Only admins can call this function");
    _;
  }

  struct Admin {
    address adminAddress;
    string faculty;
    string department;
  }

  mapping(address => Admin) public s_adminProfile;

  function registerAdmins(string calldata faculty, string calldata department, address[] calldata addresses) external {
    for (uint i; i < addresses.length; i++) {
      registerAdmin(faculty, department, addresses[i]);
    }
  }

  function registerAdmin(string calldata faculty, string calldata department, address addr) public {
    Admin memory newAdmin = Admin({adminAddress: addr, faculty: faculty, department: department});
    s_adminProfile[addr] = newAdmin;

    emit newAdminCreated(addr, department);
  }
}
