import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [userId, setUserId] = useState("");
  const [open, setOpen] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    const load = () => {
      let id = localStorage.getItem("user");
      if (id !== null) {
        setUserId(JSON.parse(id));
      } else return;
    };
    load();
  }, []);

  const handleClick = () => {
    localStorage.removeItem("user");
    navigate("/");
    navigate(0);
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full bg-violet-500 text-white sticky top-0">
      <div className="flex justify-between items-center px-8 md:px-16 py-3 text-xl">
        <a href="/" className="text-white text-2xl md:text-4xl font-bold">
          WRITE
        </a>
        {/* Mobile */}
        <div className="block md:hidden sm:bg-amber-300">
          <div className="self-end text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        {open && 
          <div className="w-screen h-screen bg-purple-400 absolute top-0 bottom-0 left-0 right-0">
            <div className="absolute right-12 top-5 cursor-pointer text-3xl" onClick={() => setOpen(!open)}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="p-10 w-full h-full flex flex-col gap-10 text-white mt-5">
              {userId && (
                <>
                <a href="/write" className="block hover:bg-purple-600 p-1">
                  <p>Write</p>
                </a>
                <a href="/dashboard" className="block hover:bg-purple-600 p-1">
                  <p>Dashboard</p>
                </a>
                  </>
            )}
              {!userId ? (
                <a href="/signin" className="block hover:bg-purple-600 p-1">
                  <p>Sign in</p>
                </a>
              ) : (
                <a className="block cursor-pointer hover:bg-purple-600 p-1" onClick={handleClick}>
                  Logout
                </a>
              )}
              {/* {userId && (
                <a href="/dashboard" className="block hover:bg-gray-400 p-1">
                  <img
                    className="w-10 h-10 bg-amber-300 rounded-full "
                    src="./profile.png"
                    alt=""
                  />
                </a>
              )} */}
            </div>
          
          </div>
        }
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {userId && (
            <>
              <a href="/write">
                <p>Write</p>
              </a>

              <a href="/dashboard">
                <p>Dashboard</p>
              </a>
            </>
          )}
          {!userId ? (
            <a href="/signin">
              <p>Sign in</p>
            </a>
          ) : (
            <a className="cursor-pointer" onClick={handleClick}>
              Logout
            </a>
          )}
          {userId && (
            <a href="/dashboard">
              <img
                className="w-10 h-10 bg-amber-300 rounded-full "
                src="./profile.png"
                alt=""
              />
            </a>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Header;
