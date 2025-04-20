import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SingIn = () => {
  const [userInfo,setUserInfo] = useState({
    email:"",
    password:""
  })

  const queryClient = useQueryClient();
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: async () => {
      return await axios.post("http://localhost:3000/api/v1/users/signin", userInfo);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["userSignin"] });
      toast.success("User logged succesfully!",{
        autoClose:1000
      })
      localStorage.setItem('user',JSON.stringify({_id:data.data._id}))
      setTimeout(() => {
        navigate("/")
        navigate(0)
        window.scrollTo(0,0)
      },1000)
    },
    onError:(error) => {
      toast.error(error?.message);
    },
  });

  const handleSubmit = (e:any) => {
    e.preventDefault();

    mutation.mutate(userInfo);
  };


  return (
    <div className="h-[calc(100vh-103.92px)] flex items-center justify-center">
      <div className="w-full lg:w-1/3 h-[80%] bg-white flex-col">
        <div className="flex-col justify-center p-10">
          <h2 className="font-bold text-2xl text-gray-500">Sign-in</h2>
          <form
            onSubmit={handleSubmit}
            className="w-full h-[500px] flex-col justify-center shadow-lg inset-shadow-indigo-300"
          >
            <input
              className="shadow-lg p-4 block w-[90%] mx-auto mt-5"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setUserInfo((prev) => {
                return {...prev,email:e.target.value}
              })}
            />
            <input
              className="shadow-lg p-4 block w-[90%] mx-auto mt-5"
              type="password"
              placeholder="Confirm password"
              onChange={(e) => setUserInfo((prev) => {
                return {...prev,password:e.target.value}
              })}
            />
            <input
              className="bg-violet-500 text-white mt-16 shadow-lg p-4  block w-[90%] mx-auto mt-5 cursor-pointer"
              type="submit"
              placeholder="Login Now"
            />
            <p className="w-[90%] text-sm mt-10 mx-5 text-violet-700">
              Don't have an account?
              <a className="font-bold" href="/signup">
                {" "}
                Signup
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
