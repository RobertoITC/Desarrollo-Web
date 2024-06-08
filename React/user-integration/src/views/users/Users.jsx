
import React, {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import PrevDescription from "./components/PrevDescription.jsx";
import CardInfo from "./components/CardInfo.jsx";
import NavigationBar from "../../shared/NavigationBar.jsx";

const Users = () => {

    const [form, setForm] = useState({
        description:'',
        prescription:'',
        createat:'',
        message:'',
        contextRAG:'',
    });

    const [isLoadingGenerate, setIsLoadingGenerate] = useState(false);

    const [descriptions, setDescriptions]=useState([]);


    const [user, setUser] = useState([]);

    const{id}=useParams();

    const UrlLocalhost = 'http://localhost:3000/';


    const fetchUsersById=async () =>{
        const response = await fetch(UrlLocalhost+'users/'+id);
        const data = await response.json();
        setUser(data);
        return data;
    }



    const fetchDescription=async () =>{
        console.log("ID from users",id);
        console.log("Fetch Description");
        const res = await fetch(UrlLocalhost+'description/'+id);
        const data = await res.json();
        console.log(data);
        setDescriptions(data);

    };
    useEffect(() => {
        fetchDescription();
        fetchUsersById()
    }, []);


    const handleInputChange=(e)=>{
        const{name, value} = e.target;
        const newForm={
            ...form,
            [name]:value
        }
        console.log(newForm);
        setForm(newForm);
    };




    const handleGenerateHelp = async() => {
        setIsLoadingGenerate(true);
        const prompt={
            prompt:form.description,
        }
        console.log(prompt);
        const response = await fetch(UrlLocalhost+'chat/',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(prompt)
        })

        const data=await response.json();
        console.log(data);
        setForm({...form,prescription:data.response});
        console.log(form);
        setIsLoadingGenerate(false);
        return data;

    };

    const handleGenerateContextHelp = async() => {
        setIsLoadingGenerate(true);
        const message={
            message:form.message,
        }
        console.log(message);
        const response = await fetch(UrlLocalhost+'chat/context',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message)
        })

        const data=await response.json();
        console.log(data);
        setForm({...form, contextRAG:data.response});
        setIsLoadingGenerate(false);
        return data;

    };

    const handleSaveGeneration = async()=>{
        const response = await fetch(UrlLocalhost+'description/'+id,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        })

        if (response.status === 200) {

            alert('Save Succesful');

        } else {
            alert('Error on save');
        }
    };



    return (
        <NavigationBar >
<div className={'overflow-x-auto mt-3'} >
        <div className={'overflow-auto'}>
            <PrevDescription description={descriptions}/>
        </div>
    <div className={'flex flex-row justify-center bg-[#399c7f]/20'}>
        <div className={'flex flex-col h-screen justify-center'}>
            <CardInfo user={user}/>
            </div>


            <div className={'flex flex-col justify-center'}>
                <div className={'flex flex-row justify-end'}>
                    <div className={'m-4'}>
                        <p className={'text-lg font-bold'}>Description</p>
                        <textarea
                            value={form.description}
                            name={'description'}
                            onChange={handleInputChange}
                            className={'w-[300px] h-[400px] pt-1 pl-2 border-2 border-[#399c7f]/80 rounded-md'}

                        />
                    </div>
                    <div className={'m-4'}>
                        <p className={'text-lg font-bold'}>Prescription </p>
                        <textarea
                            value={form.prescription}
                            name={'prescription'}
                            onChange={handleInputChange}
                            className={'w-[300px] h-[400px] pl-2 pr-2 text-justify font-mono border-2 border-[#399c7f]/80 rounded-md italic'}
                        />
                    </div>
                    <div className={'m-4 flex flex-col'}>
                        <p className={'text-lg font-bold'}>Question RAG </p>
                        <textarea
                            value={form.message}
                            name={'message'}
                            onChange={handleInputChange}
                            className={'w-[200px] h-[200px] pt-1 pl-2 border-2 border-[#399c7f]/80 rounded-md'}
                        />

                    </div>
                    <div className={'m-4'}>
                        <p className={'text-lg font-bold'}>Context Response RAG </p>
                        <textarea
                            value={form.contextRAG}
                            name={'contextRAG'}
                            onChange={handleInputChange}
                            readOnly={true}
                            className={'w-[200px] h-[200px] pl-2 pr-2 text-justify font-mono border-2 border-[#399c7f]/80 rounded-md italic'}
                        />
                        <button
                            className={"h-10 w-fit pl-2 pr-2 mt-2 text-white bg-[#399c7f] border-none text-md rounded-md cursor-pointer ml-6"}
                            type={'submit'}
                            onClick={handleGenerateContextHelp}


                        >{isLoadingGenerate ? "Loading..." : "Generate RAG Answer"}
                        </button>
                    </div>
                </div>
                <div className={'flex justify-center mr-[125px]'}>
                    <button
                        className={`h-10 w-24 mt-2 mr-3 text-white bg-[#399c7f] hover:bg-[#2f7a5f] border-none text-md rounded-md cursor-pointer ${isLoadingGenerate ? 'opacity-50 cursor-not-allowed' : ''}`}
                        type="submit"
                        onClick={handleGenerateHelp}
                        disabled={isLoadingGenerate}
                    >
                        {isLoadingGenerate ? 'Loading...' : 'Generate'}
                    </button>

                    <button
                        className={`h-10 w-24 mt-2 mr-8 text-white bg-[#399c7f] hover:bg-[#2f7a5f] border-none text-md rounded-md cursor-pointer ${isLoadingGenerate ? 'opacity-50 cursor-not-allowed' : ''}`}
                        type="submit"
                        onClick={handleSaveGeneration}
                        disabled={isLoadingGenerate}
                    >
                        {isLoadingGenerate ? 'Loading...' : 'Save'}
                    </button>

                </div>
            </div>


    </div>

</div>
        </NavigationBar>
    )


}

export default Users;