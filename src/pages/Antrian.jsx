import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import CardMerchant from '../components/organisms/CardMerchant'
import { Link, useNavigate } from 'react-router-dom';
import { getAllAntrian } from '../api/api';
import CardAntrian from '../components/organisms/CardAntrian';

const Antrian = () => {
  const [history, setHistory] = useState(true);
  const navigate = useNavigate()
  const [myAntrian, setMyAntrian] = useState([])

  useEffect(()=>{
    const result = getAllAntrian()
    if(result){
      setMyAntrian(result)
    }
  }, [])

  const handleCheckAntrian = (noAntri,logo,nama,giliran) => {
    let jumlahAntrian = myAntrian.length
    navigate('/check-antrian', {state: {noAntri, logo, nama, giliran, jumlahAntrian}})
  }

  console.log(myAntrian);

  return (
    <div className='min-h-[100vh] bg-dominan'>
      <div className="header fixed top-0 left-0 right-0 sm:w-[500px] mx-auto bg-aksen pt-5 font-medium text-white">
        <div className="back flex items-center px-5">
          <Link to={'/dashboard'} className='my-auto text-white me-5'><FaChevronLeft size={25}/></Link>
          <h2 className='text-lg'>Antrian Saya</h2>
        </div>
        <div className="riwayat grid grid-cols-2 mt-6">
          <h2 onClick={() => setHistory(true)} className={`${history? 'border-white':'border-aksen'} border-b-4 text-center pb-5`}>Hari ini</h2>
          <h2 onClick={() => setHistory(false)} className={`${!history? 'border-white':'border-aksen'} border-b-4 text-center pb-5`}>Riwayat</h2>
        </div>
      </div>

      {/* List antrian */}
      <div className="list p-5 mt-[120px]">
        {history &&
          myAntrian.map((item, index) => (
            <div onClick={() => handleCheckAntrian(item.noAntri,item.logoLayanan,item.namaLayanan,item.estimasiGiliran)} key={index}>
              <CardAntrian logo={item.logoLayanan} nama={item.namaLayanan} noAntri={item.noAntri}/>
            </div>
          ))
        }
        {!history && 
          <>
            
          </>
        }
      </div>
    </div>
  )
}

export default Antrian