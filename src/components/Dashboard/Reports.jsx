import React, {useContext, useState} from "react";
import { ReporterContext } from "../../context/ReporterContext";
import {BsPlusCircleFill} from 'react-icons/bs';
import moment from 'moment';
import Loader from "./Loader";
moment().format('MMMM Do YYYY, h:mm:ss a');


const TableTitles = ({ Title }) => {
    return(
        <th scope="col" className="px-6 py-3 font-medium tracking-wider text-left text-gray-500 uppercase">
            {Title}
        </th>
    )
}

const TableData = ({ ReportID, DeviceID, DateReport, Severity, TxHash }) => {
    const date = moment(DateReport*1000).format('MMMM Do YYYY, h:mm:ss a');
    return(
        <tr className="transition-all hover:bg-gray-100 hover:shadow-lg">
            <td className="px-6 py-6 whitespace-nowrap">
                <div className="flex items-center">    
                    <div className="ml-4">
                        <div className="text-sm font-semibold text-gray-900">
                            {ReportID}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className=" text-sm text-gray-900 "> {DeviceID} </div>
            </td>
            <td className=" px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900"> { date } </div>
            </td>
            <td className=" px-6 py-4 whitespace-nowrap">
                <span className="inline-flex p-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"> {Severity} </span>
            </td>
            <td className="px-6 py-4 w-24 text-ellipsis overflow-hidden whitespace-nowrap ">
                <a target='_blank' href={`https://ropsten.etherscan.io/tx/${TxHash}#statechange`} className="text-indigo-600 hover:text-indigo-900">See on Etherscan.io</a>
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <a href="#" className="text-xl text-indigo-600 hover:text-indigo-900">View</a>
            </td>
        </tr>
    )
}

const Input = ({ placeholder, name, type, value, handleReportChange }) => (
    <input 
        className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
        placeholder={placeholder}
        type={type}
        step="1"
        max="1"
        value={value}
        onChange={(e) => handleReportChange(e, name)}
    />
)

const ReportAddForm = ({ setModalOpen }) => {
    const {reportFormData, createReport, handleReportChange} = useContext(ReporterContext);

    const handleSubmit = (e) => {
        const { deviceId, severity } = reportFormData;
        console.log(deviceId);
        e.preventDefault();

        if( !deviceId || !severity ) return;

        createReport();

        setModalOpen(false);

    }

    return(
        <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full px-4">
            <div className="relative top-40 mx-auto shadow-lg rounded-md bg-white max-w-m h-auto w-1/3">
                <div className="flex justify-between items-center bg-[#457B9D] text-white text-xl rounded-t-md px-4 py-2">
                    <h3>Add Report</h3>
                    <button onClick={() => setModalOpen(false)} >x</button>
                </div>
                <form className="max-h-auto p-4 space-y-5">
                    <Input placeholder="Device ID" name="deviceId" type="number" handleReportChange={handleReportChange}/>
                    <Input placeholder="Severity" name="severity" type="number" handleReportChange={handleReportChange}/>
                    <button className="py-2 px-5 bg-[#457B9D] text-gray-100 text-lg rounded-lg focus:bg-[#A8DADC]" onClick={handleSubmit}> Submit </button>
                </form>
            </div>
        </div>
    )
}


const Reports = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const { newReportEvents, isLoading } = useContext(ReporterContext);
    return(
        <main className="flex-1  max-h-full p-5 overflow-hidden overflow-y-scroll">
            <div className="flex items-start justify-start space-x-4 pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
                <h1 className="text-2xl font-bold whitespace-nowrap"> Reports </h1>
                <button 
                    className="pt-2 font-medium tracking-wider text-indigo-600 hover:text-indigo-900"
                    onClick={() => setModalOpen(true) }
                > 
                    <BsPlusCircleFill size={30}/> 
                </button>
                {!isLoading ? false : <Loader />}
            </div>

            {modalOpen ? <ReportAddForm setModalOpen={setModalOpen}/> : false}

            <div className="flex flex-col mt-6">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:px-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden border-b border-gray-200 rounded-md shadow-md">
                            <table className="min-w-full overflow-x-scroll divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <TableTitles Title={"ReportID"}/>
                                        <TableTitles Title={"DeviceID"}/>
                                        <TableTitles Title={"Date"}/>
                                        <TableTitles Title={"Severity"}/>
                                        <TableTitles Title={"TxHash"}/>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    newReportEvents.map((item) => (
                                        item.args === undefined ? null : 
                                        <TableData 
                                            key={item.args.reportId.toNumber() + item.args.date}
                                            ReportID={item.args.reportId.toNumber()}
                                            DeviceID={item.args.deviceId.toNumber()}
                                            DateReport={item.args.date.toNumber()}
                                            Severity={item.args.severity}
                                            TxHash={item.transactionHash.toString()}
                                        />
                                    ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default Reports;