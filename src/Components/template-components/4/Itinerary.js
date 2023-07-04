import Link from "next/link"

function Itinerary({functionName,dateTime,description,image,mapsLocation}){
    return(
       
            <div className="bg-[#edf3f8] p-7 min-h-[480px] lg:min-h-[550px]">
                <h2 className="text-[25px] min-h-[100px] text-[#002642] font-Futura font-bold uppercase border-b-[1px] pb-3 mb-5 border-[#c4d8e4]">{functionName}</h2>
                <div className="font-Mulish text-[18px] text-[#848892]">
                <p className="mb-4">{dateTime}</p>
                <p className="mb-4 min-h-[180px] lg:min-h-[250px]">{description}</p>
                <p className="!text-[#8facc2] font-semibold underline">
                    <a href={mapsLocation}>See Location</a>
                </p>
                </div>
            </div>

     
    )
}

export default Itinerary