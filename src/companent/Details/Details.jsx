import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  console.log(params);
  const [image, setImage] = useState(null);
  const details = useLoaderData();
  console.log(details);
  const {
    thumbnail,
    images,
    brand,
    category,
    description,
    discountPercentage,
    price,
    rating,
    stock,
    title,
  } = details;

  return (
    <div className="md:flex justify-between gap-10  mt-20">
      <div className="md:w-[50%]">
        <img
          src={image ? image : thumbnail}
          alt=""
          className="w-full h-[300px] md:h-[500px] rounded-xl shadow-[10px_0px_10px_10px] shadow-slate-200 "
        />
        <div className="flex gap-3 mt-5">
          {images.map((img, i) => (
            <img
              onClick={() => setImage(img)}
              key={i}
              src={img}
              alt=""
              className={`w-[18%] md:h-[100px] shadow-2xl ${
                image === img ? "bg-orange-400" : "bg-gray-200"
              }  p-4 rounded-lg`}
            />
          ))}
        </div>
      </div>
      <div className="md:w-[50%] mt-4">
        <h1 className="text-3xl font-medium">Name : {brand}</h1>
        <h1 className="text-xl font-normal py-2">Category : {category}</h1>
        <h1 className="text-xl font-normal">Title : {title}</h1>
        <h1 className="text-xl font-normal py-2">
          Description : {description}
        </h1>
        <h1 className="text-xl font-normal">
          DiscountPercentage : {discountPercentage}
        </h1>
        <div className="flex justify-between items-center pt-2 mb-8">
        <h1 className="text-xl font-normal">Prices : {price}</h1>
        <h1 className="text-xl font-normal">Rating : {rating}</h1>
        <h1 className="text-xl font-normal">Stock : {stock}</h1>
        </div>
        <Link to='/' className='w-full text-xl md:text-2xl font-semibold text-white rounded-lg bg-gradient-to-r from-[#5756FD] to-[#D040F5] hover:bg-gradient-to-l hover:from-[#1313fa] hover:to-[#ce26f8] px-7 md:px-20 py-2 '>Go To Home Pages</Link>
        </div>
    </div>
  );
};

export default Details;
