// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

//This contract is only intended for testing purposes

contract Swisstronik {
    string private message;

    /**
     * @dev Constructor is used to set the initial message for the contract
     * @param _message: The message to be associated to the message variable
     */
    constructor(string memory _message) payable{
        message = _message;
    }

    /**
     * @dev getStorageAt() retrieves the currently stored storage at in the contract
     * @return The message associated with the contract
     */
    function getStorageAt() public view returns(string memory){
        return message;
    }
}