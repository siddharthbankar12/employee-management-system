import React, { useEffect, useState } from "react";

const Header = (props) => {
  const loginData = JSON.parse(localStorage.getItem("loggedInUser"));
  const [userName, setUserName] = useState(null);

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    setUserName(null);
    props.changeUser(null);
  };

  useEffect(() => {
    if (loginData.data) {
      setUserName(loginData.data.adminName || loginData.data.firstName);
    }
  }, [loginData.data]);

  return (
    <div className="flex justify-between items-end">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">{userName}👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
