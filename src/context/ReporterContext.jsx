import { contractABI } from "../utils/constants";
import { contractAddress } from "../utils/constants";
import { ethers } from "ethers";
import React, {useContext, useEffect, useState} from "react";


export const ReporterContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const reporterContract = new ethers.Contract(contractAddress, contractABI, signer);

    return reporterContract;
}



export const ReporterProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("");
    const [deviceFormData, setDeviceFormData] = useState({name:'', localisation: '', status: ''});
    const [reportFormData, setReportFormData] = useState({deviceId:0, severity: 0});
    const [newDeviceEvents, setNewDeviceEvents] = useState([{deviceId:0 , name:'', localisation:'', status:0}]);
    const [newReportEvents, setNewReportEvents] = useState([{reportId:0, deviceId:0 , date:0, severity:0}]);
    const [deviceCount, setDeviceCount] = useState(0);
    const [reportCount, setReportCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleDeviceChange = (e, name) => {
        setDeviceFormData((prevState) => ({...prevState, [name]: e.target.value}));
        console.log(deviceFormData);
    }
    const handleReportChange = (e, name) => {
        setReportFormData((prevState) => ({...prevState, [name]: e.target.value}));
        console.log(reportFormData);
    }

    const checkIfWelletIsConnected = async () => {
        try {
            if(!ethereum) return alert("Please install metamask");

            const acconts = await ethereum.request({method: 'eth_accounts'})
            
            if(acconts.length ) {
                setCurrentAccount(acconts[0]);
            } else {
                console.log("No account found.")
            }
        } catch (error) {
            console.log(error)
            throw new Error("No ethereum object.");
        }
    }

    useEffect(() => {
        checkIfWelletIsConnected();
    }, []);

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert("Please install metamask");
            const acconts = await ethereum.request({method: 'eth_requestAccounts'});
            setCurrentAccount(acconts[0]);
        } catch (error) {
            console.log(error)
            throw new Error("No ethereum object.");
        }
    }

    const createDevice = async () => {
        try {
            if(!ethereum) return alert("Please install Metamask");
            const { name, localisation, status } = deviceFormData;
            const reporterContract = getEthereumContract();
            console.log(reporterContract);
            const transactionHash = await reporterContract.createDevice(name, localisation, status);

            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            console.log(`Success - ${transactionHash.hash}`);
            setIsLoading(false);
            window.location.reload(false); 

        } catch (error) {
            console.log(error);
            
            throw new Error("No ethereum object.");
        }
    }

    const getNewDeviceEvents = async () => {
        const reporterContract = getEthereumContract();
        let eventFilter = reporterContract.filters.NewDevice();
        let events = await reporterContract.queryFilter(eventFilter);
        setNewDeviceEvents(events);
        setDeviceCount(events.length);
    }

    const createReport = async () => {
        try {
            if(!ethereum) return alert("Please install Metamask");
            const { deviceId, severity } = reportFormData;
            const reporterContract = getEthereumContract();
            console.log(reporterContract);
            const transactionHash = await reporterContract.deviceCreateReport(deviceId, severity);

            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            console.log(`Success - ${transactionHash.hash}`);
            setIsLoading(false);
            window.location.reload(false); 

        } catch (error) {
            console.log(error);
            
            throw new Error("No ethereum object.");
        }
    }


    const getNewReportEvents = async () => {
        const reporterContract = getEthereumContract();
        let eventFilter = reporterContract.filters.NewReport();
        let events = await reporterContract.queryFilter(eventFilter);
        setNewReportEvents(events);
        setReportCount(events.length);
    }

    useEffect(() => {
        getNewDeviceEvents();
        getNewReportEvents();
    }, [])



    return (
        <ReporterContext.Provider 
            value={{ 
                connectWallet, 
                deviceCount, 
                reportCount,
                currentAccount, 
                newDeviceEvents, 
                newReportEvents,
                handleDeviceChange, 
                handleReportChange, 
                createDevice, 
                createReport,
                deviceFormData, 
                setDeviceFormData,
                reportFormData,
                setReportFormData,
                isLoading
            }}>
            
            {children}
        </ReporterContext.Provider>
    );
}