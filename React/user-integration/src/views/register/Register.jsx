import Form from './components/Form.jsx';
import React from 'react';
import form from '../../assets/form.svg';
import NavigationBar from "../../shared/NavigationBar.jsx";




const Register = () => {
    return(

        <NavigationBar>
            <div className={"mt-3 h-screen bg-[#399c7f]/20"}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div>
                <img src={form} alt="logo"  className={'mt-[5rem] ml-[4rem] w-[40rem] h-[30rem]'} />
            </div>

            <div style={{width:'50%', marginTop: '6rem',marginLeft: '9rem'}}>
                <Form />
            </div>
        </div>
            </div>
            </NavigationBar>


    )
};

export default Register;