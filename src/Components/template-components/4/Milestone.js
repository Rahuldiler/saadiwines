function Milestone4({title,description,id}){
    return(
        <div className="grid lg:grid-cols-2 grid-cols-1 max-w-7xl mx-auto ">
          <div  className={` pt-10 lg:pb-28 pb-8 relative ${id % 2 == 0 ? "lg:order-2 text-center lg:text-left lg:pl-12": "lg:order-1 text-center lg:text-right pr-0 lg:pr-12"}`} >
            <h3 className="text-[22px] mb-2 font-Futura font-semibold">{title}</h3>
            <p className={`text-[#848892] text-xs mt-2 ${id % 2 == 0 ? "pr-0 lg:pr-52": "pl-0 lg:pl-52"}  leading-[1.7rem]`}>{description}</p>
            <div className={`absolute hidden lg:block rotate-180 top-0 ${id % 2 == 0 ? "-left-[1px]": "right-0"}  w-[1px] h-full bg-[#738ea5]`}></div>
          </div>
          <div className={`relative mb-16 lg:mb-0 ${id % 2 == 0 ? "lg:order-1": "lg:order-2"}`}>
            <div className={`${id % 2 == 0 ? "lg:ml-40": "lg:ml-28"} lg:ml-28 relative lg:inline-block rounded-full p-2`}>
            <img src="/assets/templete/4/milestone/story-1.jpg" alt="" className="border-[1px] border-dashed border-[#86a0b6] p-3 rounded-full mx-auto"/>
            <img src="/assets/templete/4/milestone/timeline-shape.png" alt="" className="   absolute -bottom-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
            </div>
            <div className={`hidden lg:block absolute border-b-[1px]  border-dashed border-[#86a0b6] w-[26%] h-[40%] rounded-[50%] bottom-[90px] ${id % 2 == 0 ? "right-0 rotate-[200deg]": "left-0 rotate-[150deg]"}  rotate-[150deg] `}></div>
          </div>
        </div>
    )
}

export default Milestone4