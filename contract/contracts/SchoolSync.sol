// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import {Institution} from "./Instiution.sol";

contract SchoolSync {
    event newInstitutionCreated(
        address indexed _address,
        string institutionName
    );
    event newSubscription(address indexed _address, uint256 _amount);

    address private immutable owner;
    address[] public keys;

    mapping(address => Institution) private allInstiutions;
    mapping(address => Institution[]) private myInstiutions;
    mapping(address => bool) public hasSubscribed;
    mapping(address => bool) public hasCreatedInstitution;

    uint256 public subscritptionFee;
    uint256 public institutionCounter;
    uint256 public subscribers;

    constructor(address _owner, uint256 _subscriptionPrice) {
        owner = _owner;
        subscritptionFee = _subscriptionPrice;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "only owner can call this function");
        _;
    }

    modifier blankCompliance(string memory _valueA, string memory _valueB) {
        require(
            bytes(_valueA).length > 0 && bytes(_valueB).length > 0,
            "can't leave parameters empty"
        );
        _;
    }

    //? This function is called by the createInstiution function
    /**
     * This allows users to complete institution creation
     * @param _owner this is the address creating the instiution
     * @param _name this is the name of the instiution
     * @param _description this is the description of the instiution
     */
    function addInstitution(
        address _owner,
        string memory _name,
        string memory _description
    ) internal blankCompliance(_name, _description) {
        institutionCounter++;

        keys.push(msg.sender);

        Institution institution = new Institution(_owner, _name, _description);
        allInstiutions[_owner] = institution;
        myInstiutions[_owner].push(institution);

        emit newInstitutionCreated(_owner, _name);
    }

    //? This function allows users to upgrade their subscription tier
    function goPremium() external payable {
        require(
            msg.value >= subscritptionFee,
            "Insufficient amount to complete subscription"
        );
        subscribers++;
        hasSubscribed[msg.sender] = true;

        (bool sent, ) = payable(address(this)).call{value: msg.value}("");
        require(sent, "This transaction failed");
    }

    //? This function allows the deployer of the contract to update the subscription fee
    function updateSubscriptionPrice(uint256 _price) external onlyOwner {
        subscritptionFee = _price;
    }

    //? Users call this function to create a new instiution
    /**
     * @dev Users with a basic subscription tier can not create more than 2 institution instances
     * @param _name this is the name of the instiution
     * @param _description this is the description of the instiution
     */
    function createInstitution(
        string memory _name,
        string memory _description
    ) external blankCompliance(_name, _description) {
        if (hasCreatedInstitution[msg.sender]) {
            if (hasSubscribed[msg.sender]) {
                addInstitution(msg.sender, _name, _description);
            } else {
                require(
                    myInstiutions[msg.sender].length <= 2,
                    "Can not have more than 2 institutions with a basic plan"
                );

                addInstitution(msg.sender, _name, _description);
            }
        } else {
            hasCreatedInstitution[msg.sender] = true;
            addInstitution(msg.sender, _name, _description);
        }
    }

    //? This function returns an array of all created institutions
    function getAllInstitutions() external view returns (Institution[] memory) {
        Institution[] memory allInstiution = new Institution[](
            institutionCounter
        );

        for (uint256 i = 0; i < institutionCounter; i++) {
            allInstiution[i] = allInstiutions[keys[i]];
        }

        return allInstiution;
    }

    //? This function returns an array of user created instiutions
    function getMyInstiution() external view returns (Institution[] memory) {
        return myInstiutions[msg.sender];
    }
}
