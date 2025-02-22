import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const [userId,setUserId] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
      const load = () => {
        let id = localStorage.getItem('user') 
        if (id !== null) {
          setUserId(JSON.parse(id))
        } else return
      }
      load()
  },[])

  const handleClick = () => {
    localStorage.removeItem('user')
    navigate("/")
    navigate(0)
    window.scrollTo(0,0)
  }


  return (
    <div className="w-full bg-violet-500 text-white sticky top-0 ">
      <div className="flex justify-between items-center px-16 py-3 text-xl">
        <a href="/" className="text-white text-4xl font-bold">
          WRITE
        </a>
        <div className="flex items-center gap-10">
          <a href="/write">
            <p>Write</p>
          </a>
          <a href="/dashboard">
            <p>Dashboard</p>
          </a>
          {!userId? <a href="/signin">
            <p>Sign in</p>
          </a> : <a className="cursor-pointer" onClick={handleClick}>Logout</a>}
          {
            userId && 
          <a href="/dashboard">
            <img className="w-10 h-10 bg-amber-300 rounded-full " src="./profile.png" alt="" />
          </a>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
