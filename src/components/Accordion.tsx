import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { faqData } from "../types/Faq.type";

function AccordionItem({ title, content }: faqData) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-[#9ca6ae] py-6 ">
      <div className="  flex justify-between gap-3">
        <p className="font-bold"> {title}</p>
        <div
          className="p-2 flex flex-col justify-center items-center rounded-full bg-[#cfd5d5] hover:text-white hover:bg-green"
          onClick={toggleOpen}
        >
          {isOpen ? (
            <ChevronUpIcon className="w-2  stroke-[5px] " />
          ) : (
            <ChevronDownIcon className="w-2  stroke-[5px] " />
          )}
        </div>
      </div>
      {isOpen && <p className="mt-5">{content}</p>}
    </div>
  );
}

export default AccordionItem;
