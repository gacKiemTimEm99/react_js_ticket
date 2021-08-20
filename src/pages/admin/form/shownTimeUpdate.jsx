import React, { useEffect, useState } from "react";
import { useFormik, FormikProvider, ErrorMessage, Field } from "formik";
import "../../../style/form.scss";
import { postShownTime, updateShownTime } from "../../../service/admin";
import { useSelector } from "react-redux";

export default function ShownTimeFormUpdate(props) {
  const idShowns = useSelector((item) => item.adminReducer.showns);
  const idPlaces = useSelector((item) => item.adminReducer.shownPlaces);

  const idShown = idShowns.map((item) => {
    return item._id;
  });

  const idPlace = idPlaces.map((item) => {
    return item._id;
  });

  const shownUpdate = useSelector((item) => item.adminReducer.shownTimes);

  const show = shownUpdate.filter((item) => {
    return item._id === props.id;
  });
  const [formValues, setForm] = useState(null);

  const saveValues = {
    shownId: show[0].shownId,
    shownPlaceId: show[0].shownPlaceId,
    timeStart: show[0].timeStart,
    space: show[0].space,
  };
  console.log("save form ", saveValues);
  useEffect(() => {
    setForm(saveValues);
  }, []);

  const initialValues = {
    shownId: "",
    shownPlaceId: "",
    timeStart: "",
    space: 0,
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formValues || initialValues,
    onSubmit: async (values) => {
      try {
        const data = await updateShownTime(props.id, values);
        alert("cập nhật thành công");
      } catch (error) {
        throw error;
      }
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
                  <label>mã shown diễn</label> <br />
                  <select
                    type="text"
                    name="shownId"
                    values={formik.values.shownId}
                    onChange={formik.handleChange}
                  >
                    <option value={show[0].shownId}>{show[0].shownId}</option>;
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
                    <option value={show[0].shownPlaceId}>
                      {show[0].shownPlaceId}
                    </option>
                    ;
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
