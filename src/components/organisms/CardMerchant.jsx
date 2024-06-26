import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { gacoan } from '../../assets'

const CardMerchant = ({style, logo, tempatImg, nama, alamat, desc, maps}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/detail-merchant', {state:{logo, tempatImg, nama, alamat, desc, maps}})
  }
  return (
    <div onClick={handleClick} className={`h-[125px] 2s:h-[130px] 3s:h-[140px] bg-bg rounded-xl p-3 border ${style? style:'mb-5'}`}>
      <div className="item w-full  grid grid-cols-8 text-slate-700 gap-10 2s:gap-5">
          <div className="logo-merchant overflow-hidden w-[70px] h-[70px] 2s:w-[75px] 2s:h-[75px] 3s:w-[85px] 3s:h-[85px] bg-slate-400 col-span-2 rounded-lg">
            <img src={logo} className='w-full h-full object cover' />
          </div>
          <div className="desc col-span-6 pe-4">
              <h2 className='font-medium text-md 2s:text-lg 3s:text-xl flex items-center'>{nama} <FaCheckCircle size={17} className='ms-2 text-blue-500'/></h2>
              <p className='text-[11px] 3s:text-[12px]'>{alamat}</p>
          </div>
      </div>
      <div className="bg-slate-100 text-slate-600 h-5 w-full mt-3 rounded-md px-3 text-[12px]">{desc}</div>
    </div>
  )
}

export default CardMerchant