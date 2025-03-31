import React from "react";

const NewTask = ({ data, activeTaskHandler }) => {
  const activeTask = () => {
    activeTaskHandler(data);
  };

  return (
    <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm text-black font-bold bg-gray-100 rounded px-2 py-1">
          {data.date}
        </h4>
      </div>
      <h2 className="text-black mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2 text-black">{data.description}</p>
      <div className="mt-4">
        <button
          onClick={activeTask}
          className="rounded w-full bg-blue-600 py-1 px-2 text-sm"
        >
          Active Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
