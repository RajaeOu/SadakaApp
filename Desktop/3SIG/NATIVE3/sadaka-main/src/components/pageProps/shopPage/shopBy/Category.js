import React, { useState, useEffect } from "react";
import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";
import axios from 'axios';

const Category = ({ onChange }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [customCategory, setCustomCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      let response = await axios.get("http://localhost:8084/categories/all_categories");
      // Ajoutez le bouton 996 aux données récupérées
      setCategories([...response.data, { _id: 996, nom: "Autre" }]);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
    // Reset custom category when switching to another category
    setCustomCategory("");
  };

  const handleCustomCategoryChange = (event) => {
    setCustomCategory(event.target.value);
  };

  return (
    <div className="w-full">
      <NavTitle title="Catégorie" icons={false} />
      <div>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {categories.map(({ _id, nom }) => (
            <li
              key={_id}
              className={`border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between`}
            >
              <label>
                <input
                  type="radio"
                  name="category"
                  value={_id}
                  checked={_id === selectedCategoryId}
                  onChange={() => handleCategoryChange(_id)}
                  style={{ margin: "0 8px" }}
                />
                {nom}
              </label>
            </li>
          ))}
          {selectedCategoryId === 996 && (
            <li className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between">
              <label>
                <input
                  type="text"
                  placeholder="Autres"
                  value={customCategory}
                  onChange={handleCustomCategoryChange}
                  style={{ margin: "0 8px" }}
                />
              </label>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Category;
