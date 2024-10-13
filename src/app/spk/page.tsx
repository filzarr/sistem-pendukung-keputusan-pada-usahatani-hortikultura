"use client"
import React, { useState } from "react";
import Result from "../components/result";

interface IFormInput {
  jenis: string;
  massa: number;
  harga: number;
  sewa: number;
  luaslahan: number;
  periode: number;
  bulan: number;
}

const Spk = () => {
  const [formData, setFormData] = useState<IFormInput>({
    jenis: '',
    massa: 0,
    harga: 0,
    sewa: 0,
    luaslahan: 0,
    periode: 0,
    bulan: 0,
  });
  const [errors, setErrors] = useState<Partial<IFormInput>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [Massa, setMassa] = useState<number>(0);
  const [Jenis, setJenis] = useState('');

  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);

  const validate = (data: IFormInput) => {
    const newErrors: Partial<IFormInput> = {};
    if (!data.jenis) newErrors.jenis = 'Jenis belum dipilih'; 
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });// Validasi input sebagai number atau kosong
  };

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const validationErrors = validate(formData);
    // console.log(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsLoading(false);
    } else {
      setErrors({});
      // console.log(Jenis)
      setOpen(true);
      setMassa(formData.massa);
      setJenis(formData.jenis);
      setIsLoading(false);
    }
  };
  return (
    <div className="px-[32px] md:px-[64px]  py-[64px] space-y-8">
      <header>
        <p className="text-center text-3xl font-bold text-[#65B741]">
          ANALISIS
        </p>
      </header>
      <form onSubmit={formSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="">
          <label
            htmlFor="jenis"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Jenis Tanaman
          </label>
          <select
            id="jenis"
            onChange={handleChange}
            name="jenis"
            value={formData.jenis}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Pilih Jenis Tanaman</option>
            <option value="tomat">Tomat</option>
            <option value="cabai-merah">Cabai Merah</option>
          </select>
          {errors.jenis && (
            <p className="text-red-500 text-xs mt-1">*{errors.jenis}</p>
          )}
        </div>
        <div className="">
          <label
            htmlFor="massa"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Massa Ekonomi Usaha
          </label>
          <input type="number" onChange={handleInputChange} id="massa"  value={formData.massa}  name="massa" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required /> 
          {errors.massa && (
            <p className="text-red-500 text-xs mt-1">*{errors.massa}</p>
          )}
        </div>
        <div className="">
          <label
            htmlFor="periode"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Periode Panen Per Tahun
          </label>
          <input type="number" onChange={handleInputChange} id="periode"  value={formData.periode}  name="periode" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required /> 
          {errors.periode && (
            <p className="text-red-500 text-xs mt-1">*{errors.periode}</p>
          )}
        </div>
        <div className="">
          <label
            htmlFor="luaslahan"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Luas Lahan (M<sup>2</sup>)
          </label>
          <input type="number" onChange={handleInputChange} id="luaslahan"  value={formData.luaslahan}  name="luaslahan" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required /> 
          {errors.luaslahan && (
            <p className="text-red-500 text-xs mt-1">*{errors.luaslahan}</p>
          )}
        </div>
        <div className="">
          <label
            htmlFor="harga"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Harga Per KG
          </label>
          <input type="number" onChange={handleInputChange} id="harga"  value={formData.harga}  name="harga" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required /> 
          {errors.harga && (
            <p className="text-red-500 text-xs mt-1">*{errors.harga}</p>
          )}
        </div>
        <div className="">
          <label
            htmlFor="sewa"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Sewa Lahan
          </label>
          <input type="number" onChange={handleInputChange} id="sewa"  value={formData.sewa}  name="sewa" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required /> 
          {errors.sewa && (
            <p className="text-red-500 text-xs mt-1">*{errors.sewa}</p>
          )}
        </div>
        <div className="">
          <label
            htmlFor="bulan"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Mulai Panen Pada Bulan Ke-
          </label>
          <input type="number" onChange={handleInputChange} id="bulan"  value={formData.bulan}  name="bulan" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required /> 
          {errors.bulan && (
            <p className="text-red-500 text-xs mt-1">*{errors.bulan}</p>
          )}
        </div>
        <div className="lg:col-span-2">
          <button onClick={() =>{setClick(true)} }
            className="w-full py-2 rounded font-semibold text-white bg-[#65B741]"
            type="submit"  
          >
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </form>
      {open == true && <Result data={formData} />}
    </div>
  );
};

export default Spk;
