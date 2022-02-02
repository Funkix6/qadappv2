// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <= 0.8.11;

import './Ownable.sol';
import './SafeMath.sol';

contract DeviceFactory is Ownable {
    using SafeMath for uint256;

    event NewDevice(uint indexed deviceId, string name, string localisation, Status status);

    enum Status {
        OFFLINE,
        ONLINE
    }

    struct Device {
        string name;
        string localisation;
        Status status;
    }

    Device[] public devices;

    mapping (uint => address) public deviceToOwner;
    mapping (address => uint) ownerDeviceCount;

    function createDevice(string memory _name, string memory _localisation, Status _status) public {
        devices.push(Device(_name, _localisation, _status));
        uint id = devices.length.sub(1);
        deviceToOwner[id] = msg.sender;
        ownerDeviceCount[msg.sender].add(1);
        emit NewDevice(id, _name, _localisation, _status);
    }
}