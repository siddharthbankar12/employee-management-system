import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    let foundUser = null;

    if (userData.admin) {
      foundUser = userData.admin.find(
        (e) => email === e.email && e.password === password
      );
    }

    if (!foundUser && userData.employees) {
      foundUser = userData.employees.find(
        (e) => email === e.email && e.password === password
      );
    }

    if (foundUser) {
      const role = userData.admin.includes(foundUser) ? "admin" : "employee";
      setUser(role);
      setLoggedInUserData(foundUser);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role, data: foundUser })
      );
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {user === "admin" ? (
        <AdminDashboard
          changeUser={setUser}
          loggedInUserData={loggedInUserData}
        />
      ) : user === "employee" ? (
        <EmployeeDashboard
          changeUser={setUser}
          loggedInUserData={loggedInUserData}
        />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </>
  );
};

export default App;
