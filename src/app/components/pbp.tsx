import React, { useEffect, useState } from "react";
interface PbpProps {
  jenis: string;
  massa: number;
  harga: number;
  sewa: number;
  luaslahan: number;
  periode: number;
  bulan: number;
  }
const Pbp: React.FC<PbpProps> = ({ jenis, massa, harga, sewa, luaslahan, periode, bulan }) => {
    const [pbp, setPbp] = useState(0);
    useEffect(() => { 
      const ab = (12 - bulan + 1 ) / periode;  
      const a = Number(harga) * Number(luaslahan) * 4;
      const b = Number(sewa) + 9995000;
      const c = a -b
      const d = b / (Math.abs(c)); 
      setPbp(d)
  }, [jenis, massa, harga, sewa, luaslahan, periode, bulan]);
  return (
    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      PBP
      </h5>
      <span className="text-sm font-light">{`${pbp.toFixed(2)}`}</span>
      <p className="mt-2 font-normal capitalize text-sm text-gray-700 dark:text-gray-400">
      Nilai PBP {pbp.toFixed(2)} artinya usaha dapat mengembalikan investasinya dalam waktu {pbp.toFixed(2)} tahun
      </p>
    </div>
  );
};

export default Pbp;
