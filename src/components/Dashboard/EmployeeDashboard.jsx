import React, { useEffect, useState } from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("loggedInUser"));
  });

  useEffect(() => {
    const updateUser = () => {
      const updatedUser = JSON.parse(localStorage.getItem("loggedInUser"));
      setUser(updatedUser);
    };

    const interval = setInterval(updateUser, 100);

    return () => clearInterval(interval);
  }, []);

  if (!user) {
    return <p className="text-white text-center">Loading...</p>;
  }

  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header changeUser={props.changeUser} data={user.data} />
      <TaskListNumbers data={user.data} />
      <TaskList data={user.data} />
    </div>
  );
};

export default EmployeeDashboard;
