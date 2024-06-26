import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import CardMerchant from '../components/organisms/CardMerchant'
import { bank, cutlery, goverment, health, printing, service } from '../assets'
import { layanan } from '../api/api'


const MoreKategori = () => {
  const navigate = useNavigate();
  const handleClick = (param) => {
    const hasil = layanan.find(l => l.kategori === param)
    navigate('/search', {state: hasil})
  }
  return (
    <div className='min-h-[100vh] bg-dominan'>
      <div className="header fixed top-0 left-0 right-0 w-[500px] mx-auto bg-aksen py-5 font-medium text-white">
        <div className="back flex items-center px-5">
          <Link to={'/dashboard'} className='my-auto text-white me-5'><FaChevronLeft size={25}/></Link>
          <h2 className='text-lg'>Pilih Kategori</h2>
        </div>
      </div>

      {/* List favorit */}
      <div className="list p-5 mt-[68px]">
        <div className="grid grid-cols-3 gap-2 mt-3">
        <div onClick={() => handleClick('makanan')} className="item w-full h-[90px] flex flex-col items-center justify-center border-2 bg-bg border-slate-200 rounded-xl">
            <img src={cutlery} className='w-10' />
            <h5 className='text-[14px]'>Makanan</h5>
          </div>
          <div onClick={() => handleClick('bank')} className="item w-full h-[90px] flex flex-col items-center justify-center border-2 bg-bg border-slate-200 rounded-xl">
            <img src={bank} className='w-10' />
            <h5 className='text-[14px]'>Bank</h5>
          </div>
          <div onClick={() => handleClick('kesehatan')} className="item w-full h-[90px] flex flex-col items-center justify-center border-2 bg-bg border-slate-200 rounded-xl">
            <img src={health} className='w-10' />
            <h5 className='text-[14px]'>Kesehatan</h5>
          </div>
          <div onClick={() => handleClick('pemerintahan')} className="item w-full h-[90px] flex flex-col items-center justify-center border-2 bg-bg border-slate-200 rounded-xl">
            <img src={goverment} className='w-10' />
            <h5 className='text-[14px]'>Pemerintahan</h5>
          </div>
          <div onClick={() => handleClick('service center')} className="item w-full h-[90px] flex flex-col items-center justify-center border-2 bg-bg border-slate-200 rounded-xl">
            <img src={service} className='w-10' />
            <h5 className='text-[14px]'>Service Center</h5>
          </div>
          <div onClick={() => handleClick('printing')} className="item w-full h-[90px] flex flex-col items-center justify-center border-2 bg-bg border-slate-200 rounded-xl">
            <img src={printing} className='w-10' />
            <h5 className='text-[14px]'>Printing</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreKategori