import React, { useState, useEffect } from "react";

interface BcProps {
  tahun: number;
  jenis: string; // Misalnya, jika `jenis` adalah string, ubah sesuai kebutuhan
}

const Bc: React.FC<BcProps> = ({ tahun, jenis }) => {
    var nilai: number;
    if (jenis === "cabai-merah") { 
        nilai = 20,933
      } else {
        nilai = 15,434
      } 

  return (
    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      NET B/C
      </h5>
      <span className="text-sm font-light">{` ${nilai}`}</span>
      <p className="mt-2 font-normal capitalize text-sm text-gray-700 dark:text-gray-400">
      nilai B/C Rasio sebesar {nilai} berati setiap Rp 1.000 biaya yang dikeluarkan pada usaha ini akan memberikan keuntungan Rp {nilai}
      </p>
    </div>
  );
};

export default Bc;
