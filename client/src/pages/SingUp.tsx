import React, { useState } from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type userData = {
  username:string | any,
  email:string | any,
  password:string | any
}


const SingUp = () => {
  const [userInfo, setUserInfo] = useState<userData>({
    username: "",
    email: "",
    password: "",
  });

  const queryClient = useQueryClient();
  const navigate = useNavigate()

  /*const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/api/v1/users/");
      return res.data;
    },
  });*/

  const mutation = useMutation({
    mutationFn: async () => {
      return await axios.post("http://localhost:3000/api/v1/users/", userInfo);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("User created succesfully!")
      setTimeout(() => navigate("/signin"),4000)
    },
    onError:(error) => {
      toast.error(error?.message);
    },
  });

  const handleSubmit = (e:any) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const newUserInfo:userData = {
      username: form.get("username") || "",
      email: form.get("email") || "",
      password: form.get("password") || "",
    };

    setUserInfo(newUserInfo);

    mutation.mutate(newUserInfo);
  };
  return (
    <div className="h-[calc(100vh-103.92px)] flex items-center justify-center mb-10">
      <div className="w-full lg:w-1/3 h-[80%] bg-white flex-col">
        <div className="flex-col justify-center p-10">
          <h2 className="font-bold text-2xl text-gray-500">Sign-Up</h2>
          
          <form
            action="/"
            className="w-full h-[500px] flex-col justify-center shadow-lg inset-shadow-indigo-300"
            onSubmit={handleSubmit}
          >
            <input
              className="shadow-lg p-4 block w-[90%] mx-auto mt-5"
              type="text"
              placeholder="Enter your username"
              name="username"
            />
            <input
              className="shadow-lg p-4 block w-[90%] mx-auto mt-5"
              type="email"
              placeholder="Enter your email"
              name="email"
            />
            <input
              className="shadow-lg p-4 block w-[90%] mx-auto mt-5"
              type="password"
              placeholder="Confirm password"
              name="password"
            />
            <input
              className="bg-violet-500 text-white mt-16 shadow-lg p-4  block w-[90%] mx-auto mt-5 cursor-pointer"
              type="submit"
              placeholder="Login Now"

            />
            <p className="w-[90%] text-sm mt-10 mx-5 text-violet-700">
              Do you have an account?
              <a className="font-bold" href="/signin">
                {" "}
                Signin
              </a>
            </p>
          </form>
          {/* {error && <p>Error: {error.message}</p>} */}
          {/* {data && <p>User created successfully</p>} */}

        </div>
      </div>
    </div>
  );
};

export default SingUp;
