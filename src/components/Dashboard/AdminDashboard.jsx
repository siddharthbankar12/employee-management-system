import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {
  console.log(props.loggedInUserData);
  return (
    <div className="h-screen w-full p-7">
      <Header changeUser={props.changeUser} data={props.loggedInUserData} />

      <CreateTask />

      <AllTask />
    </div>
  );
};

export default AdminDashboard;
