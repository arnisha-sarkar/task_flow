import React from "react";

const MyContainer = ({ clasName, children }) => {
  return (
    <div className={`${clasName} container mx-auto border border-red-400`}>
      {children}
    </div>
  );
};

export default MyContainer;
