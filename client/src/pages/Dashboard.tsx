import React, { useEffect, useState } from 'react'
import TaskRow from '../components/TaskRow'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])


  useEffect(() => {
    const load = () => {
      let id = localStorage.getItem('user') 
      if (!id) navigate("/signin") 
    }
    load()
  })

  useEffect(() => {
    const getPosts = async () => {
      const req = await axios.get("http://localhost:3000/api/v1/blogs");
      if(req.data) setPosts(req.data);
    }
    getPosts()
  })

  const handleClick = () => {
    localStorage.removeItem('user')
    navigate("/")
    navigate(0)
    window.scrollTo(0,0)
  }


  return (
    <div className='w-full flex'>
      <div className='h-screen bg-gray-100 w-[20%]'>
        <a href='/' className='block p-5 shadow-2xs hover:bg-gray-600 cursor-pointer hover:text-white transition-colors'>
          <p><i className="mr-3 text-gray-400 text-10 fa-solid fa-house"></i>Home</p>
        </a>
        <a href='/write' className='block p-5 shadow-2xs hover:bg-gray-600 cursor-pointer hover:text-white transition-colors'>
          <p><i className="mr-3 text-gray-400 text-10 fa-solid fa-eye"></i>Add task</p>
        </a>
        <a onClick={handleClick} className='block p-5 shadow-2xs hover:bg-gray-600 cursor-pointer hover:text-white transition-colors'>
          <p> <i className="mr-3 text-gray-400 text-10 fa-solid fa-right-from-bracket"></i>Logout</p>
        </a>
      </div>
      <div className='bg-gray-50 flex-1'>
        <h2 className='font-mono text-2xl text-gray-500 font-bold text-center mt-10'>List of tasks</h2>
        <div>
        <table className="table-auto w-[80%] px-20 m-auto mt-10 border border-gray-200 shadow-md rounded-lg ">
          <thead className='bg-gray-100 border-gray-700'>
            <tr className='text-center text-gray-700'>
              <th className='flex-1 px-6 py-3 border-gray-200'>Id</th>
              <th className='flex-1 px-6 py-3 border-gray-200'>Title</th>
              <th className='flex-1 px-6 py-3 border-gray-200'>Description</th>
              <th className='flex-1 px-6 py-3 border-gray-200'>Posted by</th>
              <th className='flex-1 px-6 py-3 border-gray-200'>Edit</th>
              <th className='flex-1 px-6 py-3 border-gray-200'>Delete</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {
              posts && posts.map((post,index) => <TaskRow post={post} key={index}/> ) 
            }
  
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard