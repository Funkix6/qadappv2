import React, { useContext } from 'react';
import IndusBlockchain from "../../images/IndusBlockchain.png"

const Introduction = () => {



    return( 
        <div className='flex w-full justify-center items-center'>
            <div className='flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
                <div className='flex flex-1 justify-start flex-col md:mr-10'>
                    <h1 className='text-3xl sm:text-5xl py-1 text-[#F1FAEE]'>
                        Monitor your production <br />
                        with the Ethereum Blockchain !
                    </h1>
                    <p className='text-left mt-5 font-light md:w-9/12 w-11/12 text-base text-[#F1FAEE]'>
                        Take advantage of the trustless environment that a Blockchain provides
                        to prove the quality of your final products.
                    </p>
                    <button className="flex-auto w-32 justify-center items-center my-5 bg-[#E63946] p-3 rounded-full cursor-pointer hover:bg-[#F1FAEE] hover:text-[#E63946] transition duration-500 text-[#F1FAEE]" >
                        <p className='font-semibold text-base'> Learn more !</p>
                    </button>
                </div>
                <div className='flex flex-col flex-1 items-center justify-start w-32 md:mt-0 mt-10'>
                    <img src={IndusBlockchain} alt="Image stylisée"/>
                </div>
            </div>
        </div>
    )
}

export default Introduction;