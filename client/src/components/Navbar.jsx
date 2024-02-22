import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };
  return (
    <nav className="bg-[#d3d2cd] paddingXShorter paddingYShorter3">
      <div className="flex justify-between">
        <h3 className="font-light text-[#595959]">Fainter</h3>
        <div className="flex">
          {/* <>
            <div className="flex -space-x-4 rtl:space-x-reverse">
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover"
                src="https://images.unsplash.com/photo-1702906221306-0cc041ad16d9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover"
                src="https://images.unsplash.com/photo-1702906221306-0cc041ad16d9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </> */}
          <button
            onClick={handleLogout}
            className="px-4 hover:rounded-xl bg-black text-white font-extralight text-xs rounded-full"
          >
            keluar
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
