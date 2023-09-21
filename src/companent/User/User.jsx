import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { thumbnail, brand, title, id } = user;
  return (
    <div className="border-2 rounded-xl flex flex-col">
        <img src={thumbnail} alt="" className="w-full h-[300px] rounded-t-xl" />
      <div className="p-4">
        <h1 className="py-3 text-3xl font-semibold text-black">{brand}</h1>
        <h1 className="text-xl font-normal text-black">{title}</h1>
      </div>
      <Link to={`home/${id}`} className="flex-wrap">
        <button className="w-full py-3 text-2xl font-medium text-white bg-gradient-to-r from-[#5756FD] to-[#D040F5] hover:bg-gradient-to-l hover:from-[#1313fa] hover:to-[#ce26f8] rounded-b-xl mt-4">
          Details
        </button>
      </Link>
    </div>
  );
};

export default User;
