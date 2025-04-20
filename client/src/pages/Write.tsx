import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Write = () => {
  const [description, setDescription] = useState("");
  const [inputText, setInputText] = useState(false);
  const [title, setTitle] = useState("Write your title");

  const quillRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const load = () => {
      let id = localStorage.getItem("user");
      if (!id) navigate("/signin");
    };
    load();
  });

  const handleChange = (e: any) => {
    setDescription(e);
  };

  const handleSubmit = async () => {
    const post = {
      title,
      description: quillRef.current.getEditor().getText().trim(),
      postedBy: "67ba31f5ed3135d5b26e17d9",
    };

    const newPost = await axios.post(
      "http://localhost:3000/api/v1/blogs",
      post
    );

    if (newPost.status < 300 && newPost.data) {
      toast.success("Post created successfully 🚀🚀🚀");
      setTimeout(() => {
        navigate("/");
      }, 3200);
    } else {
      toast.error("Check your info post");
    }
  };

  return (
    <>
      <div className="w-[80%] h-[calc(100vh-110px)] flex flex-col items-center m-auto">
        <h2 className="text-4xl font-medium m-5 text-gray-500">
          {!inputText ? (
            <div
              onClick={() => {
                setTitle("");
                setInputText(!inputText);
              }}
            >
              <i className="text-red-400 mr-5 fa-solid fa-pencil"></i>
              <span className="text-sm md:text-2xl">Write your task</span>
            </div>
          ) : (
            <input
              className="text-sm md:text-2xl outline-none"
              type="text"
              placeholder="Write your title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          )}
        </h2>
        <div className="w-full">
          <ReactQuill
            ref={quillRef}
            className="h-[50vh] md:h-[65vh]"
            value={description}
            onChange={handleChange}
            theme="snow"
            formats={[
              "bold",
              "italic",
              "underline",
              "size",
              "color",
              "align",
              "list",
              "link",
            ]}
            modules={{
              toolbar: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ align: [] }],
                ["bold", "italic", "underline"],
                ["link"],
                [{ size: ["small", "medium", "large", "huge"] }],
                [{ color: [] }, { background: [] }],
                ["clean"],
              ],
            }}
          />
        </div>
      </div>
      <div
        onClick={handleSubmit}
        className="w-[80%] m-auto flex cursor-pointer"
      >
        <p className="rounded-xl flex justify-center items-center w-10 bg-red-400 text-white px-15 py-2 mb-5">
          Save
        </p>
      </div>
    </>
  );
};

export default Write;
