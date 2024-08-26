import React from "react";
interface BEPProps {
  tahun: number;
  jenis: string;
}

const Bep: React.FC<BEPProps> = ({ tahun, jenis }) => {
 var F:number;
 var R:number;
 var V:number;
 var bep:string;
  if (jenis === "cabai-merah") {
    F = 4000000;
    R = 30000;
    V = 764;
    bep = '955';
  } else {
    F = 4000000;
    R = 9000;
    V = 1110;
    bep = '583,125';
  }
  const calculateBEP = () => {
    if (R > V) {
      return (F / (R - V)) ;
    } else {
      return null;
    }
  };
  const formatNumber = (number: number | null): string => {
    if (number === null) return "Belum dihitung";
    return new Intl.NumberFormat("id-ID").format(number); // Menggunakan format untuk Indonesia
  };

  const N = calculateBEP();
  return (
    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        BEP Harga
      </h5>
      <span className="text-sm font-light">{`${bep}`}</span>
      <p className="mt-2 font-normal capitalize text-sm text-gray-700 dark:text-gray-400">
        usaha ini akan mencapai titik impas pada saat harga produksi sebesar Rp {bep}
      </p>
    </div>
  );
};

export default Bep;
