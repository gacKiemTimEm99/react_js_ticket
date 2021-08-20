import React from "react";

export default function Header() {
  return (
    <div className="topbar">
      {/* <button onclick={toggleMenu}>ok</button> */}
      <div className="toggle">
        <span>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </span>
      </div>
      <div className="search">
        <label>
          <input type="text" placeholder="text in here" />
          <i className="fa fa-search" aria-hidden="true" />
        </label>
        {/* <h1>ADMIN PAGE MANAGEMENT</h1> */}
      </div>
      <div className="user">
        <img
          width="100px"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          alt
        />
      </div>
    </div>
  );
}
