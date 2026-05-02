import { useState } from "react";
import image from "../../../public/images/hero1.jpg";
import './Register.css'
import { Link } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log('User Registered:', {name, email, password})
     }
  return (
    <div className="w-full  flex  justify-center items-center flex-wrap p-8 md:p-12 gap-3">
      <form onSubmit={handleSubmit} className="w-full max-w-md  bg-[#cbcece22] rounded-lg border  shadow-md">
        <div className="flex justify-center mb-6 mt-2">
          <h2 className="text-xl font-medium">Rabbit</h2>
        </div>
        <h2 className="text-2xl font-bold text-center mb-6 ">Hey there!</h2>
        <p className="text-center mb-6">
          Enter your Name and Password to Register.
        </p>
        <div className="input mb-6 px-3 relative">
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="input1 w-full p-2  border rounded outline-none  focus:shadow-lg duration-300 focus:-translate-y-1"
          />
          <label className="label1 block absolute top-2 ml-2 text-sm text-gray-400 font-semibold mb-2 ">
            Name
          </label>
        </div>

        <div className=" mb-6 px-3 relative">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="input1 w-full p-2  border rounded outline-none  focus:shadow-lg duration-300 focus:-translate-y-1"
          />
          <label className="label1 block absolute top-2 ml-2 text-sm text-gray-400 font-semibold mb-2 ">
            Email
          </label>
        </div>
        <div className="mb-4 px-3 relative">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="input1 w-full p-2 border rounded outline-none focus:shadow-lg duration-300 focus:-translate-y-1"
            
          />
          <label className="label1 absolute top-2 ml-2 block text-gray-400 text-sm font-semibold mb-2">Password</label>

        </div>
        <div className="p-2">
          <button
            type="submit"
            className="w-full bg-black text-white py-2  rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Sign In
          </button>
        </div>
        <div className="flex gap-2 p-3">
          <p>You have an account? </p>
          <Link to={"/login"} className="text-blue-500 hover:text-blue-400">
            Login
          </Link>
        </div>
      </form>

      <img
        src={image}
        alt=""
        className="w-1/2 h-full hidden md:block object-cover"
      />
    </div>
  );
};

export default Register;
