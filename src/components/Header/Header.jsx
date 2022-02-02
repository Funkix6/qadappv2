import React, {useState, useContext} from 'react';
import { BsList, BsX} from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { ReporterContext } from '../../context/ReporterContext';

const Dropdown = () => {
    return(
        <div class="group inline-block">
            <button
                class="text-lg text-[#F1FAEE] font-semibold 
                transition duration-200 cursor-pointer"
            >
                <span class="pr-1 font-semibold flex-1"> Dashboard </span>
            </button>
            <ul
                class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
                transition duration-150 ease-in-out origin-top min-w-32"
            >   
                <Link to="Dashboard/Overview"><li class="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer">Overview</li></Link>
                <Link to="Dashboard/Devices"><li class="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer">Devices</li></Link>
                <Link to="Dashboard/Reports"><li class="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer">Reports</li></Link>
            </ul>
        </div>   
    )
}

const NavbarItem = ({ title, classProps }) => {
    return(
        <Link to={`/${title}`}>
            <li className={`${classProps}`}>
                {title}
            </li>
        </Link>
    );
}

const Header = () => {
    const [toogleMenu, setToogleMenu] = useState(false);
    const { connectWallet, currentAccount } = useContext(ReporterContext)

    return( 
        <div className=''>
            <div className='flex justify-between items-center bg-trans py-0 lg:px-40 md:px-20 px-10 border-b'>
                <div className=''>
                    <a href='/'> <img src={logo} alt='logo' className='w-32 cursor-pointer' /> </a>
                </div>
                <ul className='lg:flex hidden items-center space-x-10 '>
                    {["Home", "About"].map((item, index) => (
                        <NavbarItem 
                            key={item + index} 
                            title={item} 
                            classProps="text-lg text-[#F1FAEE] uppercase font-semibold 
                            hover:text-[#E63946] transition duration-200 cursor-pointer "/>
                            
                    ))}
                    {currentAccount ? 
                        <li className='text-lg text-[#F1FAEE] font-semibold 
                        hover:text-[#E63946] transition duration-200 cursor-pointer'>
                            <p className='w-24 text-ellipsis overflow-hidden whitespace-nowrap'>{currentAccount}</p>
                        </li> 
                        :
                        <li className='text-lg text-[#F1FAEE] uppercase font-semibold 
                        hover:text-[#E63946] transition duration-200 cursor-pointer '>
                        <button 
                            className='flex w-auto justify-center items-center my-5 bg-[#E63946] p-3 rounded-full cursor-pointer hover:bg-[#F1FAEE] hover:text-[#E63946] transition duration-500 text-[#F1FAEE]'
                            onClick={connectWallet}
                            >
                            <FaEthereum size={22} /> Wallet Connect 
                            </button>
                        </li>
                    }
                    <li>
                         {currentAccount ? <Dropdown /> : false}
                    </li>
                </ul>
                <div className='flex relative md:hidden'>
                    { toogleMenu
                    ? <BsX className={'text-[#F1FAEE] hover:text-[#E63946] transition duration-200 cursor-pointer'} onClick={() => setToogleMenu(false) } size={50} /> 
                    : <BsList className={'text-[#F1FAEE] hover:text-[#E63946] transition duration-200 cursor-pointer'} onClick={() => setToogleMenu(true)} size={50}/> }
                    {toogleMenu && (
                        <ul
                            className="
                                z-10 fixed top-0 -right-2 p-3 w-[50vw] h-screen shadow-2xl md:hidden list-none
                                flex flex-col justify-start items-end rounded-md bg-[#1D3557] bg-opacity-90 text-[#F1FAEE]"
                        > 
                            <li className='text-xl w-full my-2 text-[#F1FAEE] hover:text-[#E63946]'>
                                <BsX size={45} onClick={() => setToogleMenu(false)} />
                            </li>
                            {["Home", "About"].map((item, index) => (
                                <NavbarItem 
                                    key={item + index} 
                                    title={item} 
                                    classProps="mx-0 sm:mx-2 my-2
                                    hover:text-[#E63946] transition-all
                                    duration-250 py-1 sm:p-0 text-3xl" />
                            ))}
                            <li>
                                
                            </li>
                        </ul>
                    )}
                </div>

            </div>
        </div>
        
    )
}

export default Header;