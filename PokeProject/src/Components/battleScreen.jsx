
import './battleScreen.css'
const battleScreen = ({myPokeSelection, computerRandomSelection, myHealth, enemyHealth}) => {

    console.log({myPokeSelection});
    console.log({computerRandomSelection});
    return(
        <div className='battleContainer'>
            <div className='enemyContainer'>
                <div className='textUI'>
                    <h1 className={'pokeFont'}>{enemyHealth} HP<br />{computerRandomSelection[0].name}</h1>

                </div>
                <img className={'imgBattle'} src={computerRandomSelection[0].sprites.front_default} alt={'enemy slection'}></img>
            </div>
            <div className='myContainer'>

                <img className={'imgBattle'} src={myPokeSelection[0].sprites.back_default} alt={'my'}></img>
                <div className='textUI'>
                    <h1 className={'pokeFont'}>{myHealth} HP<br/>{myPokeSelection[0].name}</h1>
                </div>
            </div>
        </div>

    );


};

export default battleScreen;