import React from "react";
import TopHeader from "../TopHeader";
import MainHeader from "../MainHeader";
import SmallScreenTopHeader from "../SmallScreenTopHeader";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { Redirect, Link } from "react-router-dom";
import * as Yup from "yup";
import "./style.css";
import { registerThunkAction } from "../../redux/actions/loginActions";

const registerSchema = Yup.object().shape({
  name: Yup.string().required("Required!"),
  email: Yup.string().email().required("Required!"),
  password: Yup.string().required("Required!"),
});

function Register(props) {
  const { registerLoading, isAuth, lists } = props;
  if (isAuth) {
    if (lists.length > 0) {
      return <Redirect to="/tasks-dashboard" />;
    } else {
      return <Redirect to="/new-list" />;
    }
  }
  return (
    <div className="register">
      <TopHeader />
      <SmallScreenTopHeader />
      <MainHeader />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="register-lead">Sign up to save lists</h3>
            <h6 className="my-3">
              New to Flask.io?{" "}
              <Link to="/register">Sign up here to save your lists.</Link>
            </h6>

            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
              }}
              validationSchema={registerSchema}
              onSubmit={(values) => {
                props.registerThunkAction({
                  email: "eve.holt@reqres.in",
                  password: "pistol",
                });
              }}
            >
              {({ errors, touched }) => (
                <Form className="form-group register-form">
                  <label htmlFor="name">Name</label>
                  <Field name="name" type="name" className="form-control" />
                  {errors.name && touched.name ? (
                    <p className="form-error">{errors.name}</p>
                  ) : null}
                  <label htmlFor="email">Email</label>
                  <Field name="email" type="email" className="form-control" />
                  {errors.email && touched.email ? (
                    <p className="form-error">{errors.email}</p>
                  ) : null}
                  <label htmlFor="password" className="mt-3">
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                  />
                  {errors.password && touched.password ? (
                    <p className="form-error">{errors.password}</p>
                  ) : null}

                  <button
                    disabled={registerLoading}
                    className="my-3 btn btn-lg register-btn"
                    type="submit"
                  >
                    Register
                  </button>
                </Form>
              )}
            </Formik>
            <Link to="login">Log in</Link>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    registerLoading: state.loginReducer.registerLoading,
    isAuth: state.loginReducer.isAuth,
    lists: state.listReducer.lists,
  };
};

export default connect(mapStateToProps, { registerThunkAction })(Register);
