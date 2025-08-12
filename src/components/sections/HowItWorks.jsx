import { data } from "../../assets/data";
import LargeBtn from "../ui/button/LargeBtn";
import HowItWorksCard from "../ui/card/HowItWorksCard";
import Headings from "../ui/Headings";

const HowItWorks = () => {
  return (
    <section className="">
      <div className="w-full xl:w-[800px] mx-auto text-center">
        <Headings
          sm_title={data.howItWorksSection.sm_title}
          lg_title={data.howItWorksSection.lg_title}
          desc={data.howItWorksSection.description}
          style={"space-y-5"}
        />
      </div>

      <div
        className="w-full xl:w-[1200px] mx-auto my-10 p-4
       grid place-items-center gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      >
        {data.howItWorksSection.steps.map((step, index) => (
          <HowItWorksCard
            i={index}
            icon={step.icon}
            h6={`STEP ${step.step_number}`}
            h4={step.title}
            p={step.description}
          />
        ))}
      </div>
      <div className="text-center">
        <LargeBtn
          title={"Make an Appointment"}
          styles={
            "w-[300px] py-3 md:py-4 font-bold bg-accent hover:bg-accent/80 text-primary"
          }
        />
      </div>
    </section>
  );
};

export default HowItWorks;
