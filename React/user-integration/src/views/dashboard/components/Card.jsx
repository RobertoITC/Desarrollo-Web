import React from 'react';
import {useNavigate} from "react-router-dom";
import userImage from '../../../assets/male-user.svg';
const Card =({user})=>{

    const navigate = useNavigate();

    const handleClick=()=>{
        console.log(user.id);
        navigate("/users/"+user.id);
    };




    return(
        <div className={' grid justify-items-start align-sub'}>


            <div
                className=" w-80 bg-white h-24 shadow-2xl rounded-md flex justify-center items-center flex-col m-2.5 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110"
                onClick={handleClick}
            >
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px'}}>
                    <div style={{padding: '10px'}}>
                        <img src={userImage} alt={'nada'} className={'w-[60px]'}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'start'}}>
                        <div style={{fontFamily: 'monospace', padding: '5px'}}>
                            {user.name}

                        </div>
                        <div style={{fontFamily: 'monospace', padding: '1px'}}>
                            {user.email}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Card;

