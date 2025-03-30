import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ admin: [], employees: [] });

  const { employeesList, adminList } = getLocalStorage();

  useEffect(() => {
    setUserData({ ...userData, admin: adminList, employees: employeesList });
  }, []);

  useEffect(() => {
    setLocalStorage(userData.employees, userData.admin);
  }, [userData]);

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
