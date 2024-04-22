import {useState} from "react";

const Dashboard = () => {

    const [form, setForm] = useState({
        search:''
    });

    const handleChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        const newValues ={
            ...form,
            [e.target.name]: e.target.value

        }
        console.log(newValues);
        setForm(newValues);
    }




    const handleSearch = (value) => {

        const searchValue=value;
        console.log(searchValue);
    }
    return(

        <div className={'flex bg-gradient-to-b from-spotify-grey from-90% to-gray-500 h-screen justify-center align-items-center'}>
            <div>
                <div className={'pt-5 flex justify-center '}>
                    <h1 className={'text-2xl font-bold text-spotify-green'}>Barra de búsqueda Spotify</h1>
                </div>
                <div className={'flex p-4 justify-center'}>
                    <input
                        className='w-80 h-7 border-2 border-gray-700 rounded-lg bg-spotify-grey text-white'
                        placeholder='  Buscar...'
                        type='text'
                        name='search'
                        value={form.search}
                        onChange={handleChange}
                    ></input>
                    <div className={'flex flex-col justify-center pl-5'}>
                        <button className={'rounded-full bg-spotify-green w-20 hover:bg-spotify-green/50'}
                                onClick={handleSearch}>Search
                        </button>
                    </div>
                </div>
                <div className={'flex flex-col pl-10 pt-20 pb-20 pr-20 justify-center'}>

                    <div className={'flex bg-gray-500/35 w-200 h-20 rounded-lg m-2 hover:bg-gray-500/70'}>
                        <div className={'w-30 h-30 overflow-hidden m-3'}>
                            <img src={'src/assets/3m.png'} alt={'3m'} className="w-full h-full object-contain"></img>
                        </div>
                        <div className="flex flex-col justify-center w-100% text-white">
                            Ruler of Everything
                            <div className={'text-sm text-gray-500 italic'}>Tally Hall</div>

                        </div>
                    </div>
                    <div className={'flex bg-gray-500/35 w-200 h-20 rounded-lg m-2 hover:bg-gray-500/70'}>
                        <div className={'w-30 h-30 overflow-hidden m-3'}>
                            <img src={'src/assets/EEP.jpg'} alt={'3m'} className="w-full h-full object-contain"></img>
                        </div>
                        <div className="flex flex-col justify-center w-100% text-white">
                            Wonder of You
                            <div className={'text-sm text-gray-500 italic'}>Elvis Presley</div>
                        </div>
                    </div>

                    <div className={'flex bg-gray-500/35 w-200 h-20 rounded-lg m-2 hover:bg-gray-500/70'}>
                        <div className={'w-30 h-30 overflow-hidden m-3'}>
                            <img src={'src/assets/Choke.jpeg'} alt={'3m'}
                                 className="w-full h-full object-contain"></img>
                        </div>
                        <div className="flex flex-col justify-center w-100% text-white">
                            Choke
                            <div className={'text-sm text-gray-500 italic'}>iDKHOW But They Found Me</div>
                        </div>
                    </div>
                    <div className={'flex bg-gray-500/35 w-200 h-20 rounded-lg m-2 hover:bg-gray-500/70'}>
                        <div className={'w-30 h-30 overflow-hidden m-3'}>
                            <img src={'src/assets/tsk.jpg'} alt={'3m'} className="w-full h-full object-contain"></img>
                        </div>
                        <div className="flex flex-col justify-center w-100% text-white">
                            Tusk
                            <div className={'text-sm text-gray-500 italic'}>Fleetwood Mac</div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard;