import React from "react";
import UserForm from "../form/user";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getListUser } from "../../../redux/action/adminAction";
import { deleteUser } from "../../../service/admin";
import UserFormUpdate from "../form/userUpdate";
export default function User() {
  const listShown = useSelector((item) => item.adminReducer.users);
  const dispatch = useDispatch();

  const renderShown = () => {
    return listShown.map((item, key) => {
      return (
        <tr>
          <td>{item._id.length > 5 ? item._id.substr(0, 5) : item._id}</td>
          <td>{item.userName}</td>
          <td>
            {item.password.length > 5
              ? item.password.substr(0, 5)
              : item.password}
          </td>
          <td>{item.email}</td>
          <td>{item.phoneNumber}</td>

          <td>{item.role > 5 ? item.role.substr(0, 5) : item.role + ".."}</td>

          <td>
            {item.fullName.length > 5
              ? item.fullName.substr(0, 5)
              : item.fullName}
          </td>
          <td>
            <button
              data-toggle="modal"
              data-target={"#n" + item._id}
              data-id={item._id}
              className="btn btn-primary"
            >
              {" "}
              sửa
            </button>
            <UserFormUpdate id={item._id} />
          </td>
          <td>
            <button
              onClick={async () => {
                await deleteUser(item._id);
                alert("xóa thành công");
              }}
              className="btn btn-danger"
            >
              {" "}
              xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  useEffect(() => {
    dispatch(getListUser(dispatch));
  }, []);

  return (
    <div className="recentOrders">
      <div className="cardHeader">
        <h2 className="content">Danh Sách Người Dùng</h2>
        <button data-toggle="modal" data-target="#modelId" className="button">
          +
        </button>
        <UserForm />
      </div>
      <table>
        <thead>
          <tr>
            <td>mã người dùng</td>
            <td>tên tài khoản</td>
            <td>mật khẩu</td>
            <td>email</td>
            <td>số điện thoại</td>
            <td>họ tên</td>
            <td>chức vụ</td>
            <td>sửa</td>
            <td>xóa</td>
          </tr>
        </thead>
        <tbody>{renderShown()}</tbody>
      </table>
    </div>
  );
}
