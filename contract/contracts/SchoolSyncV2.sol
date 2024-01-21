// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {InstitutionV2} from "./institutionV2.sol";

contract SchoolSyncV2 {
  struct InstitutionInfo {
    string name;
    InstitutionV2 institution;
  }

  /* ==============================================================
                              EVENTS
    ==============================================================*/
  event newInstitutionCreated(address indexed _address, string institutionName);
  event newSubscription(address indexed _address, uint256 _amount);

  /* ==============================================================
                              STATE
    ==============================================================*/
  address private immutable owner;

  InstitutionInfo[] private s_Instiutions;

  uint256 public subscritptionFee;

  /* ==============================================================
                              FUNCTIONS
    ==============================================================*/

  constructor(address _owner, uint256 _subscriptionPrice) {
    owner = _owner;
    subscritptionFee = _subscriptionPrice;
  }

  /**
   * @dev Users with a basic subscription tier can not create more than 2 institution instances
   * @param name this is the name of the instiution
   */
  function createInstitution(string calldata name) external {
    InstitutionV2 institution = new InstitutionV2(name);
    s_Instiutions.push(InstitutionInfo(name, institution));
  }

  /**
   * Getter function for getting the list of institutions
   */
  function getInstitutions() external view returns (InstitutionInfo[] memory) {
    return s_Instiutions;
  }

  /* ==============================================================
                              MODIFIERS
    ==============================================================*/

  modifier onlyOwner() {
    require(msg.sender == owner, "only owner can call this function");
    _;
  }

  modifier blankCompliance(string memory _valueA, string memory _valueB) {
    require(bytes(_valueA).length > 0 && bytes(_valueB).length > 0, "can't leave parameters empty");
    _;
  }
}
