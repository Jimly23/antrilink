import React, { useEffect, useState } from "react";
import { FaLock, FaPhoneAlt, FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { dataMock } from "../api/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../components/atoms/Button";
import InputBox from "../components/atoms/InputBox";

const Login = () => {
  const [cekCredential, setCekCredential] = useState(false);
  const [dataCredential, setDataCredential] = useState({email: "",password: ""});
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setCekCredential(false);
    }, 2000);
  }, [cekCredential]);

  const handleChange = (e) => {
    setDataCredential({ ...dataCredential, [e.target.name]: e.target.value });
  };

  const getData = async (data) => {
    try {
      const response = await dataMock(data);
      console.log(response);
      navigate("/dashboard");
    } catch (error) {
      console.log(`Error : ${error}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      dataCredential.email === "admin@gmail.com" &&
      dataCredential.password === "admin123"
    ) {
      getData(dataCredential);
    } else {
      setCekCredential(true);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="box-login w-[80%]">
        <div className="logo flex justify-center text-center mb-20">
          <img src={logo} className="w-[170px]" />
        </div>
        {cekCredential && (
          <h6 className="font-medium text-red-500">Email / password salah!</h6>
        )}
        <div className="box-form">
          <form
            onSubmit={handleSubmit}
            className="font-medium text-slate-700 mb-2"
          >
            <InputBox
              type={"text"}
              sendOnChange={handleChange}
              icon={<FaRegEnvelope className="me-3" />}
              name={"email"}
              placeholder={"admin@gmail.com"}
            />
            <InputBox
              type={"password"}
              sendOnChange={handleChange}
              icon={<FaLock className="me-3" />}
              name={"password"}
              placeholder={"admin123"}
            />
            <Button type={"submit"} size={"full"} bgColor={"aksen"} textColor={"white"} padding={"py-3"}>Login</Button>
          </form>
          <h6 className="font-medium text-[14px]">
            Belum punya akun?{" "}
            <Link to={"/register"}>
              <span className="text-aksen underline">Daftar</span>
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Login;