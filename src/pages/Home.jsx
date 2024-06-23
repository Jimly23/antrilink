import React, { useState } from 'react'
import CarouselBanner from '../components/organisms/CarouselBanner'
import {HiOutlineSearch} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import CarouselPopuler from '../components/organisms/CarouselPopuler'
import { FaPalette } from 'react-icons/fa6'
import { bank, cutlery, goverment, health, logo, more, promo1, promo2, service } from '../assets'

const Home = () => {
  const [moreCategory, setMoreCategory] = useState(false)

  return (
    <div className='pb-[200px] bg-dominan font-medium'>
      {/* Header */}
      <div className="header grid grid-cols-4 py-7 px-5 mb-5 gap-1 bg-aksen">
        <div className="search-box bg-white col-span-3 px-5 py-2 rounded-full flex items-center justify-between">
          <Link to={'/search'}>
              <input type="text" placeholder='Mau antri dimana' className='outline-none border-none bg-transparent font-medium' />
          </Link>
          <HiOutlineSearch className='font-bold text-slate-500' size={20}/>
        </div>
        <div className="text-xl mx-auto my-auto text-white">
          <img src={logo} className='w-[50px]' />
        </div>
      </div>

      {/* iklan */}
      <div className="iklan">
        <CarouselBanner />
      </div>

      {/* kategori */}
      <div className="kategori p-5 font-normal">
        <h4>Pilih Kategori</h4>
        <div className="grid grid-cols-3 gap-2 mt-3">
          <Link to={'/search'}>
            <div className="item w-full h-[90px] flex flex-col items-center justify-center border-2 bg-bg border-slate-200 rounded-xl">
              <img src={cutlery} className='w-10' />
              <h5 className='text-[14px]'>Makanan</h5>
            </div>
          </Link>
          <Link to={'/search'}>
            <div className="item w-full h-[90px] flex flex-col items-center justify-center border-2 bg-bg border-slate-200 rounded-xl">
              <img src={bank} className='w-10' />
              <h5 className='text-[14px]'>Bank</h5>
            </div>
          </Link>
          <Link to={'/search'}>
            <div className="item w-full h-[90px] flex flex-col items-center justify-center border-2 bg-bg border-slate-200 rounded-xl">
              <img src={health} className='w-10' />
              <h5 className='text-[14px]'>Kesehatan</h5>
            </div>
          </Link>
          <Link to={'/search'}>
            <div className="item w-full h-[90px] flex flex-col items-center justify-center border-2 bg-bg border-slate-200 rounded-xl">
              <img src={goverment} className='w-10' />
              <h5 className='text-[14px]'>Pemerintahan</h5>
            </div>
          </Link>
          <Link to={'/search'}>
            <div className="item w-full h-[90px] flex flex-col items-center justify-center border-2 bg-bg border-slate-200 rounded-xl">
              <img src={service} className='w-10' />
              <h5 className='text-[14px]'>Service Center</h5>
            </div>
          </Link>
          <Link to={'/more-kategori'}>
            <div className="item w-full h-[90px] flex flex-col items-center justify-center border-2 bg-bg border-slate-200 rounded-xl">
                <img src={more} className='w-10' />
                <h5 className='text-[14px]'>Lainnya</h5>
            </div>
          </Link>
        </div>
      </div>

      {/* Promo */}
      <div className="populer p-5">
        <h4>Promo</h4>
        <div className="mt-3 gap-2">
          <div className="item w-full h-[250px] bg-slate-700 rounded-xl overflow-hidden mb-3">
            <img src={promo1} className='w-full h-full object-cover' />
          </div>
          <div className="item w-full h-[250px] bg-slate-700 rounded-xl overflow-hidden">
            <img src={promo2} className='w-full h-full object-cover' />
          </div>
        </div>
      </div>
 
      {/* Populer */}
      <div className="populer">
        <h4 className='px-5 mb-4'>Paling Banyak di Cari</h4>
        <CarouselPopuler />
      </div>
    </div>
  )
}

export default Home