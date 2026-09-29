import Image from "next/image";
import React from "react";

export const ProductCard = () => {
  return (
    <div className="group h-full rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-surface-container-lowest flex flex-col lg:flex-row lg:min-h-105 5">
      <Image
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        alt=""
        width="300"
        height="300"
        src={img}
      />
      <div className="p-8 lg:w-1/2 flex flex-col justify-between bg-surface-container-lowest">
        <div>
          <h2 className="font-headline-sm text-2xl font-bold text-on-surface group-hover:text-primary transition-colors mb-5">
            {title}
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface/75 mt-space-xs mb-5">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between pt-space-sm mt-space-xs">
         
        </div>
      </div>
    </div>
  );
};
