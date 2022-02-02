import React from "react";

const TableTitles = ({ Title }) => {
    return(
        <th scope="col" className="px-6 py-3 font-medium tracking-wider text-left text-gray-500 uppercase">
            {Title}
        </th>
    )
}

const TableData = ({ ID, Name, Role, City, LastConnection}) => {
    return(
        <tr className="transition-all hover:bg-gray-100 hover:shadow-lg">
            <td className="px-6 py-6 whitespace-nowrap">
                <div className="flex items-center">    
                    <div className="ml-4">
                        <div className="text-sm font-semibold text-gray-900">
                            {ID}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className=" text-sm text-gray-900 "> {Name} </div>
            </td>
            <td className=" px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900"> {Role} </div>
            </td>
            <td className=" px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900"> {City} </div>
            </td>
            <td className=" px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900"> {LastConnection} </div>
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <a href="#" className="text-xl text-indigo-600 hover:text-indigo-900">Edit</a>
            </td>
        </tr>
    )
}



const Users = () => {
    return(
        <main className="flex-1  max-h-full p-5 overflow-hidden overflow-y-scroll">
            <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
                <h1 className="text-2xl font-bold whitespace-nowrap"> Users </h1>
            </div>
            <div className="flex flex-col mt-6">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:px-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden border-b border-gray-200 rounded-md shadow-md">
                            <table className="min-w-full overflow-x-scroll divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <TableTitles Title={"ID"}/>
                                        <TableTitles Title={"Name"}/>
                                        <TableTitles Title={"Rôle"}/>
                                        <TableTitles Title={"City"}/>
                                        <TableTitles Title={"Last Connection"}/>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TableData 
                                        ID={"1"}
                                        Name={"John Doe"}
                                        Role={"Admin"}
                                        City={"Paris, France"}
                                        LastConnection={new Date().getTime()}
                                    />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default Users;