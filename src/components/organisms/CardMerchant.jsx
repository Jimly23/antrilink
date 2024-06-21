import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CardMerchant = ({style}) => {
  return (
    <Link to={'/detail-merchant'}>
      <div className={`h-[125px] 2s:h-[130px] 3s:h-[140px] bg-slate-700 rounded-xl p-3 ${style? style:'mb-5'}`}>
        <div className="item w-full  grid grid-cols-8 text-white gap-10 2s:gap-5">
            <div className="logo-merchant w-[70px] h-[70px] 2s:w-[75px] 2s:h-[75px] 3s:w-[85px] 3s:h-[85px] bg-slate-400 col-span-2 rounded-lg"></div>
            <div className="desc col-span-6 pe-4">
                <h2 className='font-medium text-md 2s:text-lg 3s:text-xl flex items-center'>Gacoan Purwokerto <FaCheckCircle className='ms-2 text-blue-500'/></h2>
                <p className='text-[11px] 3s:text-[12px]'>Lorem, ipsum dolor sit amet consectetur hayak sanju</p>
            </div>
        </div>
        <div className="bg-slate-400 text-white h-5 w-full mt-3 rounded-md px-3 text-[12px]">Lorem ipsum dolor sit amet.</div>
      </div>
    </Link>
  )
}

export default CardMerchant