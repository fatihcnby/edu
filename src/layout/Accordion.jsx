import { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="mb-4 border-b pb-3">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span className="font-semibold text-lg text-left">{title}</span>

        <svg
          className="fill-green-500 shrink-0 ml-4"
          width="18"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="8"
            width="18"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="8"
            width="18"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-700 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 mt-2"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-sm text-justify">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
