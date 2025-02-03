import React from 'react'

const TaskRow = () => {
  return (
    <tr className="flex-1 border-b border-gray-200 hover:bg-gray-50">
              <td className='px-6 py-4'>The Sliding Mr.</td>
              <td className='px-6 py-4'>Malcolm Lockyer</td>
              <td className='px-6 py-4'>1961</td>
              <td className='px-6 py-4'>1961</td>
              <td className="text-center">
                <a className="" href="/">
                <i className="fa-regular fa-pen-to-square text-green-500"></i>
                </a>
              </td>
              <td className='text-center'>
                <a href="/">
                  <i className="fa-solid fa-trash text-red-400"></i>
                </a>
              </td>
        </tr>
  )
}

export default TaskRow