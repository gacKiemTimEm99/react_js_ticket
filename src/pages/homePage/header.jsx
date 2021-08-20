import React, { useEffect } from "react";
import "../../style/header.scss";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchLocalUser, logout } from "../../service/user";
import { createAction } from "../../redux/action/action";
import { POST_USER_LOGIN } from "../../redux/action/type";
const touchcinema = process.env.PUBLIC_URL + "/img/touchcinema.png";
// const datvengay = process.env.PUBLIC_URL + "/img/dat-ve-ngay.png";

export default function Header() {
  const userRe = useSelector((item) => item.userReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = fetchLocalUser();
    if (user) {
      dispatch(createAction(POST_USER_LOGIN, user));
    }
  }, []);

  return (
    <div className="header">
      <div className="header__logo">
        <a routerlink>
          <img src={touchcinema} alt />
        </a>
      </div>
      <div className="header__content">
        <div className="header__content__above">
          <div className="header__content__logo">
            <img alt />
          </div>
          <div className="header__content__search">
            <input type="text" placeholder="tìm kiếm" />
            <i className="fas fa-search" />
          </div>
          <div className="header__content__login-logout">
            {!userRe ? (
              <>
                <NavLink to="/login">
                  <button>ĐĂNG NHẬP</button>
                </NavLink>
                <NavLink to="/register">
                  {" "}
                  <button>ĐĂNG KÝ</button>
                </NavLink>
              </>
            ) : (
              <>
                <button>xin chào {userRe.userName} </button>

                <button
                  onClick={() => {
                    logout(dispatch);
                  }}
                >
                  ĐĂNG XUẤT
                </button>
              </>
            )}
          </div>
        </div>
        <nav className="header__content__nav">
          <ul className="header__content__list">
            <li className="header__content__list--item">
              <NavLink to="/">trang chủ </NavLink>
            </li>
            <li className="header__content__list--item">
              <NavLink to="/">danh sách phim </NavLink>
            </li>
            <li className="header__content__list--item">
              <NavLink to="/">lịch chiếu</NavLink>
            </li>
            <li className="header__content__list--item">
              <NavLink to="/">giá vé </NavLink>
            </li>
            <li className="header__content__list--item">
              <NavLink to="/">giới thiệ </NavLink>
            </li>
            <li className="header__content__list--item">
              <NavLink to="/">dịch vụ </NavLink>
            </li>
            <li className="header__content__list--item">
              <NavLink to="/">liên hệ </NavLink>
            </li>

            <li className="header__content__list--item noti-button">
              <i className="fa fa-bell" />
              <div className="notification">
                <div className="notification__header">
                  <h6>Thông Báo</h6>
                </div>
                <div className="notification__list-item">
                  <ul>
                    <li>
                      <a href>
                        <div className="notification__list-item__title">
                          <i className="fa fa-bell" aria-hidden="true" />
                          <span>LẬT MẶT 48H: đã mở bán vé</span>
                        </div>
                        <div className="notification__list-item__content">
                          <i className="fa fa-beer" />
                          <span>
                            Bối cảnh hoành tráng với sự đầu tư nghiêm túc, siêu
                            phẩm hành động Việt Lật Mặt 48h
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href>
                        <div className="notification__list-item__title">
                          <i className="fa fa-bell" aria-hidden="true" />
                          <span>LẬT MẶT 48H: đã mở bán vé</span>
                        </div>
                        <div className="notification__list-item__content">
                          <i className="fa fa-beer" />
                          <span>
                            Bối cảnh hoành tráng với sự đầu tư nghiêm túc, siêu
                            phẩm hành động Việt Lật Mặt 48h
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href>
                        <div className="notification__list-item__title">
                          <i className="fa fa-bell" aria-hidden="true" />
                          <span>LẬT MẶT 48H: đã mở bán vé</span>
                        </div>
                        <div className="notification__list-item__content">
                          <i className="fa fa-beer" />
                          <span>
                            Bối cảnh hoành tráng với sự đầu tư nghiêm túc, siêu
                            phẩm hành động Việt Lật Mặt 48h
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href>
                        <div className="notification__list-item__title">
                          <i className="fa fa-bell" aria-hidden="true" />
                          <span>LẬT MẶT 48H: đã mở bán vé</span>
                        </div>
                        <div className="notification__list-item__content">
                          <i className="fa fa-beer" />
                          <span>
                            Bối cảnh hoành tráng với sự đầu tư nghiêm túc, siêu
                            phẩm hành động Việt Lật Mặt 48h
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
