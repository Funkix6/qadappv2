import React, { useState } from "react";
import { BsArrowBarRight, BsArrowLeft, BsArrowRight, BsBinoculars, BsCpu, BsFileEarmarkLock, BsFilePerson } from 'react-icons/bs'
import { Link } from "react-router-dom";

const SideBarIcons = ({ Icon, Title, menuCollapse}) => {
    return(
        <li>
            <button 
                className={"flex min-w-full items-center p-2 space-x-2 rounded-md hover:bg-gray-100" + (menuCollapse ? " justify-center " : " justify-start ")}>
                { Icon } {(menuCollapse ? null : <span> { Title } </span>)}
            </button>
        </li>
    );
}


const SideBar = () => {
    const [menuCollapse, setMenuCollapse] = useState(false);

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    }

    return(
        <aside  
            className={'fixed inset-y-0 flex h-[87vh] bg-white  z-10 flex flex-col flex-shrink-0 max-h-screen owerflow-hidden transition-all transform bg-white border-r shadow-lg lg:z-auto lg:static lg:shadow-none' + (menuCollapse ? ' w-20 ' : ' w-48 ')}>
            <div className="flex justify-between flex-shrink-0 p-2">
                <span className={"pt-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap" + (menuCollapse ? " justify-center " : " justify-start ")}>
                    IN2{menuCollapse ? "" : <span>-DAPP </span> }
                </span>
                <button className="rounded-md pt-2" onClick={menuIconClick}>
                    {menuCollapse ? (
                        <BsArrowRight size={25}/>
                    ) : (
                        <BsArrowLeft size={25}/>
                    )}
                </button>
            </div>
            <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
                <ul className="p-2 overflow-hidden">
                    {[
                        {Title:"Overview", Icon:<BsBinoculars className="w-6 h-6 text-gray-600" />},
                        {Title:"Devices", Icon:<BsCpu className="w-6 h-6 text-gray-600" />},
                        {Title:"Reports", Icon:<BsFileEarmarkLock className="w-6 h-6 text-gray-600"/>},
                        //{Title:"Users - WIP", Icon:<BsFilePerson className="w-6 h-6 text-gray-600" />}
                    ].map((item, index) => (
                        <Link to={`${item.Title}`} key={index + item}>
                            <SideBarIcons 
                                Title={item.Title}
                                Icon={item.Icon}
                                menuCollapse={menuCollapse}
                            />
                        </Link>
                    ))}
                </ul>
            </nav>
            <div className="flex-shrink-0 p-2 border-t max-h-14">
                <button
                    className="flex items-center justify-center w-full px-4 py-2 space-x-2 font-semibold uppercase bg-gray-300 border rounded-md focus:outline-none focus:ring"
                >
                <BsArrowBarRight className="h-6 w-6"/> {( menuCollapse ? "" : <span > Logout </span>)}
                </button>
            </div>
        </aside>
    )
}

export default SideBar;