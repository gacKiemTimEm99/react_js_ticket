import React from "react";
import { useFormik, FormikProvider, ErrorMessage, Field } from "formik";
import "../../../style/form.scss";
import { postUser } from "../../../service/admin";
export default function UserForm() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      email: "",
      phoneNumber: "",
      role: "",
      fullName: "",
    },
    onSubmit: async (values) => {
      try {
        console.log("values", values);
        const data = await postUser(values);
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
                  <label>tên tài khoản</label> <br />
                  <Field
                    type="text"
                    name="userName"
                    values={formik.values.userName}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="">
                  <label>mật khẩu</label> <br />
                  <Field
                    type="text"
                    name="password"
                    values={formik.values.password}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="">
                  <label>email</label> <br />
                  <Field
                    type="text"
                    name="email"
                    values={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="">
                  <label>số điện thoại</label> <br />
                  <Field
                    type="text"
                    name="phoneNumber"
                    values={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className="">
                  <label>loại người dùng</label> <br />
                  <select
                    type="text"
                    name="role"
                    values={formik.values.role}
                    onChange={formik.handleChange}
                  >
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                  </select>
                  <div className="">
                    <label>họ tên </label> <br />
                    <Field
                      type="text"
                      name="fullName"
                      values={formik.values.fullName}
                      onChange={formik.handleChange}
                    />
                  </div>
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
