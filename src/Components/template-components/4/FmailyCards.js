function FamiltCards({ name, relation, image, staticTemplateData }) {
  return (
    <div
      style={{ backgroundColor: staticTemplateData?.theme?.bgColor }}
      className="bg-[#edf3f8] p-7 min-h-[100px]"
    >
      <img src={image} alt="" className="rounded-full " />
      <h2
        style={{ color: staticTemplateData?.theme?.textBgColor, borderColor: staticTemplateData?.theme?.textBgColor  }}
        className="text-[25px] min-h-[50px] text-[#002642] font-Futura font-bold uppercase border-b-[1px] pb-3 mb-5 border-[#c4d8e4]"
      >
        {name}
      </h2>
      <div
        style={{ color: staticTemplateData?.theme?.textBgColor }}
        className="font-Mulish text-[18px] text-[#848892]"
      >
        <p className="mb-4">{relation}</p>
      </div>
    </div>
  );
}

export default FamiltCards;
