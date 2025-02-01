import React from "react";

const Register = () => {
  return (
    <div className="h-[calc(100vh-103.92px)] flex items-center justify-center">
      <div className="w-1/3 h-[80%] bg-white flex-col">
        <div className="flex-col justify-center p-10">
          <h2 className="font-bold text-2xl text-gray-500">Sign-in</h2>
          <form
            action="/"
            className="w-full h-[500px] flex-col justify-center shadow-lg inset-shadow-indigo-300"
          >
            <input
              className="shadow-lg p-4 block w-[90%] mx-auto mt-5"
              type="email"
              placeholder="Enter your email"
            />
            <input
              className="shadow-lg p-4 block w-[90%] mx-auto mt-5"
              type="password"
              placeholder="Confirm password"
            />
            <input
              className="bg-violet-500 text-white mt-16 shadow-lg p-4  block w-[90%] mx-auto mt-5 cursor-pointer"
              type="submit"
              placeholder="Login Now"
            />
            <p className="w-[90%] text-sm mt-10 text-violet-700">
              Don't have an account?
              <a className="font-bold" href="/register">
                {" "}
                Signup now
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
