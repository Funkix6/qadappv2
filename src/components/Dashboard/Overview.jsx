import React, { useContext } from "react";
import DataAreaChart  from "./Charts/DataAreaChart";
import DataCard from "./Cards/DataCards";
import { BsCpu, BsFileEarmarkLock, BsFilePerson } from "react-icons/bs";
import { ReporterContext } from "../../context/ReporterContext";
import { data } from '../../utils/data'


const Overview = () => {
    console.log(data)
    const { deviceCount, reportCount } = useContext(ReporterContext);
    return(
        <main className="flex-1  max-h-full p-5 overflow-hidden overflow-y-scroll">
            <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
                <h1 className="text-2xl font-bold whitespace-nowrap"> Overview </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                    {Title:"IoT Sensors Live", Data: deviceCount, Icon:<BsCpu />},
                    {Title:"Reports generated", Data: reportCount, Icon:<BsFileEarmarkLock />},
                    ].map((item, index) => (
                        <DataCard 
                            key={index + item}
                            Title={item.Title}
                            Data={item.Data}
                            Icon={item.Icon}
                        />
                    ))}    
            </div>
            <div className="grid grid-cols-2 gap-5 mt-6 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
                <DataAreaChart 
                    Title={"Number of reports (1 Year) (WIP) "} 
                    LineColor={"#1D3557"}
                    XAxisDataKey={"name"}
                    LineDataKey={"reports"}
                    Data={data}
                /> 
                <DataAreaChart 
                    Title={"Number of reports (1 Week) (WIP) "} 
                    LineColor={"#1D3557"}
                    XAxisDataKey={"name"}
                    LineDataKey={"reports"}
                    Data={data}
                /> 
            </div>
        </main>        
    )
}

export default Overview;