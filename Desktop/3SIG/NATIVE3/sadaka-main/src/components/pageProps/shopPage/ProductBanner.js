import React, { useEffect, useState, useRef, useContext } from "react";
import { GoTriangleDown } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { Context } from "../../../Context";
import axios from "axios";

const ProductBanner = ({ itemsPerPageFromBanner }) => {
  const { products, setProducts } = useContext(Context);

  const [girdViewActive, setGridViewActive] = useState(true);
  const [listViewActive, setListViewActive] = useState(false);
  const [selected, setSelected] = useState("Annonce new"); // Default to "Annonces récentes"

  useEffect(() => {
    const gridView = document.querySelector(".gridView");
    const listView = document.querySelector(".listView");

    if (gridView && listView) {
      gridView.addEventListener("click", () => {
        setListViewActive(false);
        setGridViewActive(true);
      });

      listView.addEventListener("click", () => {
        setGridViewActive(false);
        setListViewActive(true);
      });
    }
  }, [girdViewActive, listViewActive]);

  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const tempProducts = products.slice();

    if (searchQuery !== "") {
      const filtered = tempProducts.filter((item) =>
        item && item.productName && item.productName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchQuery, products]);

  useEffect(() => {
    // Function to fetch data based on selected option
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/tri-par-date?ordre=${selected}`);
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchData(); // Fetch data when the component mounts and when the selected option changes
  }, [selected, setProducts]);

  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
      {/* Left Part Start here */}
      <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
        <input
          className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Rechercher une annonce"
        />
        <FaSearch className="w-5 h-5" />
      </div>
      {/* Left Part End here */}

      {/* Right Part Start here */}
      <div className="flex items-center gap-2 md:gap-6 mt-4 md:mt-0">
        <div className="flex items-center gap-2 text-base text-[#767676] relative">
          <label className="block">Trier par:</label>
          <select
            onChange={(e) => setSelected(e.target.value)}
            value={selected}
            id="countries"
            className="w-32 md:w-52 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
          >
            <option value="Annonce new">Annonces récentes</option>
            <option value="Annonce old">Annonces anciennes</option>
          </select>
          <span className="absolute text-sm right-2 md:right-4 top-2.5">
            <GoTriangleDown />
          </span>
        </div>
      </div>
      {/* Right Part End here */}
    </div>
  );
};

export default ProductBanner;
