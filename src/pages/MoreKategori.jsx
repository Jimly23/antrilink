import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CardMerchant from '../components/organisms/CardMerchant'
import { bank, cutlery, goverment, health, printing, service } from '../assets'


const MoreKategori = () => {
  return (
    <div className='min-h-[100vh] bg-dominan'>
      <div className="header fixed top-0 left-0 right-0 w-[500px] mx-auto bg-aksen py-5 font-medium text-white">
        <div className="back flex items-center px-5">
          <Link to={'/'} className='my-auto text-white me-5'><FaChevronLeft size={25}/></Link>
          <h2 className='text-lg'>Pilih Kategori</h2>
        </div>
      </div>

      {/* List favorit */}
      <div className="list p-5 mt-[68px]">
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
          <Link to={'/search'}>
            <div className="item w-full h-[90px] flex flex-col items-center justify-center border-2 bg-bg border-slate-200 rounded-xl">
              <img src={printing} className='w-10' />
              <h5 className='text-[14px]'>Printing</h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MoreKategori