import React, { useState, useEffect } from "react";
import Commune from "./shopBy/Commune";
import Category from "./shopBy/Category";
import Quantity from "./shopBy/Quantity";

const ShopSideNav = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    category: null,
    quantity: null,
    commune: null,
  });

  const applyFilters = () => {
    // Your logic to apply filters goes here
    // For demonstration, let's just log the selected filters
    console.log("Applying Filters:", selectedFilters);
  };

  // Function to update the selected filters
  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };
  
  useEffect(() => {
    console.log('State Updated:', selectedFilters);
  }, [selectedFilters]);

  // Function to reset filters
  const handleResetFilters = () => {
    setSelectedFilters({
      category: null,
      quantity: null,
      commune: null,
    });
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex justify-end">
        <button
          className="bg-[#fd9292] hover:bg-[#9D2143] duration-300 text-white text-lg font-titleFont py-2 px-4 rounded mr-2"
          onClick={applyFilters}
        >
          Filtrer
        </button>
        <button
          className="bg-[#fd9292] hover:bg-[#9D2143] duration-300 text-white text-lg font-titleFont py-2 px-4 rounded ml-2"
          onClick={handleResetFilters}
        >
          Annuler
        </button>
      </div>
      <Category onChange={(value) => handleFilterChange("category", value)} />
      <Quantity onChange={(value) => handleFilterChange("quantity", value)} />
      <Commune onChange={(value) => handleFilterChange("commune", value)} />
    </div>
  );
};

export default ShopSideNav;
