import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Explore from "./Explore";
import Notification from "./Notification";
import Sidebar from "./Sidebar";
import Messages from "./Messages";
import Settings from "./Settings";
import Profile from "./Profile";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="explore" element={<Explore />} />
            <Route path="notifications" element={<Notification />} />
            <Route path="messages" element={<Messages />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
