import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CardMerchant from '../components/organisms/CardMerchant'


const Favorit = () => {
  return (
    <div className='min-h-[100vh] bg-slate-300'>
      <div className="header fixed top-0 left-0 right-0 w-[500px] mx-auto bg-slate-700 py-5 font-medium text-slate-300">
        <div className="back flex items-center px-5">
          <Link to={'/'} className='my-auto text-white me-5'><FaChevronLeft size={25}/></Link>
          <h2 className='text-lg'>Layanan Favorit</h2>
        </div>
      </div>

      {/* List favorit */}
      <div className="list p-5 mt-[68px]">
        <CardMerchant />
      </div>
    </div>
  )
}

export default Favorit