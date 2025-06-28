// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IoTContract {
    struct DeviceData {
        uint256 temperature;
        uint256 humidity;
        uint256 timestamp;
    }

    mapping(string => DeviceData) public deviceData;
    address public owner;

    event DataStored(string deviceId, uint256 temperature, uint256 humidity);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function storeData(
        string memory deviceId,
        uint256 temperature,
        uint256 humidity
    ) public onlyOwner {
        deviceData[deviceId] = DeviceData({
            temperature: temperature,
            humidity: humidity,
            timestamp: block.timestamp
        });

        emit DataStored(deviceId, temperature, humidity);
    }

    function getData(string memory deviceId) public view returns (
        uint256 temperature,
        uint256 humidity,
        uint256 timestamp
    ) {
        DeviceData memory data = deviceData[deviceId];
        return (data.temperature, data.humidity, data.timestamp);
    }
} 