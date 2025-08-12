import { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      question: "What services do you offer for landscaping?",
      answer:
        "We provide lawn maintenance, garden design, tree trimming, irrigation system installation, and seasonal clean-ups.",
    },
    {
      question: "How often should I water my lawn?",
      answer:
        "Most lawns require about 1 to 1.5 inches of water per week, either from rainfall or irrigation. Deep, infrequent watering is best for root health.",
    },
    {
      question: "Do you offer eco-friendly landscaping options?",
      answer:
        "Yes! We offer native plant landscaping, drought-tolerant gardens, organic fertilizers, and sustainable irrigation systems.",
    },
    {
      question: "Can you design a low-maintenance garden?",
      answer:
        "Absolutely. We can create a beautiful garden using hardy plants, mulch for weed control, and smart layouts that minimize upkeep.",
    },
  ];

  return (
    <div className="mx-auto w-full md:w-[600px] space-y-4 px-2">
      {items.map((item, index) => (
        <div key={index} className="border px-6 py-4 rounded-lg shadow-sm">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full"
          >
            <h4 className="font-semibold text-primary">{item.question}</h4>
            <span
              className={`text-2xl transition-transform duration-300 ${
                openIndex === index ? "rotate-45" : "rotate-0"
              }`}
            >
              +
            </span>
          </button>

          {openIndex === index && (
            <p className="mt-3 text-gray-700 text-primary">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
