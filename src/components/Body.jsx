import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import ButtonList from "./ButtonList";

const Body = () => {
  return (
    <div>
      <Sidebar />
      <MainContainer />
      <ButtonList />
    </div>
  );
};

export default Body;
