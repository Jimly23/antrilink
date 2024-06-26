import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import CardMerchant from '../components/organisms/CardMerchant'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineSearch } from 'react-icons/hi'
import { getLayananByCategory, layanan } from '../api/api'
import { logo } from '../assets'

const Search = () => {
  const location = useLocation();
  const data = location.state || null
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState(layanan)

  const handleChange = (e) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    const result = layanan.filter(l => l.nama.toLowerCase().includes(term))
    setSearchResult(result)
  }

  const layananByCategory = (category) => {
    const result = getLayananByCategory(category)
  }

  return (
    <div className='relative min-h-[100vh] bg-dominan'>
      {/* Header */}
      <div className="header fixed top-0 left-0 right-0 sm:w-[500px] mx-auto grid grid-cols-9 py-7 px-5 bg-aksen">
          <Link to={'/dashboard'} className='my-auto text-white me-2'><FaChevronLeft size={25}/></Link>
          <div className="search-box bg-dominan col-span-8 px-5 py-2 rounded-full flex items-center">
              <input onChange={handleChange} value={searchTerm} type="text" placeholder='Mau antri dimana' className='w-full outline-none border-none bg-transparent font-medium' />
              <HiOutlineSearch className='font-bold text-slate-500' size={20}/>
          </div>
      </div>

      {/* Search Item */}
      <div className="search-box-result p-5 mt-[96px]">
        {data? 
            <CardMerchant logo={data.logo} tempatImg={data.tempatImg} nama={data.nama} alamat={data.alamat} desc={data.deskripsi} maps={data.maps}/>
            :
            searchResult.map((item, index) => (
              <div key={index} onClick={() => layananByCategory(item.kategori)}>
                <CardMerchant logo={item.logo} tempatImg={item.tempatImg} nama={item.nama} alamat={item.alamat} desc={item.deskripsi} maps={item.maps}/>
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default Search