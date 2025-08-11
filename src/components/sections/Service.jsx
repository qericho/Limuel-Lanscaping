import Headings from "../ui/Headings";
import { data } from "../../assets/data";
import ServicesCard from "../ui/card/ServicesCard";

const Service = () => {
  return (
    <div>
      <div>
        <Headings
          style={
            "flex flex-col items-center gap-y-3 md:gap-y-5 my-8 w-full md:w-[720px] mx-auto text-center px-2"
          }
          sm_title={data.servicesSection.sm_title}
          lg_title={data.servicesSection.lg_title}
          desc={data.servicesSection.description}
        />
        {/* CARD CONTAINER */}
        <div className="overflow-x-auto px-5 py-5">
          <div className="mx-auto w-[1200px] grid-cols-4 grid gap-x-5">
            {data.servicesSection.services.map((item, key) => (
              <ServicesCard
                key={key}
                h3={item.title}
                p={item.description}
                icon={item.icon}
                img={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
