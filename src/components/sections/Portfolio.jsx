import { data } from "../../assets/data";
import ProjectCard from "../ui/card/ProjectCard";
import Headings from "../ui/Headings";

const Portfolio = () => {
  return (
    <section>
      <div className="w-full md:w-[620px] mx-auto text-center my-15">
        <Headings
          sm_title={data.portfolioSection.sm_title}
          lg_title={data.portfolioSection.lg_title}
          desc={data.portfolioSection.description}
          style={"space-y-5"}
        />
      </div>
      <div
        className="lg:flex-row flex-col flex items-center justify-between 
      w-full xl:w-[1100px] mx-auto px-2 md:px-10 gap-y-20"
      >
        <ProjectCard
          h6={data.portfolioSection.projects[0].category}
          p={data.portfolioSection.projects[0].description}
          img={data.portfolioSection.projects[0].image}
        />

        <ProjectCard
          h6={data.portfolioSection.projects[1].category}
          p={data.portfolioSection.projects[1].description}
          img={data.portfolioSection.projects[1].image}
        />
      </div>
    </section>
  );
};

export default Portfolio;
