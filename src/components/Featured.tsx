import React from "react";

export default function Featured() {
  return (
    <div>
      <div className="featured-con flex justify-between items-center bg-gradient-to-r from-[#0c2431] to-[#0c2431] px-50 py-5">
        <div className="featurehead text-white text-4xl">Featured In</div>
        <button className="px-8 py-2 rounded-md bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
          Gradient
        </button>
      </div>
    </div>
  );
}
