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
        <img width="100px" src="https://i.redd.it/w2xgfjroo9e51.png" alt />
      </div>
    </div>
  );
}
