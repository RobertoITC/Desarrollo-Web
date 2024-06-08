import userImage from '../../../assets/male-user.svg';


const CardInfo = ({user}) => {
    return(
        <div

            className={'flex flex-col w-fit h-fit ml-10 pr-4 pt-5 pb-5 bg-white shadow-lg rounded-[5px] pl-8 mr-8 justify-center mb-20 '}

        >


            <img src={userImage} alt={'avatar'} className={'p-2 w-[70px]'}/>
            <p className={'font-bold text-lg text'}>Name</p>
            <p className={'font-mono'}>{user.name}</p>
            <p className={'font-bold text-lg'}>Email</p>
            <p className={'font-mono'}>{user.email}</p>
            <p className={'font-bold text-lg'}>Address</p>
            <p className={'font-mono'}>{user.address}</p>
            <p className={'font-bold text-lg'}>Age</p>
            <p className={'font-mono'}>{user.age}</p>
            <p className={'font-bold text-lg'}>Student ID</p>
            <p className={'font-mono'}>{user.matricula}</p>
            <p className={'font-bold text-lg'}>Gender</p>
            <p className={'font-mono'}>{user.gender}</p>

        </div>


    )
};

export default CardInfo;