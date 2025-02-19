import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate, NavLink, Route, useNavigate } from "react-router-dom";
import Nav from "../Components/Nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [proEmail, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  let email = proEmail.toLowerCase();

  const loginHandle = (e) => {
    e.preventDefault();
    axios
      .post("https://home-rental-backend-knmc.onrender.com/login", { email, password })
      .then((success) => {
   
    toast.success("Login Successfully")
        localStorage.setItem("auth-token", success.data.token);
        localStorage.setItem("profile",email)
  setTimeout(() => {
          navigate("/");
          window.location.replace("/");
        }, 1000);
      
      })
      .catch((error) =>{
         toast.error("Invalid Credentials ")
        setErr(error.response.data.message)});
  
  };

  return (
  <>

    <div className="flex justify-center  items-center bg-loginBanner h-screen bg-cover bg-bottom  bg-no-repeat">
     
      <div className="flex rounded-lg  flex-col bg-black bg-opacity-75  w-[500px] ml-[700px] px-10 text-white items-center py-8 phones:mx-4 ">
        <h2 className="text-white font-bold tracking-wider mb-4">LOGIN</h2>

        <input
          className="outline-none  w-full px-2 py-1 bg-transparent border-white my-2 border-[1px] lowercase rounded-sm"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="outline-none  w-full px-2 py-1 bg-transparent border-white my-2 border-[1px] rounded-sm"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="text-xs mb-2 text-red-500">{err}</span>
        <button
          onClick={loginHandle}
          className="bg-purple-400  my-3 px-16 tracking-wider py-2 rounded-md hover:text-black hover:bg-white"
        >
          LOGIN
        </button>
        <span className="text-xs  font-light tracking-widest">
          Don't have an account? <Link to="/signup" >Sigup in Here</Link>
        </span>
        <span className="mt-6">DEMO Account</span>

        <div className="flex flex-col mt-1 text-sm text-center font-light">
          <span> Email - abc@gmail.com</span>
          <span> Password - abc@123</span>
                      <ToastContainer autoClose={1000} bodyClassName="bg-white text-xl" />

        </div>
      </div>
    </div>
  </>
  );
};

export default Login;
