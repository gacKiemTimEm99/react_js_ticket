import React from "react";
import Box from "./box";
import Header from "./header";
import Navigation from "./navigation";
import NewUser from "./newUser";
import Shown from "./show/shown";
import "../../style/admin.scss";
import {
  BrowserRouter,
  Switch,
  Route,
  withRouter,
  NavLink,
} from "react-router-dom";
import ShownTime from "./show/shownTime";
import ShowPlace from "./show/showPlace";
import TicketBooking from "./show/ticketBooking";
import User from "./show/user";
import { useState } from "react";

export default function AdminPage(props) {
  let toggleMenu = () => {
    let toggle = document.querySelector(".toggle");
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
    main.classList.toggle("active");
    // alert("ok nha");
  };

  return (
    <div
      style={{ position: "relative", width: "100%" }}
      className="my-container"
    >
      <Navigation />
      <div className="main">
        <Header
          mytoggle={() => {
            toggleMenu();
          }}
        />
        <Box />
        <div className="detail admin">
          <Route exact path="/admin" component={withRouter(Shown)} />
          <Route
            exact
            path="/admin/showntime"
            component={withRouter(ShownTime)}
          />
          <Route
            exact
            path="/admin/shownplace"
            component={withRouter(ShowPlace)}
          />
          <Route
            exact
            path="/admin/ticketbooking"
            component={withRouter(TicketBooking)}
          />
          <Route exact path="/admin/user" component={User} />

          {/* <NewUser /> */}
        </div>
      </div>
    </div>
  );
}
