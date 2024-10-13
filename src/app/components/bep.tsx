import React, { useEffect, useState } from "react";
import formatRupiah from "../helpers/formatRupiah";
interface BEPProps {
  sewa: number;
  harga: number;

}

const Bep: React.FC<BEPProps> = ({ sewa, harga }) => {
  const [bep, setBep] = useState(0)
  useEffect(() => {
      const a = harga - 1110
      const b = sewa / a
      setBep(b)
  }, [harga, sewa]);
  return (
    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        BEP Harga
      </h5>
      <span className="text-sm font-light">{bep.toFixed(2)} kg</span>
      <p className="mt-2 font-normal capitalize text-sm text-gray-700 dark:text-gray-400">
        usaha ini akan mencapai titik impas pada jumlah produksi  {bep.toFixed(2)} kg
      </p>
    </div>
  );
};

export default Bep;
