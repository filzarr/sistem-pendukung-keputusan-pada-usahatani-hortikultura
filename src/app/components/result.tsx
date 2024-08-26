import React, { useEffect } from "react";
import dataSpk from "../spk/dataspk";
import Nvp from "./nvp";
import Bep from "./bep";
import Bc from "./bc";
import Pbp from "./pbp";
interface ResultProps {
  massa: number;
  jenis: string; // Misalnya, jika `jenis` adalah string, ubah sesuai kebutuhan
}
const Result: React.FC<ResultProps> = ({ massa, jenis }) => { 
  useEffect(() => {
    console.log("massa atau jenis berubah:", massa, jenis);
  }, [massa, jenis]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Nvp tahun={massa} jenis={jenis} />
      <Bep tahun={massa} jenis={jenis} />
      <Bc tahun={massa} jenis={jenis} />
      <Pbp tahun={massa} jenis={jenis} />

    </div>
  );
};

export default Result;
