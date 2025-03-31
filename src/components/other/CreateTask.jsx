import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [assignTo, setAssignTo] = useState({ firstName: "" });

  const [taskDetail, setTaskDetail] = useState({
    title: "",
    description: "",
    date: "",
    category: "",
    active: false,
    newTask: true,
    completed: false,
    failed: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();

    const capitalizeWords = (str) => {
      return str
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    };

    const updatedAssignTo = { firstName: capitalizeWords(assignTo.firstName) };
    const updatedTaskDetail = { ...taskDetail };

    const employeeExists = userData.employees.some(
      (emp) => emp.firstName === updatedAssignTo.firstName
    );

    if (!employeeExists) {
      alert("Employee not in database");
      return;
    }

    if (!taskDetail.title) {
      alert("Enter Title");
      return;
    }

    const updatedUserData = userData.employees.map((elem) => {
      if (updatedAssignTo.firstName === elem.firstName) {
        return {
          ...elem,
          tasks: [...elem.tasks, updatedTaskDetail],
          taskCount: {
            ...elem.taskCount,
            newTask: elem.taskCount.newTask + 1,
          },
        };
      }

      return elem;
    });

    // console.log(updatedUserData);

    setUserData({ ...userData, employees: updatedUserData });

    setAssignTo({ firstName: "" });
    setTaskDetail({
      title: "",
      description: "",
      date: "",
      category: "",
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "assignTo") {
      setAssignTo({ firstName: value });
    } else {
      setTaskDetail((prevTask) => ({ ...prevTask, [name]: value }));
    }
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5 font-bold">
              Task Title
            </h3>
            <input
              value={taskDetail.title}
              name="title"
              onChange={onChangeHandler}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Provide a Title"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5 font-bold">Date</h3>
            <input
              value={taskDetail.date}
              name="date"
              onChange={onChangeHandler}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5 font-bold">
              Assign to
            </h3>
            <input
              value={assignTo.firstName}
              name="assignTo"
              onChange={onChangeHandler}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Enter Employee Name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5 font-bold">Category</h3>
            <input
              value={taskDetail.category}
              name="category"
              onChange={onChangeHandler}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design, Development, etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5 font-bold">
            Description
          </h3>
          <textarea
            value={taskDetail.description}
            name="description"
            onChange={onChangeHandler}
            placeholder="Describe the task"
            className="text-sm py-2 px-4 w-full h-44 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            id=""
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-base font-bold mt-1 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
