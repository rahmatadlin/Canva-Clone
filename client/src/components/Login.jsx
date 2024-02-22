import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import img from "../assets/tek.png";
import Swal from "sweetalert2";


const Login = () => {
  const url = "http://localhost:3001";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const input = { email, password };
      const { data } = await axios.post(`${url}/login`, input);
      localStorage.setItem("access_token", data.access_token);
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
      });
    }
  };

  function emailOnChange(e) {
    setEmail(e.target.value);
  }

  function passwordOnChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div
      className="flex justify-center  items-center min-h-screen bg-no-repeat bg-cover bg-center relative"
      //   style={{
      //     backgroundImage:
      //       "url(https://808.media/wp-content/uploads/2021/10/samocat.jpg)",
      //   }}
    >
      <div className="absolute bg-gradient-to-b bg-[#d3d2cd] opacity-75 inset-0 z-0"></div>

      {/* <img src={img} /> */}

      <form
        className="flex justify-center self-center z-10"
        onSubmit={handleLogin}
      >
        <div className="p-12 bg-white mx-auto rounded-2xl w-100">
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                Email
              </label>
              <input
                className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d3d2cd]"
                type="text"
                placeholder="mail@gmail.com"
                onChange={emailOnChange}
              />
            </div>
            <div className="space-y-2">
              <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input
                className="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d3d2cd]"
                type="password"
                placeholder="Enter your password"
                onChange={passwordOnChange}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center bg-[#d3d2cd] hover:bg-[#e6e7e1] text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
