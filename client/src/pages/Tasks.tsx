import React from 'react'
import Task from '../components/Task'
import axios from 'axios'
import { useQuery } from "@tanstack/react-query";

function Tasks() {
  const {isPending, error, data} = useQuery({
    queryKey:['user'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:3000/api/v1/users/')
      console.log(res)
      return res.data[0]
    }
  })

  if(isPending) return 'loading...'

  if(error) return 'An error has occured ' + error.message


  return (
    <>
    <h2 className='text-4xl font-bold m-5 text-gray-500 text-center'>List of tasks</h2>
    <div className='w-[80%] flex flex-wrap gap-10 justify-center items-center m-auto mt-10'>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
    </div>
    
    </>
  )
}

export default Tasks