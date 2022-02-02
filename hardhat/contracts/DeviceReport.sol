// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <= 0.8.11;

import './DeviceHelper.sol';

contract DeviceReport is DeviceHelper {

    event NewReport(uint indexed reportId, uint256 indexed deviceId, uint256 date, Severity severity);
 
    enum Severity {
        SAFE,
        CRITICAL
    }

    struct Report {
        uint256 device;
        uint256 date;
        Severity severity;
    }

    Report[] public reports;

    mapping (uint256 => uint256) public reportToDevice;
    mapping (uint256 => uint256) public deviceReportCount;

    function _createReport(uint256 _deviceId, Severity _severity) private {
        uint256 date = block.timestamp;
        reports.push(Report(_deviceId, date, _severity));
        uint256 id = reports.length - 1;
        reportToDevice[id] = _deviceId;
        deviceReportCount[_deviceId]++;
        emit NewReport(id, _deviceId, date, _severity);
    }

    function deviceCreateReport(uint _deviceId, Severity _severity) public onlyOwnerOf(_deviceId) {
        _createReport(_deviceId, _severity);
    }
}