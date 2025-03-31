import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="rounded-xl py-6 px-9 w-[45%] bg-blue-400">
        <h2 className="text-3xl font-semibold">
          {data.taskCount.newTask || 0}
        </h2>
        <h3 className="text-xl font-medium">New Tasks</h3>
      </div>

      <div className="rounded-xl py-6 px-9 w-[45%] bg-green-400">
        <h2 className="text-3xl font-semibold">
          {data.taskCount.completed || 0}
        </h2>
        <h3 className="text-xl font-medium">Complete Tasks</h3>
      </div>

      <div className="rounded-xl py-6 px-9 w-[45%] bg-yellow-400">
        <h2 className="text-3xl text-black font-semibold">
          {data.taskCount.active || 0}
        </h2>
        <h3 className="text-black text-xl font-medium">Active Tasks</h3>
      </div>

      <div className="rounded-xl py-6 px-9 w-[45%] bg-red-400">
        <h2 className="text-3xl font-semibold">{data.taskCount.failed || 0}</h2>
        <h3 className="text-xl font-medium">Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
