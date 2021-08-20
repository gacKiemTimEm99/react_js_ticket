import React, { useEffect, useState } from "react";
import { useFormik, FormikProvider, ErrorMessage, Field } from "formik";
import "../../../style/form.scss";
import { postShownPlace, updateShownPlace } from "../../../service/admin";
import { useSelector } from "react-redux";

export default function ShownPlaceFormUpdate(props) {
  const shownUpdate = useSelector((item) => item.adminReducer.shownPlaces);

  const show = shownUpdate.filter((item) => {
    return item._id === props.id;
  });

  const [formValues, setForm] = useState(null);

  const saveValues = {
    placeName: show[0].placeName,
    description: show[0].description,
    space: show[0].space,
  };
  useEffect(() => {
    setForm(saveValues);
  }, []);

  const initialValues = {
    placeName: "",
    description: "",
    space: "",
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formValues || initialValues,
    onSubmit: async (values) => {
      try {
        const data = await updateShownPlace(props.id, values);
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
              <h5 className="button">Cập nhật Điểm công diễn</h5>
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
                  <label>tên địa điểm</label> <br />
                  <Field
                    type="text"
                    name="placeName"
                    values={formik.values.placeName}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="">
                  <label>mô tả địa điểm</label> <br />
                  <Field
                    type="text"
                    name="description"
                    values={formik.values.description}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="">
                  <label>số lượng khán giả</label> <br />
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
