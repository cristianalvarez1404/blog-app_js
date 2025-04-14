import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type post = {
  _id: string;
  title: string;
  description: string;
  postedBy: string;
  createdAt?: Date;
  updatedAt?: Date;
};

const TaskRow = ({ post }: post) => {
  const [editTask, setEditTask] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);
  const [newTask, setNewTask] = useState(post.title);
  const [newDesc, setNewDesc] = useState(post.description);

  const navigate = useNavigate();

  const handleTask = async () => {
    const dataTask = {
      title: newTask,
      description: newDesc,
    };
    try {
      const res = await axios.post(
        `http://localhost:3000/api/v1/blogs/${post._id}`,
        dataTask
      );

      if (res.status == 200) {
        toast.success("Updated task!!!");
        setTimeout(() => {
          navigate(0);
        }, 2000);
      } else {
        throw new Error("Error");
      }
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message || "Hubo un error al realizar la acción.");
      } else {
        toast.error("Hubo un error desconocido.");
      }
    }
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/v1/blogs/${post._id}`
      );

      if (res.status == 200) {
        toast.success("deleted task!!!");
        setTimeout(() => {
          navigate(0);
        }, 2000);
      } else {
        throw new Error("Error");
      }
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message || "Hubo un error al realizar la acción.");
      } else {
        toast.error("Hubo un error desconocido.");
      }
    }
  };

  return (
    <tr className="flex-1 border-b border-gray-200 hover:bg-gray-50">
      <td className="px-6 py-4 text-left">
        <p className="line-clamp-2">{post._id.substring(0, 6) + "..."}</p>
      </td>
      {editTask ? (
        <>
          <td className="text-center outline-none">
            <input
              className="border-2 border-gray-400 p-1 mr-1"
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
          </td>
        </>
      ) : (
        <td className="px-6 py-4 text-left">{post.title}</td>
      )}
      {editTask ? (
        <>
          <td className="text-center outline-none">
            <input
              className="border-2 border-gray-400 p-1"
              type="text"
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
            />
          </td>
        </>
      ) : (
        <td className="px-6 py-4 text-left">{post.description}</td>
      )}

      <td className="px-6 py-4 text-left">
        {post.postedBy.substring(0, 6) + "..."}
      </td>
      <td className="text-center">
        <a className="cursor-pointer" onClick={() => setEditTask(true)}>
          {editTask ? (
            <i
              className="fa-solid fa-floppy-disk text-green-500"
              onClick={() => handleTask()}
            ></i>
          ) : (
            <i className="fa-regular fa-pen-to-square text-green-500"></i>
          )}
        </a>
      </td>
      <td className="text-center">
        {editTask ? (
          <a className="cursor-pointer" onClick={() => setEditTask(false)}>
            <i className="fa-solid fa-ban text-red-400"></i>
          </a>
        ) : (
          <a className="cursor-pointer">
            <i
              className="fa-solid fa-trash text-red-400"
              onClick={() => handleDelete()}
            ></i>
          </a>
        )}
      </td>
    </tr>
  );
};

export default TaskRow;
