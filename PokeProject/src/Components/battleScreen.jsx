
import './battleScreen.css'
const battleScreen = ({myPokeSelection, computerRandomSelection, myHealth, enemyHealth}) => {

    console.log({myPokeSelection});
    console.log({computerRandomSelection});
    return(
        <div className='battleContainer'>
            <div className='enemyContainer'>
                <h1>{enemyHealth}</h1>
                <img src={computerRandomSelection[0].sprites.front_default} alt={'enemy slection'}></img>
            </div>
            <div className='myContainer'>
                <h1>{myHealth}</h1>
                <img src={myPokeSelection[0].sprites.back_default} alt={'my'}></img>
            </div>
        </div>

    );


};

export default battleScreen;