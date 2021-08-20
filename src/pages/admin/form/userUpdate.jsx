import React, { useEffect, useState } from "react";
import { useFormik, FormikProvider, ErrorMessage, Field } from "formik";
import "../../../style/form.scss";
import { postUser, updateUser } from "../../../service/admin";
import { useSelector } from "react-redux";
export default function UserFormUpdate(props) {
  const shownUpdate = useSelector((item) => item.adminReducer.users);

  const show = shownUpdate.filter((item) => {
    return item._id === props.id;
  });
  const [formValues, setForm] = useState(null);

  const saveValues = {
    userName: show[0].userName,
    password: show[0].password,
    email: show[0].email,
    phoneNumber: show[0].phoneNumber,
    role: show[0].role,
    fullName: show[0].fullName,
  };
  useEffect(() => {
    setForm(saveValues);
  }, []);

  const initialValues = {
    userName: "",
    password: "",
    email: "",
    phoneNumber: "",
    role: "",
    fullName: "",
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formValues || initialValues,
    onSubmit: async (values) => {
      try {
        const data = await updateUser(props.id, values);
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
              <h5 className="button">Cập nhật Người Dùng</h5>
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
                    <option value={show[0].role}>{show[0].role}</option>
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
