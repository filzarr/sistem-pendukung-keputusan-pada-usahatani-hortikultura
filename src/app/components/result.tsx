import React from "react";
import dataSpk from "../spk/dataspk";
const Result = (jenis: any) => {
  const data = dataSpk[0].data[jenis.jenis];  
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
     
      {data.map((val, index) => (
        <div key={index} className="block   p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {val.judul}
          </h5>
          <span className="text-sm font-light">{val.harga}</span>
          <p className="mt-2 font-normal capitalize text-sm text-gray-700 dark:text-gray-400">
            {val.deskripsi}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Result;
