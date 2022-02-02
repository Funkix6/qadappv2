import React, { useRef, useState, useEffect } from "react"
import { CartesianGrid, LineChart, Tooltip, Line, XAxis } from 'recharts'



const DataAreaChart = ({ Title, Data, LineDataKey, LineColor, XAxisDataKey}) => {
    const divRef = useRef();

    const [width, setWidth] = useState();

    const setNewSize = () => {
        setWidth(divRef.current.clientWidth);
    }

    useEffect(() => {
        setNewSize();
    }, [])

    useEffect(() => {
        window.addEventListener("resize", setNewSize)
    }, []);

    return(
        <div className="p-4 pb-0 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
            <div ref={divRef} className="flex items-start justify-between">
                <div className="flex flex-col space-y-2 items-center">
                    <LineChart
                        className="pl-4"
                        width={width - 30}
                        height={450}
                        data={Data} >

                        <XAxis dataKey={XAxisDataKey} />
                        <Tooltip />
                        <CartesianGrid stroke="#A8DADC" />
                        <Line type="monotone" dataKey={LineDataKey} stroke={LineColor} yAxisId={0}/>
                    </LineChart>
                    <span className="text-xl text-gray-700 pb-2"> {Title} </span>
                </div>
            </div>
        </div>   
    )
}

export default DataAreaChart;