import React from "react";
import { useFormik, FormikProvider, ErrorMessage, Field } from "formik";
import "../../../style/form.scss";
import { postShownTime } from "../../../service/admin";
import { useSelector } from "react-redux";

export default function ShownTimeForm() {
  const idShowns = useSelector((item) => item.adminReducer.showns);
  const idPlaces = useSelector((item) => item.adminReducer.shownPlaces);

  const idShown = idShowns.map((item) => {
    return item._id;
  });

  const idPlace = idPlaces.map((item) => {
    return item._id;
  });
  const formik = useFormik({
    initialValues: {
      shownId: "",
      shownPlaceId: "",
      timeStart: "",
      space: 0,
    },
    onSubmit: async (values) => {
      try {
        console.log("values", values);
        const data = await postShownTime(values);
        console.log("data", data);
      } catch (error) {
        throw error;
      }
    },
  });
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
                  <label>mã shown diễn</label> <br />
                  <select
                    type="text"
                    name="shownId"
                    values={formik.values.shownId}
                    onChange={formik.handleChange}
                  >
                    {idShown.map((item) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </select>
                </div>
                <div className="">
                  <label>mã địa điểm</label> <br />
                  <select
                    type="text"
                    name="shownPlaceId"
                    values={formik.values.shownPlaceId}
                    onChange={formik.handleChange}
                  >
                    {idPlace.map((item) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </select>
                </div>
                <div className="">
                  <label>thời gian công diễn</label> <br />
                  <Field
                    type="datetime-local"
                    name="timeStart"
                    values={formik.values.timeStart}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="">
                  <label>số lượng vé</label> <br />
                  <Field
                    type="text"
                    name="space"
                    values={formik.values.space}
                    onChange={formik.handleChange}
                  />
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
