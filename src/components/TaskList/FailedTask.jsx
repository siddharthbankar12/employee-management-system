import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
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
        <button className="w-full rounded bg-red-600 py-1 px-2 text-sm">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
