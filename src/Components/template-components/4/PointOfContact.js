function PointOfContact({contactNumber,firstName,fromSide,image,lastName}){
    return(
        <div className="bg-[#edf3f8] p-7 min-h-[250px]">
            <img src={image} alt="" className="rounded-full w-32 mx-auto mb-5"/>
            <div className="font-Mulish text-[18px] text-[#848892]">
            <h2 className="text-[25px] min-h-[100px] text-[#002642] font-Futura font-bold uppercase border-b-[1px] pb-2 mb-2 border-[#c4d8e4]">{firstName} {lastName}</h2>
            <p className="mb-4">{contactNumber}</p>
            <p className="mb-4 min-h-[50px]">{fromSide}</p>
            </div>
        </div>
    )
}

export default PointOfContact