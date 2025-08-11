import Headings from "../ui/Headings";

const desc =
  "Our experts will make a personalized plan for your yardso you can relax and enjoy your outdoor space hassle-free.";
const HowItWorks = () => {
  return (
    <section className="">
      <div className="w-full md:w-[800px] mx-auto text-center">
        <Headings
          sm_title={"how it works"}
          lg_title={"Yard and lawn care made simple."}
          desc={desc}
          style={"space-y-5"}
        />
      </div>
    </section>
  );
};

export default HowItWorks;
