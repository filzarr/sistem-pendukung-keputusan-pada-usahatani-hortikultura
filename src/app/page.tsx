import Image from 'next/image'

export default function Home() {
  return (
  <main className='px-[128px] py-[64px] grid grid-cols-2 gap-8 items-center'>
    <div className=" space-y-8">
      <p className='font-bold text-[#65B741] text-[32px]'>Sistem Pendukung Keputusan Pada Usaha Tani Hidorkultura</p>
      <p className='text-[#7E7E7E] font-medium text-[16px]'>Lorem Ipsum dolor si amet, Lorem Ipsum dolor si amet, Lorem Ipsum dolor si amet, Lorem Ipsum dolor si amet, Lorem Ipsum dolor si amet, Lorem Ipsum dolor si amet, Lorem Ipsum dolor si amet, </p>
      <div className="flex gap-4">
        <button className='p-[12px] text-white font-bold bg-[#FFB534] rounded'>Get Started</button>
        <button className='p-[12px] text-white font-bold bg-[#65B741] rounded'>Contact US</button>
      </div>
    </div>
    <div className=" overflow-hidden h-[359px] rounded">
      <Image src={'/bg-1.jpg'} width={702} height={50} className=' object-contain object-center' />
    </div>
  </main>
  )
}
