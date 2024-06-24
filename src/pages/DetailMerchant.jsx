import React, { useState } from 'react'
import { FaChevronLeft, FaClock, FaHeart, FaMap, FaRegHeart } from 'react-icons/fa'
import { FaClockRotateLeft, FaHeartCircleCheck, FaHeartPulse, FaLocationDot, FaRegClock } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { gacoan, tempatGacoan } from '../assets'
import GoogleMaps from '../components/organisms/GoogleMaps'

const DetailMerchant = () => {

  const [isFavorit, setIsFavorit] = useState(false)
  const [isDetailAntri, setIsDetailAntri] = useState(false)

  return (
    <div className='min-h-[100vh] bg-dominan relative'>
        <div className="header fixed top-0 left-0 right-0 w-[500px] mx-auto bg-aksen py-5 font-medium text-white z-20">
            <div className="back flex items-center px-5">
                <Link to={'/dashboard'} className='my-auto text-white me-5'><FaChevronLeft size={25}/></Link>
                <h2 className='text-lg'>Layanan</h2>
            </div>
        </div>

        {/* Merchant Banner */}
        <div className="relative merchant-banner mt-[68px] h-[220px] overflow-hidden">
            <img src={tempatGacoan} className='w-full h-full object-cover'/>
        </div>

        {/* Merchant Main */}
        <div className="relative main bg-dominan min-h-[90vh] rounded-t-[25px] mt-[-20px] p-5 z-10">
            <div className="profile-merchant flex">
                <div className="flex-none box-image w-[80px] h-[80px] bg-white rounded-lg overflow-hidden">
                    <img src={gacoan} className='w-full h-full object-cover' />
                </div>
                <div className="grow desc ms-3">
                    <h3 className='font-medium text-md'>Mie Gacoan Purwokerto</h3>
                    <p className='text-[12px]'>Restoran - Mie</p>
                </div>
            </div>
            <div className="detail-desc mt-2 flex items-center gap-2 font-medium mb-3 border-b pb-2">
                <div className="lokasi flex items-center"><FaLocationDot /> <p className='ms-1 text-[11px]'>Arcawinangun, Purwokerto</p></div>
                <div className="waktu flex items-center">
                    <FaRegClock /> 
                    <p className='text-[10px] ms-1'>07:15 - 22:00</p>
                    <span className='ms-2 font-medium text-[10px] px-2 pb-[2px] text-white bg-green-500 rounded-md'>Open</span>
                </div>
            </div>

            {/* add favorit */}
            <div className="add-favorit flex justify-end items-center cursor-pointer mb-5" onClick={() => setIsFavorit(prev => !prev)}>
                <h6 className='text-[14px] me-2'>Tambah ke favorit</h6>
                {isFavorit? <FaHeart className='text-red-500'/>:<FaRegHeart className='me-2 text-red-500'/>}
            </div>

            {/* box antri */}
            <div className="box-antri text-[14px] h-[150px] bg-bg rounded-lg font-medium grid grid-cols-2 mb-5 border border-slate-300 overflow-hidden">
                <div className="desc text-center flex flex-col items-center justify-center border-r text-aksen">
                    <h2>Sudah Di Layani</h2>
                    <h4 className='text-xl'>44</h4>
                    <p className='text-[12px]'>Dari 59</p>
                </div>
                <div className='flex items-center justify-center bg-aksen'>
                    <Link to={'/detail-antrian'}>
                        <button className='px-4 py-2 bg-white border border-aksen rounded-lg text-aksen'>Antri Sekarang</button>
                    </Link>
                </div>
            </div>

            {/* Google Maps */}
            <div className="maps font-medium">
                <h6 className='mb-2 text-[14px]'>Maps</h6>
                <GoogleMaps />
            </div>
        </div>
    </div>
  )
}

export default DetailMerchant