import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  console.log(props.loggedInUserData);
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen ">
      <Header changeUser={props.changeUser} data={props.loggedInUserData} />
      <TaskListNumbers data={props.loggedInUserData} />
      <TaskList data={props.loggedInUserData} />
    </div>
  );
};

export default EmployeeDashboard;
