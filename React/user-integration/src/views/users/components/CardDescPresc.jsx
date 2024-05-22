

const CardInfo = ({description}) => {
    return(
        <div
            style={{
                width: '100px',
                height: '60px',
                backgroundColor: 'white',
                boxShadow: '8px 14px 15px -3px rgba(0,0,0,0.1)',
                borderRadius: '5px',
                paddingRight: '5px',
            }}
        >
            <p>Description</p>
            <p>{description.description}</p>

        </div>


    )
};

export default CardInfo;