import React, { useState, useEffect } from "react";
import formatRupiah from "../helpers/formatRupiah";

interface NvpProps {
  jenis: string;
  massa: number;
  harga: number;
  sewa: number;
  luaslahan: number;
  periode: number;
  bulan: number;
  arusKas: number[];
  investasi: number;
  onRugiChange: (rugi: boolean) => void;
}

const Nvp: React.FC<NvpProps> = ({ jenis, massa, harga, sewa, luaslahan, periode, bulan, onRugiChange, arusKas , investasi}) => {
  const [rugi, setRugi] = useState(false);
  const [npv, setNpv] = useState(0);
  const [irr, setIrr] = useState(0);
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [tes, setTes] = useState(1);
  const [tesminus, setTesminus] = useState(1);
  const [npvplus, setNpvplus] = useState([]);
  useEffect(() => {
    const ab = (12 - bulan + 2) / periode;
    console.log(ab.toFixed(0));
    if (jenis === 'tomat') {
      setA(Number(harga) * Number(luaslahan) * Number(ab.toFixed(0) + 1));
      setB(Number(sewa) + Number(9995000));

    } else {
      setA(Number(harga) * Number(4000) * Number(4));

      setB(Number(sewa) + 18930000)
    } 

    for (let i = 0; i < massa; i++) {
      const a = tes * 1.06;
      setTes(a);
    }
    for (let i = 0; i < massa; i++) {
      const a = tes * 1.3;
      setTesminus(a);
    }
    let hasil = 0;
    for (let i = 0; i < arusKas.length; i++) {
      let c = Number(Math.pow(1.06, i + 1).toFixed(3));
      let a = arusKas[i] / Number(c);
      hasil = Number(hasil)+Number(a);
      console.log(arusKas[i]);
      console.log(a);
      console.log(hasil);
    }
    hasil = Number(hasil) - Number(investasi);
    let hasilmin = 0;
    for (let i = 0; i < arusKas.length; i++) {
      let c = Number(Math.pow(1.30, i + 1).toFixed(3));
      let a = Number(arusKas[i]) / Number(c);
      hasilmin = Number(hasilmin)+Number(a); 
      console.log(hasilmin);

    }
    hasilmin = Number(hasilmin) - Number(investasi);
    console.log(hasil);
    console.log(hasilmin);
    
    const c = Number(a) - Number(b); 
    const calculatedNpv = Number(hasil.toFixed(0));
    const npvyangmaudiapain = hasil;
    const npvminus = Number(hasilmin.toFixed(0));
    setNpv(Math.abs(calculatedNpv));
    setRugi(calculatedNpv < 0);
    onRugiChange(calculatedNpv < 0); 
    let k = hasil - hasilmin;
    const z = Number(hasil) / Number(k);
    console.log(z);
    const j = Number(6)+ (Number(z) * Number(24));
    setIrr(Number(j.toFixed(0)))

  }, [harga, sewa, luaslahan, periode]);

  return (
    <>
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          NPV 
        </h5>
        <span className="text-sm font-light">{npv < 0 ? formatRupiah(npv * -1) : formatRupiah(npv)}</span>
        <p className="mt-2 font-normal capitalize text-sm text-gray-700 dark:text-gray-400">
          Usaha akan mendapat {rugi === true ? 'Kerugian' : 'Keuntungan'} {npv < 0 ? formatRupiah(npv * -1) : formatRupiah(npv)}, selama umur
          ekonomis usaha 1 tahunnya
        </p>
      </div>
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          IRR
        </h5>
        <span className="text-sm font-light">{` ${irr.toFixed(0)}`}%</span>
        <p className="mt-2 font-normal capitalize text-sm text-gray-700 dark:text-gray-400">
          nilai IRR sebesar {irr.toFixed(0)}% yang artinya keuntungan dari penanaman ini akan memberikan keuntungan lebih besar dibanding menyimpan uang di Bank dengan suku bunga 6%
        </p>
      </div>
    </>
  );
};

export default Nvp;
