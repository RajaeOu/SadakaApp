import React, { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";

const Quantity = () => {
  const [showIntervals, setShowIntervals] = useState(true);
  const [selectedInterval, setSelectedInterval] = useState(null);
  const quantityIntervals = [
    { id: 1, start: 0, end: 20 },
    { id: 2, start: 21, end: 40 },
    { id: 3, start: 41, end: 60 },
    { id: 4, start: 61, end: 80 },
    { id: 5, start: 81, end: 100 },
    { id: 6, start: 101, end: null }, // Option for values greater than 100
  ];

  const handleIntervalClick = (interval) => {
    setSelectedInterval(
      selectedInterval && selectedInterval.id === interval.id
        ? null
        : interval
    );
  };

  return (
    <div>
      <div
        onClick={() => setShowIntervals(!showIntervals)}
        className="cursor-pointer"
      >
        <NavTitle title="Quantité" icons={true} />
      </div>
      {showIntervals && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {quantityIntervals.map((interval) => (
              <li
                key={interval.id}
                className={`rounded-full border-[1px] border-[#F0F0F0] p-2 flex items-center justify-center cursor-pointer ${
                  selectedInterval && selectedInterval.id === interval.id
                    ? "bg-gray-200"
                    : ""
                }`}
                onClick={() => handleIntervalClick(interval)}
              >
                {interval.end ? `${interval.start}-${interval.end}` : "100+"}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Quantity;
