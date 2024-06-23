import React from 'react'
import { FaLock, FaPhone, FaPhoneAlt, FaRegEnvelope, FaRegUser, FaUser } from 'react-icons/fa'
import { FaBridgeLock, FaPadlet, FaRoadLock } from 'react-icons/fa6'
import { } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { logo } from '../assets'

const Register = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className="box-login w-[80%]">
            <div className="logo flex justify-center text-center mb-15">
                <img src={logo} className='w-[170px]' />
            </div>
            <div className="box-form">
                <form className='font-medium text-slate-700 mb-2'>
                    <div className="username flex items-center border py-3 px-4 rounded-lg mb-3">
                        <FaRegUser className='me-3' />
                        <input type="text" placeholder='Username' className='border-none w-full outline-none'/>
                    </div>
                    <div className="username flex items-center border py-3 px-4 rounded-lg mb-3">
                        <FaRegEnvelope className='me-3'/>
                        <input type="text" placeholder='Email' className='border-none w-full outline-none' />
                    </div>
                    <div className="username flex items-center border py-3 px-4 rounded-lg mb-3">
                        <FaPhoneAlt className='me-3' />
                        <input type="text" placeholder='Telepon' className='border-none w-full outline-none' />
                    </div>
                    <div className="username flex items-center border py-3 px-4 rounded-lg mb-3">
                        <FaLock className='me-3' />
                        <input type="password" placeholder='Password' className='border-none w-full outline-none' />
                    </div>
                    <div className="username flex items-center border py-3 px-4 rounded-lg mb-8">
                        <FaLock className='me-3' />
                        <input type="password" placeholder='Confirm Password' className='border-none w-full outline-none' />
                    </div>
                    <button className='py-3 w-full bg-aksen text-white rounded-lg'>Daftar</button>
                </form>
                <h6 className='font-medium text-[14px]'>Sudah punya akun? <Link to={'/login'}><span className='text-aksen underline'>Login</span></Link></h6>
            </div>
        </div>
    </div>
  )
}

export default Register