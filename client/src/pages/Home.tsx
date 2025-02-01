import React from "react";
import Task from "../components/Task";

const Home = () => {
  return (
    <div className="w-[80%] mt-12 mr-auto ml-auto">
      <div className="flex-col items-center">
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
        <div>
          <h2 className="inline-block text-4xl mt-11 font-thin">
            Check your notes
          </h2>
          <a href="/tasks">
            <i className="text-2xl text-gray-400  mx-10 fa-solid fa-list-check"></i>
          </a>
          <div className="flex gap-6 flex-wrap justify-between mt-20">
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
          </div>
          <div className="flex justify-center">
            <img
              className="rotate-60 w-1/2 object-contain"
              src="./img4.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
