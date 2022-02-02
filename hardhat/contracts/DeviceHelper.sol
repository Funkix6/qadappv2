// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <= 0.8.11;

import './DeviceFactory.sol';

contract DeviceHelper is DeviceFactory {

    modifier ownerOf(uint _deviceId) {
        require(msg.sender == deviceToOwner[_deviceId]);
        _;
    }

    modifier onlyOwnerOf(uint _deviceId) {
        require(msg.sender == deviceToOwner[_deviceId]);
        _;
    }

    function changeName(uint _deviceId, string memory _newName) external ownerOf(_deviceId) {
        devices[_deviceId].name = _newName;
    }

    function getDeviceByOwner(address _owner) external view returns(uint[] memory) {
        uint[] memory result = new uint[](ownerDeviceCount[_owner]);
        uint counter = 0;
        for (uint i = 0; i < devices.length; i++) {
            if (deviceToOwner[i] == _owner) {
                result[counter] = i;
                counter++;
            } 
        }
        return result;
    }
}