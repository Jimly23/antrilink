import React from 'react'
import { FaChevronLeft, FaClock, FaMap } from 'react-icons/fa'
import { FaClockRotateLeft, FaLocationDot, FaRegClock } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const DetailMerchant = () => {
  return (
    <div className='min-h-[100vh] bg-slate-300'>
        <div className="header fixed top-0 left-0 right-0 w-[500px] mx-auto bg-slate-700 py-5 font-medium text-slate-300">
            <div className="back flex items-center px-5">
                <Link to={'/'} className='my-auto text-white me-5'><FaChevronLeft size={25}/></Link>
                <h2 className='text-lg'>Merchant</h2>
            </div>
        </div>

        {/* Merchant Banner */}
        <div className="merchant-banner mt-[68px] bg-slate-600 h-[220px]">

        </div>

        {/* Merchant Main */}
        <div className="main bg-slate-100 min-h-[90vh] rounded-t-[25px] mt-[-50px] p-5">
            <div className="profile-merchant flex">
                <div className="flex-none box-image w-[80px] h-[80px] bg-white rounded-lg"></div>
                <div className="grow desc ms-3">
                    <h3 className='font-medium text-md'>Mie Gacoan Purwokerto</h3>
                    <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, unde?</p>
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
            <div className="box-antri text-[14px] h-[150px] bg-slate-500 rounded-lg font-medium grid grid-cols-2">
                <div className="desc text-center flex flex-col items-center justify-center">
                    <h2>Sudah Di Layani</h2>
                    <h4 className='text-lg'>44</h4>
                </div>
                <div className='flex items-center justify-center'>
                    <Link to={'/detail-antrian'}>
                        <button className='px-4 py-1 bg-slate-400 rounded-lg'>Antri Sekarang</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailMerchant