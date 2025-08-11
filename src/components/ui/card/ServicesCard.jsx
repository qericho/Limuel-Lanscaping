const ServicesCard = ({ h3, p, icon, img }) => {
  return (
    <div className="text-primary">
      <div
        className="bg-[#FFFFFF] rounded-2xl flex w-[250px] h-full
      justify-center flex-col gap-y-10 p-4 shadow-sm"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{h3}</h3>
          <div>
            <img src={icon} />
          </div>
        </div>
        <div className="flex items-center flex-col gap-y-5 border]">
          <p>{p}</p>
          <div className="w-full h-full">
            <img className="w-full h-full object-cover rounded-2xl" src={img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
