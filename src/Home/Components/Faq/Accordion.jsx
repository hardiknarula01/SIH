import React from "react";
import { motion } from "framer-motion";

const Accordion = ({ i, expanded, setExpanded, title, description }) => {
  const isOpen = i === expanded;

  const variants = {
    open: { height: "auto", opacity: 1 },
    collapsed: { height: 0, opacity: 0 },
  };

  return (
    <div className="border rounded-lg shadow-md overflow-hidden mx-auto">
      <motion.div
        className="cursor-pointer hover:bg-gray-100 p-4 flex justify-between items-center"
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <svg
          className={`w-6 h-6 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </motion.div>
      <motion.div
        className="bg-gray-100 overflow-hidden"
        initial="collapsed"
        animate={isOpen ? "open" : "collapsed"}
        variants={variants}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="p-4">
          <p>{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Accordion;
