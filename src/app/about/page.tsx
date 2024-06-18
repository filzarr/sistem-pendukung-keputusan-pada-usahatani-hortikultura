import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className="px-[128px] py-[64px]">
      <div className=" grid grid-cols-2 gap-8 items-center">
          <div className=" space-y-8">
            <p className="font-bold text-[#65B741] text-[32px]">
              Tentang Kami
            </p>
            <p className="text-[#7E7E7E] font-medium text-[16px]">
            Telagah merupakan salah satu desa yang ada di kecamatan Sei Bingai, kabupaten Langkat, provinsi Sumatera Utara, Indonesia luas sekitar 53,28 km² jumlah dengan penduduk lebih kurang 3.277 jiwa
            </p>
            <div className="flex gap-4">
            </div>
          </div>
          <div className=" relative overflow-hidden h-[359px] rounded">
            <Image
              alt="Gambar Desa Telagah"
              src={"/gambar-desa-telagan.jpg"}
              fill
            />
          </div>
      </div>
      <div className="flex flex-col space-y-8 mt-12  justify-center">
        <div className="flex justify-center">
            <header className="  px-4 border-b-4 border-[#65B741]">
                <p className="font-bold text-[#65B741] text-[32px]">Lokasi</p>
            </header>
        </div>
        <iframe className=" min-w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63731.80493215574!2d98.3563485831378!3d3.2911723427006856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3030e3f7c9493607%3A0x58de6ab8483ca0e2!2sTelagah%2C%20Sei%20Bingai%2C%20Langkat%20Regency%2C%20North%20Sumatra!5e0!3m2!1sen!2sid!4v1718719666837!5m2!1sen!2sid" width="600" height="450"     loading="lazy"  ></iframe>
      </div>
    </main>
  );
};

export default About;
