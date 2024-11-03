import React, { useEffect, useState } from "react";
import dataSpk from "../spk/dataspk";
import Nvp from "./nvp";
import Bep from "./bep";
import Bc from "./bc";
import Pbp from "./pbp";
import Tabletomat from "./tabletomat";
import Tablecabe from "./tablecabe";
import Hasilnya from "./hasilnya";
interface Data {
  jenis: string;
  massa: number;
  harga: number;
  sewa: number;
  luaslahan: number;
  periode: number;
  bulan: number;
  investasi: number;
  arusKas: number[];
}
interface ResultProps {
  data: Data;
}
const Result: React.FC<ResultProps> = ({ data }) => {

  const [hasil, setHasil] = useState(false);
  const handleRugiChange = (newRugi: boolean) => {
    setHasil(newRugi);
    console.log(hasil);

  };
  // useEffect(() => {
  //   console.log("massa atau jenis berubah:", massa, jenis);
  // }, [massa, jenis]);
  return (
    <> 
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Nvp investasi={data.investasi} onRugiChange={handleRugiChange} arusKas={data.arusKas} bulan={data.bulan}  jenis={data.jenis} massa={data.massa} harga={data.harga} sewa={data.sewa} luaslahan={data.luaslahan} periode={data.periode} />
        <Bep sewa={data.sewa} harga={data.harga} />
        <Bc sewa={data.sewa} bulan={data.bulan} harga={data.harga} periode={data.periode} luaslahan={data.luaslahan} />
        <Pbp bulan={data.bulan} jenis={data.jenis} massa={data.massa} harga={data.harga} sewa={data.sewa} luaslahan={data.luaslahan} periode={data.periode} />
        <Hasilnya hasil={hasil} />
      </div>
    </>
  );
};

export default Result;
