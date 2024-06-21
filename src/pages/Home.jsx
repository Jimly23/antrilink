import React, { useState } from 'react'
import CarouselBanner from '../components/organisms/CarouselBanner'
import {HiOutlineSearch} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import CarouselPopuler from '../components/organisms/CarouselPopuler'

const Home = () => {
  const [moreCategory, setMoreCategory] = useState(false)

  return (
    <div className='min-h-[150vh] bg-slate-300 font-medium'>
      {/* Header */}
      <div className="header grid grid-cols-4 py-7 px-5 mb-5">
        <div className="search-box bg-white col-span-3 px-5 py-2 rounded-full flex items-center justify-between">
          <Link to={'/search'}>
              <input type="text" placeholder='Mau antri dimana' className='outline-none border-none bg-transparent' />
          </Link>
          <HiOutlineSearch className='font-bold' size={20}/>
        </div>
        <div className="text-xl mx-auto my-auto">AntriLink</div>
      </div>

      {/* iklan */}
      <div className="iklan">
        <CarouselBanner />
      </div>

      {/* kategori */}
      <div className="kategori p-5">
        <h4>Pilih Kategori</h4>
        <div className="grid grid-cols-3 gap-2 mt-3">
          <Link to={'/search'}><div className="item w-full h-[90px] bg-slate-700 rounded-xl"></div></Link>
          <Link to={'/search'}><div className="item w-full h-[90px] bg-slate-700 rounded-xl"></div></Link>
          <Link to={'/search'}><div className="item w-full h-[90px] bg-slate-700 rounded-xl"></div></Link>
          <Link to={'/search'}><div className="item w-full h-[90px] bg-slate-700 rounded-xl"></div></Link>
          <Link to={'/search'}><div className="item w-full h-[90px] bg-slate-700 rounded-xl"></div></Link>
          {moreCategory? 
            <div onClick={()=>setMoreCategory(true)} className="item w-full h-[90px] bg-slate-700 rounded-xl"></div>
            :
            <div onClick={()=>setMoreCategory(true)} className="item w-full h-[90px] bg-slate-700 rounded-xl">lainnya</div>
          }
        </div>
        {moreCategory && 
          <div className='flex flex-col'>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <Link to={'/search'}><div className="item w-full h-[90px] bg-slate-700 rounded-xl"></div></Link>
              <Link to={'/search'}><div className="item w-full h-[90px] bg-slate-700 rounded-xl"></div></Link>
              <Link to={'/search'}><div className="item w-full h-[90px] bg-slate-700 rounded-xl"></div></Link>
              <Link to={'/search'}><div className="item w-full h-[90px] bg-slate-700 rounded-xl"></div></Link>
              <Link to={'/search'}><div className="item w-full h-[90px] bg-slate-700 rounded-xl"></div></Link>
              <Link to={'/search'}><div className="item w-full h-[90px] bg-slate-700 rounded-xl"></div></Link>
            </div>
            <button onClick={()=>setMoreCategory(false)} className='text-[14px] mx-auto w-10 mt-3'>Tutup</button>
          </div>
        }
      </div>

      {/* Promo */}
      <div className="populer p-5">
        <h4>Promo</h4>
        <div className="grid mt-3 gap-2">
          <div className="item w-full h-[250px] bg-slate-700 rounded-xl"></div>
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