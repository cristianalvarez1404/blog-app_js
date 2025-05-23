import React from "react";

// function Task() {
//   return (
//     <a
//       href="/task1"
//       className="w-[25%] p-8 rounded-xl shadow-2xl mb-12 cursor-pointer"
//     >
//       <div>
//         <h2 className="text-2xl font-bold text-gray-500">Task 1</h2>
//         <img className="" src="./img2.png" alt="" />
//         <p className="text-gray-600">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quidem
//           itaque nesciunt tenetur magnam impedit corrupti cum quam non.
//           Similique?
//         </p>
//         <small className="text-gray-400 w-0.5">Posted by : cristian - </small>
//         <small className=" text-gray-400">08:00am</small>
//       </div>
//       <div className="flex justify-end gap-2 text-xl">
//         <a href="/">
//           <i className="fa-regular fa-pen-to-square text-green-500"></i>
//         </a>
//         <a href="/">
//           <i className="fa-solid fa-trash text-red-400"></i>
//         </a>
//       </div>
//     </a>
//   );
// }

type blog = {
  title: string;
  description: string;
  postedBy: string;
};

function Task({ postInfo }: blog) {
  return (
    <a
      href="/dashboard"
      className="w-[95%] md:w-[25%] p-8 rounded-xl shadow-2xl mb-12 cursor-pointer"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-500">{postInfo.title}</h2>
        <img className="" src="./img2.png" alt="" />
        <p className="text-gray-600">{postInfo.description}</p>
        <small className="text-gray-400 w-0.5">
          Posted by : {postInfo.postedBy.substring(0, 10)}
        </small>
        <br />
        <small className=" text-gray-400">08:00am</small>
      </div>
      <div className="flex justify-end gap-2 text-xl">
        <a href="/dashboard">
          <i className="fa-regular fa-pen-to-square text-green-500"></i>
        </a>
        <a href="/dashboard">
          <i className="fa-solid fa-trash text-red-400"></i>
        </a>
      </div>
    </a>
  );
}

export default Task;
