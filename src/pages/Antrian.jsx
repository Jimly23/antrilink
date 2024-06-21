import React, { useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import CardMerchant from '../components/organisms/CardMerchant'
import { Link } from 'react-router-dom';

const Antrian = () => {
  const [history, setHistory] = useState(true);
  return (
    <div className='min-h-[100vh] bg-slate-300'>
      <div className="header fixed top-0 left-0 right-0 sm:w-[500px] mx-auto bg-slate-700 pt-5 font-medium text-slate-300">
        <div className="back flex items-center px-5">
          <Link to={'/'} className='my-auto text-white me-5'><FaChevronLeft size={25}/></Link>
          <h2 className='text-lg'>Antrian Saya</h2>
        </div>
        <div className="riwayat grid grid-cols-2 mt-6">
          <h2 onClick={() => setHistory(true)} className={`${history && 'border-orange-300'} border-b-4 border-slate-700 text-center pb-5`}>Hari ini</h2>
          <h2 onClick={() => setHistory(false)} className={`${!history && 'border-orange-300'} border-b-4 border-slate-700 text-center pb-5`}>Riwayat</h2>
        </div>
      </div>

      {/* List antrian */}
      <div className="list p-5 mt-[120px]">
        {history && 
          <>
            <CardMerchant />
          </>
        }
        {!history && 
          <>
            <CardMerchant />
            <CardMerchant />
            <CardMerchant />
            <CardMerchant />
          </>
        }
      </div>
    </div>
  )
}

export default Antrian