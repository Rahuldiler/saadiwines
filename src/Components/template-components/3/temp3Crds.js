function Temp3Crds({imgSrc,name,relationship,contactNo, classnme}){
    return(
        <div className={`mt-3 ${classnme}`} >
        <div className='mt-3 '>
            <img src={imgSrc} alt=' ' className='md:w-52 md:h-52 w-40 h-40 object-cover rounded-full mx-auto'/>
        </div>
        <div className= '!font-lora mt-4 lg:mt-0 text-center'>
           <p className=''>{name}</p>
        {!contactNo&&<p className=''>{relationship}</p>}
            {contactNo&&<p className=''><a href={"tel:"+contactNo}>{contactNo}</a></p>}
        </div>
    </div>
    )
}
export default Temp3Crds


{/* <div className=' '>
            <div className='mt-3 '>
                <img src={imgSrc} alt=' ' className='w-52 mx-auto'/>
            </div>
            <div className= '!font-lora mt-4 lg:mt-0'>
               <p className=''>{name}</p>
                {!contactNo&&<p className=''>{relationship}</p>}
                {contactNo&&<p className=''><a href={"tel:"+contactNo}>{contactNo}</a></p>}
            </div>
        </div> */}


//         <div className="mx-20">
//         <div className='text-center bg-slate-300 px-16 py-11 rounded-lg shadow-2xl relative '>
//        <div className=' '>
//            <img src={imgSrc} alt='' className='rounded-2xl w-28 h-28 shadow-2xl mx-auto'/>
//        </div>
//        <div className='!font-lora mt-2'>
//            <p className=''>{name}</p>
//            {!contactNo&&<p className=''>{relationship}</p>}
//            {contactNo&&<p className=''><a href={"tel:"+contactNo}>{contactNo}</a></p>}
//        </div>
//    </div>
//    </div>