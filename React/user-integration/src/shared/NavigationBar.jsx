/* eslinst-disable react/prop-types */

import { IoHomeOutline } from "react-icons/io5";
import {useNavigate} from 'react-router-dom';
import {useState} from "react";
const NavigationBar = ({children}) => {
    const navigate = useNavigate();

    const handleNavigate = (rotue) =>{
        navigate(rotue);
    };





    return(
        <div  className={'w-[100%] h-[40px] shadow-lg mt-2'}>

            <div className={'flex flex-row '}>
                <div onClick={() => handleNavigate("/dashboard")} className={'flex cursor-pointer mt-1'}>
                    <IoHomeOutline className="mr-6 mt-0.5 ml-5 w-[20px] h-[20px]" />
                    <p className={'font-mono'}>Dashboard</p>
                </div>
                <div onClick={() => handleNavigate("/register")} className={'flex cursor-pointer mt-1 ml-4'}>
                    <p className={'font-mono'}>Register</p>
                </div>

            </div>
            {children}

        </div>




    )


}

export default NavigationBar;