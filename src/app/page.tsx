import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
  <main className='sm:px-[32px] md:px-[64px] py-[64px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
    <div className=" space-y-8">
      <p className='font-bold text-[#65B741] text-[32px]'>Sistem Pendukung Keputusan Pada Usaha Tani Hidorkultura</p>
      <p className='text-[#7E7E7E] font-medium capitalize text-[16px]'>hadir untuk membantu para petani dalam mengambil keputusan terbaik dalam usaha tani hidrokultura. Dengan menggunakan teknologi canggih dan data analitik, kami menyediakan solusi yang efisien dan efektif untuk meningkatkan produktivitas serta kualitas hasil tani Anda.</p>
      <div className="flex gap-4">
        <Link href={'/about'} className='p-[12px] text-white font-bold bg-[#FFB534] rounded'>Get Started</Link>
        <Link href={'/about'} className='p-[12px] text-white font-bold bg-[#65B741] rounded'>Contact US</Link>
      </div>
    </div>
    <div className=" overflow-hidden grid grid-cols-2 gap-4   h-[359px] rounded">
      <div className=" overflow-hidden ">
        <Image alt='Gambar Pohon Tomat' src={'/bg-1.jpg'} width={500} height={500} className=' object-contain object-center' />
      </div>
      <div className=" ">
        <Image alt='Gambar Pohon Tomat' src={'/gambar-cabe.jpg'}width={500} height={500} className=' object-contain object-center' />
      </div>
    </div>
  </main>
  )
}
