import Arrow from "../../../assets/img/arrow.png";
const ProjectCard = ({ h6, p, img }) => {
  return (
    <div className="relative">
      <div className="w-[400px]">
        <img src={img} />
      </div>
      <div
        className=" rounded-3xl flex flex-col items-start justify-center px-2 py-1 gap-y-5 bg-[#FFF]
      w-[300px] h-[260px]  absolute bottom-[-50px] left-10 text-primary rounded-br-[30%]"
      >
        <h6>{h6}</h6>
        <p className="text-2xl font-bold">{p}</p>
        <div className="flex items-center justify-center w-[60px] h-[60px]  rounded-full bg-accent">
          <img src={Arrow} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
