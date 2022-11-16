import { useState } from "react";
import Image from "next/image";
import { StarIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
   const [rating] = useState(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
   );
   const [hasPrime] = useState(Math.random() < 0.5);
   return (
      <div className="relative flex flex-col m-5 bg-white z-30 p-10">
         <p className="absplute top-2 right-2 text-xs italic text-gray-400">
            {category}
         </p>
         <Image src={image} height={200} width={200} objectFit="contain" />
         <h4 className="my-3">{title}</h4>
         <div className="flex">
            {Array(rating)
               .fill()
               .map((_, i) => (
                  <StarIcon className="h-5" />
               ))}
         </div>
         <p className="text-xs my-2 line-clamp-2">{description}</p>
         <span className="mb-5">
            <CurrencyDollarIcon className="h-5" />
            {price}
         </span>
         {hasPrime && (
            <div className="flex items-center space-x-2 -mt-5">
               <img
                  className="text-xs text-gray-500"
                  src="https://links.papareact.com/fdw"
                  alt=""
               />
               <p>FREE Next-day Delivery</p>
            </div>
         )}
         <button className="mt-auto button"> Add to Basket</button>
      </div>
   );
}

export default Product;
