import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h5 className="w-1/5 text-black font-bold">Employee Name</h5>
        <h5 className="w-1/5 text-black font-bold text-center">New Task</h5>
        <h5 className="w-1/5 text-black font-bold text-center">
          Completed Task
        </h5>
        <h5 className="w-1/5 text-black font-bold text-center">Active Task</h5>
        <h5 className="w-1/5 text-black font-bold text-center">Failed Task</h5>
      </div>

      <div>
        {userData.employees.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="bg-gray-200 mb-2 py-2 px-4 flex justify-between rounded"
            >
              <h3 className="w-1/5 text-black font-bold">{elem.firstName}</h3>
              <h3 className="w-1/5 text-blue-600 font-bold text-center">
                {elem.taskCount.newTask}
              </h3>
              <h3 className="w-1/5 text-green-600 font-bold text-center">
                {elem.taskCount.completed}
              </h3>
              <h3 className="w-1/5 text-yellow-600 font-bold text-center">
                {elem.taskCount.active}
              </h3>
              <h3 className="w-1/5 text-red-600 font-bold text-center">
                {elem.taskCount.failed}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
