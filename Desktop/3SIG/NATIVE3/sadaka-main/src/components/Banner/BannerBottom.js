import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";

const BannerBottom = () => {
  return (
    <div className="w-full bg-white border-b-[1px] py-4 border-b-gray-200 px-4">
      <div className="max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center gap-2 w-100 shadow-sm hover:shadow-md duration-300 mx-auto">
          <p className="text-lightText text-base">SADAKA</p>
          <p className="text-lightText text-base">S'entraider Lorsque nous donnons joyeusement et acceptons avec gratitude, tout le monde est béni.</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
