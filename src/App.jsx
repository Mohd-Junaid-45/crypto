import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import Crypto from "./pages/Crypto";
import Trending from "./pages/Trending";
import Saved from "./pages/Saved";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Homepage />} />
          <Route path="crypto" element={<Crypto />} />
          <Route path="trending" element={<Trending />} />
          <Route path="saved" element={<Saved />} />
        </Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
