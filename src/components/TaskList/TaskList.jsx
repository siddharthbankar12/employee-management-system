import React, { useEffect, useState } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";
import {
  getLocalStorage,
  setLocalStorage,
  updatedUserLocalStorage,
} from "../../utils/localStorage";

const TaskList = ({ data }) => {
  const [singleUserData, setSingleUserData] = useState(data);

  const [loggedInUserData, setLoggedInUserData] = useState(() =>
    JSON.parse(localStorage.getItem("loggedInUser"))
  );

  useEffect(() => {
    setLoggedInUserData(JSON.parse(localStorage.getItem("loggedInUser")));
  }, []);

  const activeTaskHandler = (taskToUpdate) => {
    const updatedTasks = singleUserData.tasks.map((task) =>
      task.title === taskToUpdate.title
        ? { ...task, active: true, newTask: false }
        : task
    );

    const updatedUserData = { ...singleUserData, tasks: updatedTasks };

    setSingleUserData(updatedUserData);

    const { employeesList, adminList } = getLocalStorage();
    const updatedEmployees = employeesList.map((emp) =>
      emp.id === updatedUserData.id ? updatedUserData : emp
    );

    setLocalStorage(updatedEmployees, adminList);
  };

  const completeTaskHandler = (taskToUpdate) => {
    const updatedTasks = singleUserData.tasks.map((task) =>
      task.title === taskToUpdate.title
        ? { ...task, completed: true, active: false }
        : task
    );

    const updatedUserData = { ...singleUserData, tasks: updatedTasks };

    setSingleUserData(updatedUserData);

    const { employeesList, adminList } = getLocalStorage();
    const updatedEmployees = employeesList.map((emp) =>
      emp.id === updatedUserData.id ? updatedUserData : emp
    );

    setLocalStorage(updatedEmployees, adminList);
  };
  const failedTaskHandler = (taskToUpdate) => {
    const updatedTasks = singleUserData.tasks.map((task) =>
      task.title === taskToUpdate.title
        ? { ...task, failed: true, active: false }
        : task
    );

    const updatedUserData = { ...singleUserData, tasks: updatedTasks };

    setSingleUserData(updatedUserData);

    const { employeesList, adminList } = getLocalStorage();
    const updatedEmployees = employeesList.map((emp) =>
      emp.id === updatedUserData.id ? updatedUserData : emp
    );

    setLocalStorage(updatedEmployees, adminList);
  };

  useEffect(() => {
    if (loggedInUserData) {
      let updatedLoggedInUser = { ...loggedInUserData, data: singleUserData };
      updatedUserLocalStorage(updatedLoggedInUser);
    }
  }, [loggedInUserData, singleUserData]);

  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full"
    >
      {data.tasks.length < 1 ? (
        <div className="flex justify-center items-center w-[80%] border rounded p-5 bg-gray-300 m-auto">
          <h1 className="text-black font-bold text-2xl">No Tasks</h1>
        </div>
      ) : (
        data.tasks.map((elem, idx) => {
          if (elem.active) {
            return (
              <AcceptTask
                complete={completeTaskHandler}
                failed={failedTaskHandler}
                key={idx + 1}
                data={elem}
              />
            );
          }
          if (elem.newTask) {
            return (
              <NewTask
                activeTaskHandler={activeTaskHandler}
                key={idx + 1}
                data={elem}
              />
            );
          }
          if (elem.completed) {
            return <CompleteTask key={idx + 1} data={elem} />;
          }
          if (elem.failed) {
            return <FailedTask key={idx + 1} data={elem} />;
          }
        })
      )}
    </div>
  );
};

export default TaskList;
