import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { employeesList, adminList } = getLocalStorage();

  const [userData, setUserData] = useState({
    admin: adminList,
    employees: employeesList,
  });

  useEffect(() => {
    setLocalStorage(userData.employees, userData.admin);
  }, [userData.employees, userData.admin]);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
