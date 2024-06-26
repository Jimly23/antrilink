import React from 'react'
import { FaChevronLeft, FaLock, FaPhoneAlt, FaRegEnvelope, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CardMerchant from '../components/organisms/CardMerchant'
import InputBox from '../components/atoms/InputBox'
import Button from '../components/atoms/Button'


const Pengaturan = () => {
  return (
    <div className='min-h-[100vh] bg-dominan'>
      <div className="header z-10 fixed top-0 left-0 right-0 w-[500px] mx-auto bg-aksen py-5 font-medium text-white">
        <div className="back flex items-center px-5">
          <Link to={'/profile'} className='my-auto text-white me-5'><FaChevronLeft size={25}/></Link>
          <h2 className='text-lg'>Pengaturan</h2>
        </div>
      </div>

      {/* List favorit */}
      <div className="form p-5 mt-[68px] font-medium">
        <form className='relative'>
            <InputBox type={"text"} icon={<FaUser className="me-3" />} name={"text"} placeholder={"starbak keliling"} />
            <InputBox type={"email"} icon={<FaRegEnvelope className="me-3" />} name={"email"} placeholder={"starling@gmail.com"} />
            <InputBox type={"text"} icon={<FaPhoneAlt className="me-3" />} name={"telepon"} placeholder={"+6282329322565"} />
            <InputBox type={"password"} icon={<FaLock className="me-3" />} name={"password"} placeholder={"**********"} />
            <Button type={"submit"} size={""} bgColor={"aksen"} textColor={"white"} padding={"py-2 px-5"}>Simpan</Button>
        </form>
      </div>
    </div>
  )
}

export default Pengaturan