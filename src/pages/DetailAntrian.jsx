import React from 'react'
import { FaChevronLeft, FaClock, FaMap } from 'react-icons/fa'
import { FaClockRotateLeft, FaLocationDot, FaRegClock } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const DetailAntrian = () => {
  return (
    <div className='min-h-[100vh] bg-slate-300'>
        <div className="header fixed top-0 left-0 right-0 w-[500px] mx-auto bg-slate-700 py-5 font-medium text-slate-300">
            <div className="back flex items-center px-5">
                <Link to={'/detail-merchant'} className='my-auto text-white me-5'><FaChevronLeft size={25}/></Link>
                <h2 className='text-lg'>Merchant</h2>
            </div>
        </div>

        {/* Detail Antrian */}
        <div className="mt-[68px] p-5">
            <div className="rounded-lg bg-slate-100">
                <div className="header font-medium p-3">
                    <h2 className='text-lg'>Mie Gacoan Purwokerto</h2>
                    <div className="waktu flex items-center mt-2">
                        <FaRegClock /> 
                        <p className='text-[12px] ms-1'>07:15 - 22:00</p>
                        <span className='ms-2 font-medium text-[10px] px-2 pb-[2px] text-white bg-green-500 rounded-md'>Open</span>
                    </div>
                </div>
                <div className="main px-5 pb-5">
                    <div className="box-informasi-antri grid grid-cols-2 font-medium py-10">
                        <div className="terakhir text-center border-r">
                            <h2>Terakhir Dilayani</h2>
                            <h3 className='text-[30px]'>A045</h3>
                        </div>
                        <div className="menunggu text-center">
                            <h2>Menunggu</h2>
                            <h3 className='text-[30px]'>12</h3>
                        </div>
                    </div>

                    <div className="jumlah-antrian font-medium flex items-center mb-3">
                        <h5 className='me-2'>Jumlah Antrian <span className='px-2 text-[14px] py-[2px] bg-orange-400 text-white rounded'>59</span></h5>
                        <h5>Batal <span className='px-2 text-[14px] py-[2px] bg-orange-400 text-white rounded'>2</span></h5>
                    </div>

                    {/* button */}
                    <button className='py-2 rounded-lg font-medium bg-slate-400 w-full mb-3'>Antri</button>

                    {/* pengumuman */}
                    <div className="box-perhatian">
                        <h4 className='font-medium'>Perhatian</h4>
                        <div className="box-message text-[14px] p-2 bg-orange-100 rounded-lg border border-orange-300">
                            <p>Untuk Anda yang sudah mengambil nomor antrian, harap datang 10-15 menit sebelum giliran Anda dilayani!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailAntrian