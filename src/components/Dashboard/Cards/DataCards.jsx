import React from "react"

const DataCard = ({ Title, Data, Icon }) => {
    return(
        <div className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
            <div className="flex items-start justify-between">
                <div className="flex flex-col space-y-2">
                    <span className="text-xl text-gray-700"> {Title} </span>
                    <span className="text-4xl font-semibold pt-5"> {Data} </span>
                </div>
                <div className="p-5 bg-gray-200 rounded-md text-6xl">
                    { Icon }
                </div>
            </div>
        </div>
        
    )
}

export default DataCard;

