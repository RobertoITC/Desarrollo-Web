import {useState} from "react";
import {useNavigate} from "react-router-dom";


const Form = () => {
    const UrlLocalhost = 'http://localhost:3000/users';
    const navigate = useNavigate();


    const [form, setForm]=useState({
        userName:'',
        email:'',
        age:'',
        matricula:'',
        address:'',
        gender:''

    });

    const handleChange = (e) => {
       const { name, value } = e.target;
       const newForm = {
           ...form,
           [name]: value,

       };
        setForm(newForm);
       console.log(name);
       console.log(value);

    };

    const handleSubmitForm = async () => {
        const res = await fetch(UrlLocalhost, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });

        if (res.status === 200) {
            alert('Registro exitoso');
            navigate("/");
        } else {
            alert('Error en el registro');
        }
    };



    return(
        <div className={'bg-[#399c7e]/45 w-[300px] h-[460px] flex items-center justify-start rounded-lg shadow-lg'}>

            <form style={{display: "flex", flexDirection: 'column', alignItems: "start", paddingLeft: "30px"}}>
                <p className={'font-mono text-l mb-1'}>Nombre</p>
                <input
                    className={'h-[25px] w-[15rem] border border-gray-300 rounded-md mb-3'}
                    type={'text'}
                    name={'name'}
                    placeholder={'Nombre'}
                    onChange={handleChange}
                />
                <p className={'font-mono text-l mb-1'}>Email</p>
                <input
                    className={'h-[25px] w-[15rem] border border-gray-300 rounded-md mb-3'}
                    type={'email'}
                    name={'email'}
                    placeholder={'Email'}
                    onChange={handleChange}
                />
                <p className={'font-mono text-l mb-1'}>Age</p>

                <input
                    className={'h-[25px] w-[15rem] border border-gray-300 rounded-md mb-3'}
                    type={'number'}
                    name={'age'}
                    placeholder={'Age'}
                    onChange={handleChange}
                />
                <p className={'font-mono text-l mb-1'}>Scholar ID</p>

                <input
                    className={'h-[25px] w-[15rem] border border-gray-300 rounded-md mb-3'}
                    type={'text'}
                    name={'matricula'}
                    placeholder={'Scholar ID'}
                    onChange={handleChange}
                />
                <p className={'font-mono text-l mb-1'}>Address</p>

                <input
                    className={'h-[25px] w-[15rem] border border-gray-300 rounded-md mb-3'}
                    type={'text'}
                    name={'address'}
                    placeholder={'Street/City/State'}
                    onChange={handleChange}
                />
                <p className={'font-mono text-l mb-1'}>Gender</p>

                <select
                    className={'h-[30px] w-[15rem] border border-gray-300 rounded-md p-[2px] text-sm'}
                    name='gender'
                    onChange={handleChange}
                >
                    <option value=''>Select Gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                </select>
                <button
                    type='submit'
                    onClick={handleSubmitForm}
                    className="h-[30px] w-20 mt-5 bg-[#399c7e] border-none font-mono text-sm rounded-md text-black "
                >
                    Register
                </button>
            </form>
        </div>
    )
};

export default Form;