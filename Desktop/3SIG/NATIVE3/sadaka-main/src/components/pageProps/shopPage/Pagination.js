import React, { useState, useEffect, useContext } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import { Context } from "../../../Context";
import axios from 'axios'
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((annonce) => (
          <div key={annonce.id} className="w-full">
            <Product
              _id={annonce.id}
            
              img={annonce.photo?.base64} // Use optional chaining to handle potentially undefined 'photo' object
              productName={annonce.titre}
              quantity={annonce.quantite}
              category={annonce.categorie?.nom} // Use optional chaining to handle potentially undefined 'categorie' object
              commune={annonce.commune?.commune} // Use optional chaining to handle potentially undefined 'commune' object
              des={annonce.description}
            />
              
          </div>
        ))}
    </>
  );
}


const Pagination = ({ itemsPerPage }) => {
  const { products, setProducts } = useContext(Context);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
    setItemStart(newOffset);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8084/annonces/all_annonces");
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchData();
  }, [setProducts]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8084/annonces/all_annonces");
        const productsWithBase64 = response.data.map((annonce) => ({
          ...annonce,
          photo: {
            base64: `data:image/png;base64,${annonce.photo}`,
          },
        }));
        setProducts(productsWithBase64);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchData();
  }, [setProducts]);

  return (
    <div>
      {/* Pagination controls here */}
      <ReactPaginate
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel=""
        pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
        pageClassName="mr-6"
        containerClassName="flex text-base font-semibold font-titleFont py-10"
        activeClassName="bg-black text-white"
      />

      <p className="text-base font-normal text-lightText">
        Products from {itemStart === 0 ? 1 : itemStart} to {endOffset} of{" "}
        {products.length}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items currentItems={currentItems} />
      </div>
    </div>
  );
};

export default Pagination;