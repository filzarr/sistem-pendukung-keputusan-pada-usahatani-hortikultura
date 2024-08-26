"use client"
import React, { useState } from "react";
import Result from "../components/result";

interface IFormInput {
  jenis: string;
  massa: string;
}

const Spk = () => {
  const [formData, setFormData] = useState<IFormInput>({
    jenis: '',
    massa: ''
  });
  const [errors, setErrors] = useState<Partial<IFormInput>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [Massa, setMassa] = useState<number>(0);
  const [Jenis, setJenis] = useState('');

  const [data, setData] = useState('');

  const validate = (data: IFormInput) => {
    const newErrors: Partial<IFormInput> = {};
    if (!data.jenis) newErrors.jenis = 'Jenis belum dipilih';
    if (!data.massa) newErrors.massa = 'Massa ekonomi usaha belum dipilih';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    }); 
  };

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const validationErrors = validate(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsLoading(false);
    } else {
        setErrors({});
    // console.log(Jenis)

        setMassa(parseInt(formData.massa));
        setJenis(formData.jenis);
      if (formData.jenis === "tomat" && formData.massa === "5") {
        setData('0');
      } else if (formData.jenis === "tomat" && formData.massa === "10") {
        setData('1');
      } else if (formData.jenis === "cabai-merah" && formData.massa === "5") {
        setData('2');
      } else if (formData.jenis === "cabai-merah" && formData.massa === "10") {
        setData('3');
      }
      else{
        setData('5')
      }
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
          <select
            id="massa"
            onChange={handleChange}
            name="massa"
            value={formData.massa}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Pilih Massa Ekonomi Usaha</option>
            <option value="1">1 Tahun</option>
            <option value="2">2 Tahun</option>
            <option value="3">3 Tahun</option>
            <option value="4">4 Tahun</option>
            <option value="5">5 Tahun</option>
            <option value="6">6 Tahun</option>
            <option value="7">7 Tahun</option>
            <option value="8">8 Tahun</option>
            <option value="9">9 Tahun</option>
            <option value="10">10 Tahun</option>
          </select>
          {errors.massa && (
            <p className="text-red-500 text-xs mt-1">*{errors.massa}</p>
          )}
        </div>
        <div className="lg:col-span-2">
          <button
            className="w-full py-2 rounded font-semibold text-white bg-[#65B741]"
            type="submit"
          >
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </form>
      {data !== '' && <Result jenis={Jenis} massa={Massa}  />}
    </div>
  );
};

export default Spk;
