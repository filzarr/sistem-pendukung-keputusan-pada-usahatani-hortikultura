import { Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className=" relative     h-[595px]">
        <Carousel
          className="contrast-50 brightness-50 absolute top-0 bottom-0 min-h-full min-w-full"
          indicators={false}
        >
          <img
            src="/1.jpg"
            alt="..."
          />
          <img
            src="/2.jpg"
            alt="..."
          /> 
          <img
            src="/3.jpg"
            alt="..."
          /> 
          <img
            src="/4.jpg"
            alt="..."
          /> 
          <img
            src="/5.jpg"
            alt="..."
          />  
        </Carousel>
        <div className=" absolute top-0 left-0 right-0 min-h-full min-w-full flex items-center flex-col justify-center sm:px-[32px] md:px-[128px] py-[64px]  space-y-6">
          <p className="font-bold text-[#80f54e] text-[32px] text-center">
            Sistem Pendukung Keputusan Pada Usaha Tani Hidorkultura
          </p>
          <p className="text-[#fff] font-medium capitalize text-[16px] text-center">
            hadir untuk membantu para petani dalam mengambil keputusan terbaik
            dalam usaha tani hidrokultura. Dengan menggunakan teknologi canggih
            dan data analitik, kami menyediakan solusi yang efisien dan efektif
            untuk meningkatkan produktivitas serta kualitas hasil tani Anda.
          </p>
          <div className="flex justify-center">
          <Link href={'/about'} className='p-[12px] px-[24px] text-white font-bold bg-[#65B741] rounded'>Get Started</Link>
          </div>
        </div>
      </div>
    </>
  );
}
