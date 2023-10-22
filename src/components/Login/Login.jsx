import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  phoneNumber: "",
};

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("نام خود را وارد کنید")
      .min(3, "نام شما باید حداقل شامل 3 حرف باشد")
      .max(10, "نام شما باید حداکثر شامل 10 حرف باشد"),
    phoneNumber: Yup.string()
      .required("شماره همراه خود را وارد کنید")
      .matches(/^[0-9]+$/, "شماره همراه باید فقط شامل اعداد باشد")
      .min(11, "تعداد رقم شماره همراه باید 11 رقم باشد")
      .max(11, "تعداد رقم شماره همراه باید 11 رقم باشد"),
  });

  const onSubmit = (values) => {
    if (values.name && values.phoneNumber) {
      login(values.name, values.phoneNumber);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });


  useEffect(() => {
    if (isAuthenticated) {
      toast.success("شما با موفقیت وارد حساب کاربری شدید", {
        style: {
          color: "white",
          backgroundColor: "#10b981",
        },
        iconTheme: {
          primary: "white",
          secondary: "#10b981",
        },
      });
      navigate(
        `${location.state === `${location.state}` ? `${location.state}` : "/"}`
      );
    }
  }, [isAuthenticated, navigate]);
;
  return (
    <div>
      <div className="container relative mt-28 mb-36 w-full px-8 flex flex-col gap-6 justify-between items-center max-w-[400px]">
        {formik.errors.name && formik.touched.name && (
          <span className="top-[-90px] absolute right-8 bg-red-600 rounded-lg p-2 text-sm text-gray-50">
            {formik.errors.name}
          </span>
        )}
        {formik.errors.phoneNumber && formik.touched.phoneNumber && (
          <span className="top-[-50px] absolute right-8 bg-red-600 rounded-lg p-2 text-sm text-gray-50">
            {formik.errors.phoneNumber}
          </span>
        )}
        <h1 className="w-full text-start text-3xl font-semibold">
          ورود / ثبت نام
        </h1>
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={formik.handleSubmit}
        >
          <div className="w-full">
            <label className="text-sm text-gray-400 font-light">
              نام کاربر
            </label>
            <input
              className="w-full border-2 border-gray-900 text-left p-2 bg-gray-100 rounded-lg text-sm font-medium mt-2 focus:border-emerald-400 focus:outline focus:outline-4 focus:outline-emerald-400/20 transition-all"
              type="text"
              name="name"
              autoComplete="no"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </div>
          <div className="w-full">
            <label className="text-sm text-gray-400 font-light">
              شماره همراه
            </label>
            <input
              className="w-full border-2 border-gray-900 text-left p-2 bg-gray-100 rounded-lg text-sm font-medium mt-2 focus:border-emerald-400 focus:outline focus:outline-4 focus:outline-emerald-400/20 transition-all"
              type="tel"
              name="phoneNumber"
              autoComplete="no"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
          </div>
          <button
            disabled={!formik.isValid}
            className="w-full btn btn-primary disabled:hover:bg-red-600 disabled:hover:text-white disabled:hover:border-red-600"
          >
            ورود به چکیدا
          </button>
          <p className="text-xs text-center text-gray-400 font-light">
            با ورود یا ثبت‌نام در چکیدا شما به‌طور خودکار تمام قوانین و مقررات
            استفاده از این سرویس رو قبول می‌کنید!
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
