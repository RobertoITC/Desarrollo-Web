
import './App.css'
import {useEffect, useState} from "react";
import ScreenPokemones from "./Components/ScreenPokemones.jsx";

function App() {
    const [pokemones,setPokemones]=useState('');
    const [position,setPosition]=useState(0);
    const[myPokeSelection,setMyPokes]=useState([]);
    /*const[]=useState(false);*/
    const pokeUrl='https://pokeapi.co/api/v2/pokemon';
    const fetchData= async (url) => {
        const response= await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    };
    const handleSelection =(foward) =>{
        console.log(foward);
        if(foward&&position>20) return;
        if(!foward&&position===0) return;
        if(!foward){
            setPosition(position-1);
        }
        else{
            setPosition(position+1)
        }
        console.log(position);
    }

    const filterSelection=()=>{
        console.log(position);
        console.log(pokemones);
        const mySelection=pokemones.filter((value,idx)=>position===idx)
        setMyPokes(mySelection);
        console.log(mySelection);
        computerSelection();
    }

    const computerSelection=()=>{
        const computerPos=Math.floor(Math.random()*20);
        console.log(computerPos);
        const computerSelection =pokemones.filter((value,idx)=>computerPos===idx)
        console.log(computerSelection);
    }

    const pokemonData = async (pokeUrl)=>{
        const response = await fetchData(pokeUrl);
        const dataPromises = response.results.map((poke)=>(
            fetchData(pokeUrl+'/'+poke.name)



        ));
        const pokemonWithImages = await Promise.all(dataPromises);

        setPokemones(pokemonWithImages);

        console.log(pokemonWithImages);
    };

    useEffect(() => {
        pokemonData(pokeUrl);
    }, []);

  return (

      <>
        <div className={'bckgrnd'}>
          <div className={'main-container'}>
              <h1 className={'head'} >Retro PKMN</h1>
              <div className={'layout-game'}>
                  <div className={'screen-container'}>
                <div className={'screen-layout'}>
                    {pokemones &&<ScreenPokemones pokemones={pokemones} position={position} />}
                </div>
                  </div>


                  <div className={'button-container'}>
                      <div className={'container-dpad'}>
                          <div className={'dpad-death'}></div>
                          <button className={'dpad-up'}></button>
                          <div className={'dpad-death'}></div>
                          <button className={'dpad-left'} onClick={()=> handleSelection (false)}></button>
                          <div className={'dpad-center'}></div>
                          <button className={'dpad-right'} onClick={() => handleSelection(true)}></button>
                          <div className={'dpad-death'}></div>
                          <button className={'dpad-down'}></button>
                          <div className={'dpad-death'}></div>
                      </div>

                      <div className={'container-select'}>
                          <div className={'button-select-container'}>
                              <button className={'button-select'} onClick={()=>filterSelection()}></button>
                              <div>Select</div>

                          </div>
                          <div className={'button-start-container'}>
                              <button className={'button-start'}></button>
                              <div>Start</div>
                          </div>
                      </div>

                      <div className={'container-action'}>
                          <div className={'button-b-container'}>
                              <button className={'button-b'}>B</button>



                          </div>

                          <div className={'button-a-container'}>
                              <button className={'button-a'}> A</button>



                          </div>


                      </div>


                  </div>
              </div>
          </div>
        </div>


      </>
  )
}

export default App
