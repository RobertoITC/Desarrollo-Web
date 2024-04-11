
import '/Users/robertomoralesnieto/poke-project/src/App.css'

const ScreenPokemones = ({pokemones,position}) => {

        console.log({pokemones});

        return(
            <div className="pokemon-container">

                {/* eslint-disable-next-line react/prop-types */}
                {pokemones.map((pokemon,idx)=>(
                    <div className={'poke'} key={pokemon.id} style={{backgroundColor: idx===position?'rgba(251, 255, 147,0.5)':'transparent'}}>
                        <img src={pokemon.sprites.front_default} alt=""/>
                        {pokemon.name}

                    </div>

                ))}
            </div>
        );


};



export default ScreenPokemones