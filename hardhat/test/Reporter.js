const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Reporter conract', () => {
  let Reporter, reporter;
  let deviceID = 123;
  let reportID = 321;
  let deviceName = "Device Name";
  let reportDate = new Date().getDate();
  let reportSeverity = 2;

  before(async () => {
    Reporter = await ethers.getContractFactory('Reporter');
    reporter = await Reporter.deploy();
    await reporter.deployed();
    [owner, _] = await ethers.getSigners();
  });

  describe('Creating a new device', async () => {
    it("should create a new device", async () => {
      const deviceCount = await reporter.getDeviceCount();
      await reporter.addDevice(
        deviceID,
        deviceName, 
        owner.address, 
        true
      );

      expect(await reporter.getDeviceCount()).to.equal(deviceCount + 1);
    });
  });

  describe('Testing the new device properties', async () => {
    it('should return 69', async () => {  
      const deviceCount = await reporter.getDeviceCount();
      const device = await reporter.getDevice(deviceCount - 1);
      expect(device.UID).to.equal(deviceID);
    })

    it('should return "My first Device"', async () => {  
      const deviceCount = await reporter.getDeviceCount();
      const device = await reporter.getDevice(deviceCount - 1);
      expect(device.name).to.equal(deviceName);
    })

    it('should return the owner address', async () => {  
      const deviceCount = await reporter.getDeviceCount();
      const device = await reporter.getDevice(deviceCount - 1);
      expect(device.addr).to.equal(owner.address);
    })

    it('should return true', async () => {  
      const deviceCount = await reporter.getDeviceCount();
      const device = await reporter.getDevice(deviceCount - 1);
      expect(device.isEnabled).to.equal(true);
    })
  });
  
  describe('Creating a new report', async () => {
    it("should create a new report", async () => {
      const reportCount = await reporter.getReportCount();
      const deviceCount = await reporter.getDeviceCount();
      const device = await reporter.getDevice(deviceCount - 1);
      const deviceUID = device.UID;
      
      await reporter.addReport(
        reportID,
        deviceUID,
        reportDate,
        reportSeverity
      );

      expect(await reporter.getReportCount()).to.equal(reportCount + 1);
    });
  });
  
  describe('Testing the new report properties', async () => {
    it(`should return ${reportID}`, async () => {
      const reportCount = await reporter.getReportCount();
      const report = await reporter.getReport(reportCount - 1);
      expect(report.ID).to.equal(reportID);
    });

    it(`should return the last device UID`, async () => {
      const reportCount = await reporter.getReportCount();
      const report = await reporter.getReport(reportCount - 1);

      const deviceCount = await reporter.getDeviceCount();
      const device = await reporter.getDevice(deviceCount - 1);
      const deviceUID = device.UID;

      expect(report.deviceUID).to.equal(deviceUID);
    });

    it(`should return ${reportDate}`, async () => {
      const reportCount = await reporter.getReportCount();
      const report = await reporter.getReport(reportCount - 1);
      expect(report.date).to.equal(reportDate);

    });
    
    it(`should return ${reportSeverity}`, async () => {
      const reportCount = await reporter.getReportCount();
      const report = await reporter.getReport(reportCount - 1);
      expect(report.severity).to.equal(reportSeverity);
    });
  });
});
