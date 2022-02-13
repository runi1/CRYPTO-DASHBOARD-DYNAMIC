import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "../partials/Sidebar";
import WelcomeBanner from "../partials/dashboard/Banner";
import CryptoList from "../partials/dashboard/CryptoList";
import Newslist from "../partials/dashboard/News";
import Header from "../partials/Header";


function Dashboard() {
  console.log("dashabord" + useLocation().pathname);

  return (
    <div className="app">
        <Sidebar />
      <section class="home-section">
        <Header/>
        <WelcomeBanner />
        <Newslist />
        <CryptoList />
      </section>
    </div>
  );
}

export default Dashboard;
