import React, { useState, useEffect } from "react";

interface NvpProps {
  tahun: number;
  jenis: string; // Misalnya, jika `jenis` adalah string, ubah sesuai kebutuhan
}

const Nvp: React.FC<NvpProps> = ({ tahun, jenis }) => {
  const [cashFlow, setCashFlow] = useState<number>(202005000);
  const [discountRate, setDiscountRate] = useState<number>(6);
  const [npv, setNpv] = useState<number | null>(null);

  useEffect(() => {
    calculateNPV();
  }, [tahun, discountRate, cashFlow, jenis]);

  const calculateNPV = () => {
    const rate = discountRate / 100;
    const cashFlowValue = cashFlow;
    const n = tahun; // Menggunakan props tahun

    // Rumus NPV
    if (jenis === "cabai-merah") {
      setCashFlow(457070000);
      const npvValue = cashFlowValue / Math.pow(1 + rate, 1);
      setNpv(npvValue);
    } else {
      setCashFlow(202005000);

      // Rumus default atau untuk jenis lain
      const npvValue =
        cashFlowValue * ((1 - Math.pow(1 + rate, -tahun)) / rate);
      setNpv(npvValue);
    }
  };

  // Fungsi untuk memformat angka
  const formatNumber = (number: number | null): string => {
    if (number === null) return "Belum dihitung";
    return new Intl.NumberFormat("id-ID").format(number); // Menggunakan format untuk Indonesia
  };
  if (npv !== null) {
    const bawah = npv * 0.8151;
    const a = (npv / (npv - bawah))  
    var IRR = ((6/100) + (a) * (24/100)) * 100;
  } else {
    var IRR = 0;
  }
  return (
    <>
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          NPV
        </h5>
        <span className="text-sm font-light">{`Rp ${formatNumber(npv)}`}</span>
        <p className="mt-2 font-normal capitalize text-sm text-gray-700 dark:text-gray-400">
          Usaha akan mendapat keuntungan Rp {formatNumber(npv)}, selama umur
          ekonomis usaha {tahun} tahun
        </p>
      </div>
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        IRR
        </h5>
        <span className="text-sm font-light">{` ${IRR.toFixed(2)}`}%</span>
        <p className="mt-2 font-normal capitalize text-sm text-gray-700 dark:text-gray-400">
        nilai IRR sebesar {IRR.toFixed(2)}% yang artinya keuntungan dari penanaman ini akan memberikan keuntungan lebih besar dibanding menyimpan uang di Bank dengan suku bunga 6%
        </p>
      </div> 
    </>
  );
};

export default Nvp;
