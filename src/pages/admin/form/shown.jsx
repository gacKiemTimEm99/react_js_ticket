import React from "react";
import { useFormik, FormikProvider, ErrorMessage, Field } from "formik";
import "../../../style/form.scss";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { values } from "lodash";
import { useState } from "react";
import { postShown, updateShown } from "../../../service/admin";

export default function ShownForm(props) {
  const shownUpdate = useSelector((item) => item.adminReducer.showns);

  const shownPlace = shownUpdate.map((item) => {
    return item.shownPlaceId;
  });
  const [formValues, setForm] = useState(null);
  const saveValues = {
    shownName: " ",
    description: "",
    director: "",
    category: "",
    image: "",
    trailer: "",
    dateStart: "",
    price: 0,
    shownPlaceId: "",
  };

  const initialValues = {
    shownName: "",
    description: "",
    director: "",
    category: "",
    image: "",
    trailer: "",
    dateStart: "",
    price: 0,
    shownPlaceId: "",
  };

  const formik = useFormik({
    initialValues: formValues || initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        console.log("values", values);
        const data = await postShown(values);
        console.log("data", data);
      } catch (error) {
        throw error;
      }
    },
  });
  // console.log("safsf", formik.initialValues);
  return (
    <FormikProvider value={formik}>
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="button">Thêm shown Diễn</h5>
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
