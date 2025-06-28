const IoTContract = artifacts.require("IoTContract");

module.exports = function(deployer) {
  deployer.deploy(IoTContract);
}; 