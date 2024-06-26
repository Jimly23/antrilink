import React, { useEffect, useState } from 'react'
import { FaLock, FaPhoneAlt, FaRegEnvelope, FaUser } from 'react-icons/fa'
import { } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import { logo } from '../assets'
import InputBox from '../components/atoms/InputBox'
import Button from '../components/atoms/Button'

const Register = () => {
    const [cekCredential, setCekCredential] = useState(false);
    const [dataCredential, setDataCredential] = useState({username:"",email: "",password: "",confPassword:""});
    const navigate = useNavigate();
  
    useEffect(() => {
      setTimeout(() => {
        setCekCredential(false);
      }, 2000);
    }, [cekCredential]);
  
    const handleChange = (e) => {
      setDataCredential({ ...dataCredential, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(dataCredential);
    };
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className="box-login w-[80%]">
            <div className="logo flex justify-center text-center mb-20">
                <img src={logo} className='w-[170px]' />
            </div>
            <div className="box-form">
                <form onSubmit={handleSubmit} className='font-medium text-slate-700 mb-2'>
                    <InputBox
                        type={"text"}
                        sendOnChange={handleChange}
                        icon={<FaUser className="me-3" />}
                        name={"username"}
                        placeholder={"Username"}
                    />
                    <InputBox
                        type={"email"}
                        sendOnChange={handleChange}
                        icon={<FaRegEnvelope className="me-3" />}
                        name={"email"}
                        placeholder={"email"}
                    />
                    <InputBox
                        type={"text"}
                        sendOnChange={handleChange}
                        icon={<FaPhoneAlt className="me-3" />}
                        name={"telepon"}
                        placeholder={"Telepon"}
                    />
                    <InputBox
                        type={"password"}
                        sendOnChange={handleChange}
                        icon={<FaLock className="me-3" />}
                        name={"password"}
                        placeholder={"Password"}
                    />
                    <InputBox
                        type={"password"}
                        sendOnChange={handleChange}
                        icon={<FaLock className="me-3" />}
                        name={"confPassword"}
                        placeholder={"Confirm Password"}
                    />
                    <Button type={"submit"} size={"full"} bgColor={"aksen"} textColor={"white"} padding={"py-3"}>Register</Button>
                </form>
                <h6 className='font-medium text-[14px]'>Sudah punya akun? <Link to={'/'}><span className='text-aksen underline'>Login</span></Link></h6>
            </div>
        </div>
    </div>
  )
}

export default Register