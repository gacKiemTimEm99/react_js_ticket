import React from "react";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../service/user";
import { useDispatch } from "react-redux";

export default function Navigation() {
  const dispatch = useDispatch();
  return (
    <div className="navigation">
      <ul className="nav nav-tabs" role="tablist">
        <li>
          <NavLink to="/" exact>
            <span className="icon">
              <i className="fa fa-address-card" aria-hidden="true" />
            </span>
            <span className="title">
              <h5>thanh công cụ</h5>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-button" to="/admin" exact>
            <span className="icon">
              <i class="fa fa-book-open"></i>
            </span>
            <span className="title">quản lý danh sách shown diễn</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-button" to="/admin/showntime" exact>
            <span className="icon">
              <i className="fa fa-clock" aria-hidden="true" />
            </span>
            <span className="title">quản lý lịch diễn</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-button" to="/admin/shownplace" exact>
            <span className="icon">
              <i class="fa fa-plane"></i>
            </span>
            <span className="title">quản lý địa điểm shown diễn</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-button" to="/admin/user" exact>
            <span className="icon">
              <i class="fa fa-user-edit"></i>
            </span>
            <span className="title">quản lý người dùng</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active-button"
            to="/admin/ticketbooking"
            exact
          >
            <span className="icon">
              <i class="fa fa-ticket-alt"></i>
            </span>
            <span className="title">quản lý danh sách đặt vé</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              logout(dispatch);
            }}
            activeClassName="active-button"
            to="/"
            exact
          >
            <span className="icon">
              <i className="fa fa-cog" aria-hidden="true" />
            </span>
            <span className="title">đăng xuất</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
