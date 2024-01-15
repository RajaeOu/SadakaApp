import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  const imageUrl = productInfo.img;
  
  return (
    <div className="flex flex-col gap-5">
      <img src={imageUrl} alt={productInfo.productName} className="w-full h-auto" />
      <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
      <p className="text-xl font-semibold">{productInfo.quantity}</p>
      <p className="text-xl font-semibold">{productInfo.commune}</p>
      <p className="text-xl font-semibold">{productInfo.date}</p>
      <p className="text-base text-gray-600">{productInfo.des}</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Categorie:</span> {productInfo.category}
      </p>
    </div>
  );
};

export default ProductInfo;
