// eslint-disable-next-line
import React from "react";
import Func from "./components/Products/func";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BodyIndex from "./components/Main/body/BodyIndex";




import Main from "./components/Main/Main";
import About from "./components/About/About";

import ProductWrap from "./components/Products/ProductWrap";
import AddUser from "./components/add/AddUser";
import Mains from "./components/add/Mains";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignIn/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";

import SideNav from "./components/SideNav/SideNav";
import Profile from "./components/Profile/Profile";




function App() {




  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<BodyIndex />} />
          <Route path="/about" element={<About />} />

          <Route path="/products/:id" element={<ProductWrap />} />

        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/topics" element={<SideNav />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add/:id" element={<Mains />}>
          <Route index element={<AddUser />} />
        </Route>
        <Route path="/work" element={<Func />} />


      </Routes>


    </BrowserRouter>
  );
}

export default App;
