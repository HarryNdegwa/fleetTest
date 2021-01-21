import React from "react";
import { Formik, Form, Field } from "formik";
import { Redirect } from "react-router-dom";
import * as Yup from "yup";
import "./style.css";
import TopHeader from "../TopHeader";
import MainHeader from "../MainHeader";
import SmallScreenTopHeader from "../SmallScreenTopHeader";
import { connect } from "react-redux";
import { loginThunkAction } from "../../redux/actions/loginActions";

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required("Required!"),
  password: Yup.string().required("Required!"),
});

function Login(props) {
  const { loginLoading, isAuth } = props;
  if (isAuth) {
    return <Redirect to="/tasks-dashboard" />;
  }
  return (
    <div className="login">
      <TopHeader />
      <SmallScreenTopHeader />
      <MainHeader />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="login-lead">Log in to save and access your lists</h3>

            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={loginSchema}
              onSubmit={(values) => {
                props.loginThunkAction(values);
              }}
            >
              {({ errors, touched }) => (
                <Form className="form-group login-form">
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
                    disabled={loginLoading}
                    className="my-3 btn btn-lg login-btn"
                    type="submit"
                  >
                    Login
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loginLoading: state.loginReducer.loginLoading,
    isAuth: state.loginReducer.isAuth,
    loginError: state.loginReducer.loginError,
  };
};

export default connect(mapStateToProps, { loginThunkAction })(Login);
