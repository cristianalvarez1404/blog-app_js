import React, { useEffect, useState } from "react";
import Task from "../components/Task";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [userExist, setUserExist] = useState(false);

  useEffect(() => {
    const userExist = localStorage.getItem("user");
    if (userExist) setUserExist(true);
  });

  useEffect(() => {
    const requestPosts = async () => {
      const req = await axios.get("http://localhost:3000/api/v1/blogs");
      if (req.data) setPosts(req.data);
    };
    requestPosts();
  }, []);

  return (
    <div className="w-[80%] mt-12 mr-auto ml-auto">
      <div className="flex-col items-center">
        <div className="m-auto flex flex-col md:flex-row justify-center items-center w-[95%] md:w-[78%] ">
          <img className="w-2xl" src="./img1.png" alt="" />
          <div>
            <p className="font-thin text-xl md:text-5xl leading-10 md:leading-[65px]">
              Create your amazing notes with{" "}
              <strong className="text-purple-700 font-semibold">WRITE</strong>{" "}
              app!
            </p>
            <a
              href="/write"
              className="block w-50 text-center text-lg  my-5 px-2 py-3 rounded-3xl bg-violet-500 text-white"
            >
              Write!
            </a>
          </div>
        </div>
        <div>
          <h2 className="inline-block text-xl md:text-4xl mt-11 font-thin">
            Check your notes
          </h2>
          <a href="/dashboard">
            <i className="text:xl md:text-2xl text-gray-400 mx-10 fa-solid fa-list-check"></i>
          </a>
          {userExist ? (
            <div className="flex-col md:flex-row flex gap-6 flex-wrap justify-between mt-20">
              {posts ? (
                posts.map((post) => <Task postInfo={post} />)
              ) : (
                <div>No posts</div>
              )}
            </div>
          ) : (
            <div className="p-4 md:p-8 text-gray-500 font-light md:font-thing font-bold">
              Empty list 😭.Please login to view all your post you have created
            </div>
          )}
          <div className="flex justify-center">
            <img
              className="rotate-60 w-1/3 object-contain rounded-full mb-10"
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
