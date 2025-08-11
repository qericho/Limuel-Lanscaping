import About_Img from "../../assets/img/about-img.png";
import LargeBtn from "../ui/button/LargeBtn";
import Headings from "../ui/Headings";
const desc =
  "We assist homeowners in saving time and effort by designing and upkeeping landscapes, lawns, and outdoor living areas that garner admiration. Our team comprises skilled maintenance professionals certified well-versed in effective landscape upkeep services to ensure the year-round health of your property.";
const About = () => {
  return (
    <section className="my-10 md:my-20">
      <div
        className="w-full xl:w-[1200px] mx-auto gap-y-5
      flex xl:flex-row flex-col items-center justify-between p-4"
      >
        <div className="w-[350px] md:w-[500px]">
          <img className="w-full h-full object-cover" src={About_Img} />
        </div>
        <div className=" my-5 w-full lg:w-[800px] xl:w-[500px]">
          <Headings
            sm_title={"WHY CHOOSE US"}
            lg_title={"Take the hassle out of garden maintenance"}
            desc={desc}
            style={"space-y-5"}
          />
          <div className="my-5">
            <LargeBtn
              title={"Learn more about us"}
              styles={
                "w-[300px] py-3 md:py-4 font-bold my-5 bg-accent hover:bg-accent/80 text-primary"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
