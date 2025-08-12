const HowItWorksCard = ({ icon, h6, h4, p, i }) => {
  return (
    <div className="text-primary">
      <div
        key={i}
        className="shadow-sm w-full md:w-[350px] h-[230px] text-center rounded
      flex flex-col items-center gap-y-2 p-2"
      >
        <div className="flex items-center justify-center size-[50px] bg-white rounded">
          <img src={icon} />
        </div>
        <h6>{h6}</h6>
        <h4 className="text-2xl font-semibold">{h4}</h4>
        <p className="text-[16px]">{p}</p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
