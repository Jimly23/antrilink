import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CardMerchant from '../components/organisms/CardMerchant'
import { getAntrianFavorit } from '../api/api'


const Favorit = () => {
  const [favoritAntrian, setFavoritAntrian] = useState([])

  useEffect(()=>{
    const result = getAntrianFavorit()
    if(result){
      setFavoritAntrian(result)
    }
  }, [])
  return (
    <div className='min-h-[100vh] bg-dominan'>
      <div className="header fixed top-0 left-0 right-0 w-[500px] mx-auto bg-aksen py-5 font-medium text-white">
        <div className="back flex items-center px-5">
          <Link to={'/dashboard'} className='my-auto text-white me-5'><FaChevronLeft size={25}/></Link>
          <h2 className='text-lg'>Layanan Favorit</h2>
        </div>
      </div>

      {/* List favorit */}
      <div className="list p-5 mt-[68px]">
        {favoritAntrian.map((item, index) => (
          <div key={index}>
            <CardMerchant logo={item.logo} tempatImg={item.tempatImg} nama={item.nama} alamat={item.alamat} desc={item.deskripsi} maps={item.maps}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorit