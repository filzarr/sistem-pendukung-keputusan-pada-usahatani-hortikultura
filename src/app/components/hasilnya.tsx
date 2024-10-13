import React, { useEffect, useState } from "react";
interface hasilnyaProps {
 hasil: boolean
  }
const Hasilnya:React.FC<hasilnyaProps> = ({ hasil }) => { 
  return (
    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Hasilnya: {hasil? 'Tidak Layak' : 'Layak'}
      </h5> 
    </div>
  );
};

export default Hasilnya;
