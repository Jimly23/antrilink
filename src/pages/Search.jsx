import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import CardMerchant from '../components/organisms/CardMerchant'
import { Link } from 'react-router-dom'
import { HiOutlineSearch } from 'react-icons/hi'

const Search = () => {
  return (
    <div className='relative min-h-[100vh] bg-slate-300'>
        {/* Header */}
       <div className="header fixed top-0 left-0 right-0 w-[500px] mx-auto grid grid-cols-9 py-7 px-5 bg-slate-700">
            <Link to={'/'} className='my-auto text-white me-2'><FaChevronLeft size={25}/></Link>
            <div className="search-box bg-white col-span-8 px-5 py-2 rounded-full flex items-center">
                <input type="text" placeholder='Mau antri dimana' className='w-full outline-none border-none bg-transparent' />
                <HiOutlineSearch className='font-bold' size={20}/>
            </div>
        </div>

      {/* Search Item */}
      <div className="search-box-result p-5 mt-[96px]">
        <CardMerchant />
        <CardMerchant />
        <CardMerchant />
      </div>
    </div>
  )
}

export default Search