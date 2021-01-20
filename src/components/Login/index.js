import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./style.css";
import TopHeader from "../TopHeader";
import MainHeader from "../MainHeader";

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required("Required!"),
  password: Yup.string().required("Required!"),
});

function index(props) {
  return (
    <div className="login">
      <TopHeader />
      <MainHeader />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="lead">Log in to save and access your lists</h3>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </div>
  );
}

export default index;
