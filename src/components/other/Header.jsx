import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">Siddharth👋</span>
      </h1>
      <button className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm">
        Logout
      </button>
    </div>
  );
};

export default Header;
