import React from "react";
import ShownForm from "../form/shown";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { getListShown } from "../../../redux/action/adminAction";
import { deleteShown, deleteTicket } from "../../../service/admin";
import ShownFormUpdate from "../form/shownUpdate";
export default function Shown(props) {
  const listShown = useSelector((item) => item.adminReducer.showns);
  const dispatch = useDispatch();

  const renderShown = () => {
    return listShown.map((item, key) => {
      return (
        <tr>
          <td>{item._id.length > 5 ? item._id.substr(0, 5) : item._id}</td>
          <td>{item.shownName}</td>
          <td>
            {item.description.length > 5
              ? item.description.substr(0, 5)
              : item.description}
          </td>
          <td>{item.director}</td>
          <td>{item.category}</td>
          <td>
            <img
              // style={{ width: "100%" }}
              width="80px"
              src={item.image}
              alt=""
            />
          </td>
          <td>
            {item.trailer > 5 ? item.trailer.substr(0, 5) : item.trailer + ".."}
          </td>
          <td>{item.dateStart}</td>
          <td>{item.price}</td>
          <td>
            {item.shownPlaceId.length > 5
              ? item.shownPlaceId.substr(0, 5)
              : item.shownPlaceId}
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
          </td>
          <td>
            <button
              onClick={async () => {
                await deleteShown(item._id);
                alert("xóa thành công");
              }}
              className="btn btn-danger"
            >
              {" "}
              xóa
            </button>
          </td>
          <ShownFormUpdate id={item._id} name={item.shownName} />
        </tr>
      );
    });
  };
  useEffect(() => {
    dispatch(getListShown(dispatch));
  }, []);

  return (
    <div className="recentOrders">
      <div className="cardHeader">
        <h2 className="content">Danh Mục Shown Diễn</h2>
        <button data-toggle="modal" data-target="#modelId" className="button">
          +
        </button>
        <ShownForm />
      </div>
      <table>
        <thead>
          <tr>
            <td>mã shown</td>
            <td>tên shown</td>
            <td>mô tả</td>
            <td>đạo diễn</td>
            <td>thể loại</td>
            <td>hình ảnh</td>
            <td>trailer</td>
            <td>ngày công chiếu</td>
            <td>giá</td>
            <td>mã địa điểm</td>
            <td>sửa</td>
            <td>xóa</td>
          </tr>
        </thead>
        <tbody>{renderShown()}</tbody>
      </table>
    </div>
  );
}
