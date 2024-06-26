import React from 'react'
import { gacoan } from '../../assets'
import { FaCheckCircle } from 'react-icons/fa'

const CardAntrian = ({style, nama, logo, noAntri}) => {
  return (
    <div className={`h-[125px] 2s:h-[130px] 3s:h-[140px] bg-bg rounded-xl p-3 border ${style? style:'mb-5'}`}>
      <div className="item font-medium w-full h-full grid grid-cols-2 text-slate-700">
        <div className='flex items-center justify-center flex-col'>
          <div className="logo-merchant overflow-hidden mb-2 w-[60px] h-[60px] 2s:w-[60px] 2s:h-[60px] 3s:w-[60px] 3s:h-[60px] bg-slate-400 col-span-2 rounded-lg">
            <img src={logo} className='w-full h-full object cover' />
          </div>
          <h2 className='flex items-center'>{nama} <FaCheckCircle size={15} className='ms-1 text-aksen'/></h2>
        </div>
        <div className='border-l flex flex-col items-center justify-center'>
          <h5>No. Antri</h5>
          <h3 className='text-2xl'>{noAntri}</h3>
        </div>
      </div>
    </div>
  )
}

export default CardAntrian