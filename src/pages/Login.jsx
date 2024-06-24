import React, { useEffect, useState } from 'react'
import { FaLock, FaPhoneAlt, FaRegEnvelope, FaRegUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { logo } from '../assets'
import { dataMock } from '../api/api'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
    const [dataCredential, setDataCredential] = useState({email: '', password: ''})
    const [cekCredential, setCekCredential] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            setCekCredential(false)
        }, 2000);
    }, [cekCredential])

    const navigate = useNavigate();

    const handleChange = (e) => {
        setDataCredential({...dataCredential, [e.target.name]: e.target.value})
    }

    const getData = async (data) => {
        try {
          const response = await dataMock(data);
          console.log(response);
          navigate('/dashboard')
        } catch (error) {
          console.log(`Error : ${error}`);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(dataCredential.email === 'admin@gmail.com' && dataCredential.password === 'admin123'){
            getData(dataCredential)
        } else {
            setCekCredential(true)
        }
    }


  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className="box-login w-[80%]">
            <div className="logo flex justify-center text-center mb-15">
                <img src={logo} className='w-[170px]' />
            </div>
            <div className="box-form">
                {cekCredential && <h6 className='font-medium text-red-500'>Email / password salah!</h6>}
                <form onSubmit={handleSubmit} className='font-medium text-slate-700 mb-2'>
                    <div className="username flex items-center border py-3 px-4 rounded-lg mb-3">
                        <FaRegEnvelope className='me-3'/>
                        <input type="text" onChange={handleChange} name='email' placeholder='Email' className='border-none w-full outline-none' />
                    </div>
                    <div className="username flex items-center border py-3 px-4 rounded-lg mb-3">
                        <FaLock className='me-3' />
                        <input type="password" onChange={handleChange} name='password' placeholder='Password' className='border-none w-full outline-none' />
                    </div>
                    <button type='submit' className='py-3 w-full bg-aksen text-white rounded-lg'>Login</button>
                </form>
                {/* <h6 className='font-medium text-[14px]'>Belum punya akun? <Link to={'/register'}><span className='text-aksen underline'>Daftar</span></Link></h6> */}
            </div>
        </div>
    </div>
  )
}

export default Login