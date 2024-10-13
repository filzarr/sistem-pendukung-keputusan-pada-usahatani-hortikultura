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
  onRugiChange: (rugi: boolean) => void;
}

const Nvp: React.FC<NvpProps> = ({ jenis, massa, harga, sewa, luaslahan, periode, bulan, onRugiChange  }) => {
  const [rugi, setRugi] = useState(false);
  const [npv, setNpv] = useState(0);
  const [irr, setIrr] = useState(0);
  const [b, setB] = useState(0);
  useEffect(() => {
    const ab = (12 - bulan + 1 ) / periode; 
    console.log(ab);
    
    const a = Number(harga) * Number(luaslahan) * Number(ab);
    console.log(a);
    if (jenis === 'tomat') {
      setB(Number(sewa) + 9995000) 
      
    }else{
      setB(Number(sewa) + 18930000) 

    } 
    const c = Number(a) - Number(b);
    console.log(c);
    console.log("diatas c");
    const calculatedNpv = c / 1.06;
    setNpv(Math.abs(calculatedNpv));
    setRugi(calculatedNpv < 0);
    onRugiChange(calculatedNpv < 0);
    const apc = Math.abs(calculatedNpv)

    const x = apc *  0.8151;
    console.log(x);
    const z = apc / (apc - x)
    console.log(apc);
    
    const j = (0.06 + z + 0.24 );
    console.log(j);
    
    setIrr(j)
    
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
        <span className="text-sm font-light">{` ${irr.toFixed(2)}`}%</span>
        <p className="mt-2 font-normal capitalize text-sm text-gray-700 dark:text-gray-400">
        nilai IRR sebesar {irr.toFixed(2)}% yang artinya keuntungan dari penanaman ini akan memberikan keuntungan lebih besar dibanding menyimpan uang di Bank dengan suku bunga 6%
        </p>
      </div> 
    </>
  );
};

export default Nvp;
