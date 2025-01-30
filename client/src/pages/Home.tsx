import React from "react";

const Home = () => {
  return (
    <div className="h-[calc(100vh-104px)] mt-12">
      <div className=" ">
        <div className="m-auto flex justify-center items-center w-[78%] ">
          <img className="w-2xl" src="./img1.png" alt="" />
          <div>
            <p className="font-thin text-5xl leading-[65px]">
              Create your amazing notes with{" "}
              <strong className="text-purple-700 font-semibold">WRITE</strong>{" "}
              app!
            </p>
            <a
              href="/write"
              className="block w-max my-5 px-5 py-3 rounded-3xl bg-violet-500 text-white"
            >
              Write!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
