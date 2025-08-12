import Accordion from "../ui/Accordion ";
import Headings from "../ui/Headings";

const Faqs = () => {
  return (
    <section className="my-20">
      <div className="mt-30 mb-15">
        <Headings
          sm_title={"Frequently Asked Questions"}
          lg_title={"You've got questions. we've got answers."}
          style={"text-center"}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <Accordion />
      </div>
    </section>
  );
};

export default Faqs;
