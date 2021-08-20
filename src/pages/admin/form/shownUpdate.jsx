import React from "react";
import { useFormik, FormikProvider, ErrorMessage, Field } from "formik";
import "../../../style/form.scss";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { values } from "lodash";
import { useState } from "react";
import { postShown, updateShown } from "../../../service/admin";

export default function ShownFormUpdate(props) {
  const shownUpdate = useSelector((item) => item.adminReducer.showns);

  const show = shownUpdate.filter((item) => {
    return item._id === props.id;
  });

  const shownPlace = shownUpdate.map((item) => {
    return item.shownPlaceId;
  });
  const [formValues, setForm] = useState(null);

  const saveValues = {
    shownName: show[0].shownName,
    description: show[0].description,
    director: show[0].director,
    category: show[0].category,
    image: show[0].image,
    trailer: show[0].trailer,
    dateStart: show[0].dateStart,
    price: show[0].price,
    shownPlaceId: show[0].shownPlaceId,
  };
  useEffect(() => {
    setForm(saveValues);
  }, []);

  const initialValues = {
    shownName: "",
    description: "",
    director: "",
    category: "",
    image: "",
    trailer: "",
    dateStart: "",
    price: "",
    shownPlaceId: "",
  };

  const formik = useFormik({
    initialValues: formValues || initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      await updateShown(props.id, values);
      alert("cập nhật thành công !!");
    },
  });

  return (
    <FormikProvider value={formik}>
      <div
        className="modal fade"
        id={"n" + props.id}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="button">Cập Nhật shown Diễn</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="">
                  <label>tên shown</label> <br />
                  <Field
                    type="text"
                    name="shownName"
                    values={formik.values.shownName}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="">
                  <label>mô tả</label> <br />
                  <Field
                    type="text"
                    name="description"
                    values={formik.values.description}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="">
                  <label>đạo diễn , biên kịch , chỉ đạo sản xuất</label> <br />
                  <Field
                    type="text"
                    name="director"
                    values={formik.values.director}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="">
                  <label>thể loại</label> <br />
                  <Field
                    type="text"
                    name="category"
                    values={formik.values.category}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="">
                  <label>hình ảnh</label> <br />
                  <Field
                    type="text"
                    name="image"
                    values={formik.values.image}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="">
                  <label>trailer</label> <br />
                  <Field
                    type="text"
                    name="trailer"
                    values={formik.values.trailer}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="">
                  <label>ngày công diễn</label> <br />
                  <Field
                    type="datetime-local"
                    name="dateStart"
                    values={formik.values.dateStart}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="">
                  <label>giá vé khởi điểm</label> <br />
                  <Field
                    type="text"
                    name="price"
                    values={formik.values.price}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="">
                  <label>mã địa điểm công diễn</label> <br />
                  <select
                    type="text"
                    name="shownPlaceId"
                    values={formik.values.shownPlaceId}
                    onChange={formik.handleChange}
                  >
                    <option value={show[0].shownPlaceId}>
                      {show[0].shownPlaceId}
                    </option>
                    ;
                    {shownPlace.map((item) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </select>
                </div>
                <button type="button" className="button" data-dismiss="modal">
                  Close
                </button>

                <button type="button" className="button" type="submit">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </FormikProvider>
  );
}
