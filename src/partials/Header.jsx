import React from "react";
import { useState } from "react";

const Header = () => {
 

  const onClickHandler = () => {
    // we should avoid direct access of DOM . but lue of time i those this approach
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".sidebarBtn");
    console.log("sidebarBtn");
    console.log(sidebarBtn);
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
      sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  };
  return (
    <nav>
      <div class="sidebar-button" onClick={onClickHandler}>
        <i class="bx bx-menu sidebarBtn"></i>
      </div>
    </nav>
  );
};

export default Header;
