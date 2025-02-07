import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const handleChange = () => {};

  return (
    <>
      <div className="w-[80%] h-[calc(100vh-110px)] flex flex-col items-center m-auto">
        <h2 className="text-4xl font-medium m-5 text-gray-500">
          <i className="text-red-400 mr-5 fa-solid fa-pencil"></i>Write your
          task
        </h2>
        <div className="w-full">
          <ReactQuill
            className="h-[65vh]"
            value={"write your task here!"}
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
      <div className="w-[80%] m-auto flex cursor-pointer">
        <p className="rounded-xl flex justify-center items-center w-10 bg-red-400 text-white px-15 py-2 mb-5">
          Save
        </p>
      </div>
    </>
  );
};

export default Write;
