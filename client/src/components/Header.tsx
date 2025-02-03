import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-violet-500 text-white sticky top-0 ">
      <div className="flex justify-between items-center px-16 py-3 text-xl">
        <a href="/" className="text-white text-4xl font-bold">
          WRITE
        </a>
        <div className="flex gap-10">
          <a href="/write">
            <p>Write</p>
          </a>
          <a href="/dashboard">
            <p>Dashboard</p>
          </a>
          <a href="/signin">
            <p>Sign in</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
