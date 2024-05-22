


const PrevDescription = ({description}) => {
    return (
        <div className="pl-3 flex flex-row overflow-x-auto w-screen space-x-4 bg-[#399c7f]/20">
            {description.map((des, idx) => (
                <div key={`card-${idx}`} className="w-[250px]
                 h-[150px] border-2 border-[#399c7f]/80 rounded-lg flex-shrink-0 shadow-lg m-3 justify-center overflow-auto bg-white transform transition-transform duration-300 ease-in-out hover:scale-110">
                    <div className="flex flex-col justify-center ml-2 overflow-auto">
                        <p className="font-bold">Description</p>
                        <p key={`description-${idx}`}>{des.description}</p>
                        <br />
                        <p className="font-bold">Prescription</p>
                        <p key={`prescription-${idx}`}>{des.prescription}</p>
                        <br />
                        <p className="font-bold">Date created</p>
                        <p key={`date-${idx}`}>{des.createat}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default PrevDescription;