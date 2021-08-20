import React, { useEffect } from "react";
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
import { useDispatch } from "react-redux";
import { fetchLocalUser } from "../../service/user";
import { createAction } from "../../redux/action/action";
import { POST_USER_LOGIN } from "../../redux/action/type";

export default function AdminPage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = fetchLocalUser();
    if (user) {
      dispatch(createAction(POST_USER_LOGIN, user));
    }
  }, []);

  return (
    <div
      style={{ position: "relative", width: "100%" }}
      className="my-container"
    >
      <Navigation />
      <div className="main">
        <Header />
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
        </div>
      </div>
    </div>
  );
}
