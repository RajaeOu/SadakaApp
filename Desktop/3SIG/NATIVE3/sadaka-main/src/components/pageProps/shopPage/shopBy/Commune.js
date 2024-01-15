import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";
import axios from "axios";

const Commune = ({ onCommuneSelectionChange }) => {
  const [showCommunes, setShowCommunes] = useState(false);
  const [customCommune, setCustomCommune] = useState("");
  const [selectedCommunes, setSelectedCommunes] = useState([]);
  const [communes, setCommunes] = useState([]);

  useEffect(() => {
    const fetchCommunes = async () => {
      try {
        const response = await axios.get("http://localhost:8084/Commune/names");
        setCommunes(response.data);
      } catch (error) {
        console.error("Error fetching communes", error);
      }
    };

    fetchCommunes();
  }, []);

  const handleCommuneSelect = (event) => {
    setSelectedCommunes(Array.from(event.target.selectedOptions, (option) => option.value));
  };

  const handleCustomCommuneChange = (event) => {
    setCustomCommune(event.target.value);
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <NavTitle title="Communes" icons={true} />
        <button
          onClick={() => setShowCommunes(!showCommunes)}
          className="cursor-pointer bg-white border border-gray-300 px-4 py-2 rounded-md ml-2"
        >
          Choisissez une commune
        </button>
      </div>
      {showCommunes && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute z-10 top-12 left-0"
        >
          <select
            multiple
            className="w-full p-2 border border-gray-300 rounded-md"
            value={selectedCommunes}
            onChange={handleCommuneSelect}
            style={{ minHeight: "150px", overflowY: "auto" }}
          >
            {communes.map((commune) => (
              <option key={commune} value={commune}>
                {commune}
              </option>
            ))}
          </select>
          {selectedCommunes.includes("Autres") && (
            <div className="border-t border-gray-300 pt-2">
              <label>
                <input
                  type="text"
                  placeholder="Autres"
                  value={customCommune}
                  onChange={handleCustomCommuneChange}
                  className="w-full p-1 border border-gray-300 rounded-md"
                />
              </label>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Commune;
