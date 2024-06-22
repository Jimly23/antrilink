import React from 'react'
import { FaArrowRight, FaChevronLeft, FaPen, FaRegEnvelope, FaRegEnvelopeOpen, FaUser } from 'react-icons/fa'
import {FaChevronRight, FaGear, FaRegCircleQuestion, FaRegClipboard, FaRightFromBracket} from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { profile } from '../assets'


const Profile = () => {
  return (
    <div className='h-[100vh] bg-dominan'>
      <div className="header bg-aksen py-5 font-medium text-white">
        <div className="back flex items-center px-5">
          <Link to={'/'} className='my-auto text-white me-5'><FaChevronLeft size={25}/></Link>
          <h2 className='text-lg'>Profile</h2>
        </div>
      </div>

      {/* foto profile */}
      <div className="profile-pic py-10">
        <div className="box-img w-[130px] h-[130px] bg-aksen rounded-full mx-auto overflow-hidden border-4 border-white">
          <img src={profile} className='w-full h-full object-cover' />
        </div>
        <h2 className='text-2xl font-medium text-center mt-3'>Starbak Keliling</h2>
        <h2 className='text-md font-medium text-center'>starling@gmail.com</h2>
      </div>

      {/* pengaturan */}
      <div className="pengaturan p-5 font-medium">
        <div className="edit-profile mb-5">
          <h2 className='text-lg'>Edit Profil</h2>
          <div className="box-edit">
            {/* <div className="username flex items-center my-4">
              <FaRegEnvelope className='me-2'/>
              <h3>Email</h3>
            </div> */}
            <Link to={'/pengaturan'}>
              <div className="username flex items-center my-4">
                <FaGear className='me-2'/>
                <h3>Pengaturan</h3>
              </div>
            </Link>
            <div className="username flex items-center my-4">
              <FaRegClipboard className='me-2'/>
              <h3>Syarat dan Ketentuan</h3>
            </div>
            <div className="username flex items-center my-4">
              <FaRegCircleQuestion className='me-2'/>
              <h3>Bantuan</h3>
            </div>
            <div className="username flex items-center my-4">
              <FaRightFromBracket className='me-2'/>
              <h3>Logout</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile