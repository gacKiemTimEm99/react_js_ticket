import React from "react";
import ShownPlaceForm from "../form/shownPlace";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getShownsPlace } from "../../../redux/action/adminAction";
import { deleteShownPlace } from "../../../service/admin";
import ShownFormUpdate from "../form/shownUpdate";
import ShownPlaceFormUpdate from "../form/shownPlaceUpdate";
export default function ShowPlace() {
  const listShown = useSelector((item) => item.adminReducer.shownPlaces);
  const dispatch = useDispatch();

  const renderShown = () => {
    return listShown.map((item, key) => {
      return (
        <tr>
          <td>{item._id.length > 5 ? item._id.substr(0, 5) : item._id}</td>
          <td>
            {item.placeName.length > 5
              ? item.placeName.substr(0, 5)
              : item.placeName}
          </td>
          <td>
            {item.description.length > 5
              ? item.description.substr(0, 5)
              : item.description}
          </td>
          <td>{item.space}</td>

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
            <ShownPlaceFormUpdate id={item._id} />
          </td>
          <td>
            <button
              onClick={async () => {
                await deleteShownPlace(item._id);
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
    dispatch(getShownsPlace(dispatch));
  }, []);

  return (
    <div className="recentOrders">
      <div className="cardHeader">
        <h2 className="content">Địa Điểm</h2>
        <button data-toggle="modal" data-target="#modelId" className="button">
          +
        </button>
        <ShownPlaceForm />
      </div>
      <table>
        <thead>
          <tr>
            <td>mã địa điểm </td>
            <td>tên địa điểm</td>
            <td>mô tả</td>
            <td>số lượng khán giả</td>
            <td>sửa</td>
            <td>xóa</td>
          </tr>
        </thead>
        <tbody>{renderShown()}</tbody>
      </table>
    </div>
  );
}
