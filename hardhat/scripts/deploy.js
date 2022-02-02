const main = async () => {
    const Reporter = await hre.ethers.getContractFactory("DeviceReport");
    const reporter = await Reporter.deploy();

    await reporter.deployed();

    console.log("Reporter deployed to: ", reporter.address);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error)
        process.exit(1);
    }
}

runMain();