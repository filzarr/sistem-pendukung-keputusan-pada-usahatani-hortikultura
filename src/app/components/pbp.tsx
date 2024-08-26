import React from "react";
interface PbpProps {
    tahun: number;
    jenis: string; // Misalnya, jika `jenis` adalah string, ubah sesuai kebutuhan
  }
const Pbp: React.FC<PbpProps> = ({ tahun, jenis }) => {
    var pbp:string;
    var hari:string;
    if (jenis === "cabai-merah") { 
        pbp = '0,069'
        hari = '19'
      } else {
        pbp = '0,05'
        hari = '26'
      } 
  return (
    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      PBP
      </h5>
      <span className="text-sm font-light">{`${pbp}`}</span>
      <p className="mt-2 font-normal capitalize text-sm text-gray-700 dark:text-gray-400">
      Nilai PBP {pbp} artinya usaha dapat mengembalikan investasinya dalam waktu 0,05 tahun atau {hari} hari
      </p>
    </div>
  );
};

export default Pbp;
