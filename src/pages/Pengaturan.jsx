import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CardMerchant from '../components/organisms/CardMerchant'


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
            <div className="username mb-2">
                <h5 className='mb-1 ms-3'>Username</h5>
                <input type="text" className='px-5 py-2 rounded-full w-full' placeholder='starling' />
            </div>
            <div className="email mb-2">
                <h5 className='mb-1 ms-3'>Email</h5>
                <input type="email" className='px-5 py-2 rounded-full w-full' placeholder='starling@gmail.com' />
            </div>
            <div className="telp mb-2">
                <h5 className='mb-1 ms-3'>No. Telepon</h5>
                <input type="text" className='px-5 py-2 rounded-full w-full' placeholder='+6282325655897' />
            </div>
            <div className="password mb-5">
                <h5 className='mb-1 ms-3'>Password</h5>
                <input type="password" className='px-5 py-2 rounded-full w-full' placeholder='*******' />
            </div>
            <button className='px-3 py-1 bg-aksen rounded-md absolute right-5 text-white'>Simpan</button>
        </form>
      </div>
    </div>
  )
}

export default Pengaturan