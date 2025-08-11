const Headings = ({ style, sm_title, lg_title, desc }) => {
  return (
    <div className={`${style} text-primary`}>
      <h6 className="text-[12px] font-semibold">{sm_title}</h6>
      <h2 className="text-3xl font-semibold">{lg_title}</h2>
      <p className="text-[16px] md:text-[20px]">{desc}</p>
    </div>
  );
};

export default Headings;
