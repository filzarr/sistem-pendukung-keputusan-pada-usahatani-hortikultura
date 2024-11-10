import React, { useState, useEffect } from "react";

interface BcProps {
  harga: number;
  luaslahan: number; 
  sewa: number;
  bulan: number;
  periode: number;
}

const Bc: React.FC<BcProps> = ({ harga,luaslahan,sewa, bulan, periode}) => {
    const [bc, setBc] = useState(0);
    useEffect(() => { 
      const ab = (12 - bulan + 1 ) / periode;  
      const a = Number(harga) * Number(luaslahan) * 4;
      const b = Number(sewa) + 9995000;
      const c = a/b;
      setBc(c)
  }, [harga,luaslahan, sewa]);

  return (
    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      NET B/C
      </h5>
      <span className="text-sm font-light">{` ${bc.toFixed(2)}`}</span>
      <p className="mt-2 font-normal capitalize text-sm text-gray-700 dark:text-gray-400">
      nilai B/C Rasio sebesar {bc.toFixed(2)}
      </p>
    </div>
  );
};

export default Bc;
