import React from "react";
import { useFormik, FormikProvider, ErrorMessage, Field } from "formik";
import "../../../style/form.scss";
import { postShownPlace } from "../../../service/admin";

export default function ShownPlaceForm() {
  const formik = useFormik({
    initialValues: {
      placeName: "",
      description: "",
      space: 0,
    },
    onSubmit: async (values) => {
      try {
        console.log("values", values);
        const data = await postShownPlace(values);
        alert("thêm thành công");
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
              <h5 className="button">Thêm Địa Điểm công diễn</h5>
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
