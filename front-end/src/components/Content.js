import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages";

const Content = () => {
  return (
    <div>
      <>
        <Routes>
          {/* Home */}
          <Route path="" element={<Home></Home>}></Route>
        </Routes>
      </>
    </div>
  );
};

export default Content;
