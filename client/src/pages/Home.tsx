import React from "react";

const Home = () => {
  return (
    <div className="h-[calc(100vh-104px)] mt-12">
      <div className="  ">
        <div className="m-auto flex justify-center items-center w-[78%] ">
          <img className="w-2xl" src="./img1.png" alt="" />
          <p className="font-thin text-6xl">
            Write your amazing notes with our app!
          </p>
          <a
            href="/write"
            className="px-5 py-3 rounded-3xl bg-violet-500 text-white"
          >
            Write!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
