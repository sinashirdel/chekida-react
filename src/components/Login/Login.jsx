import React from "react";
import { useAuth } from "../Context/AuthProvider";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";

const initialValues = {
  name: "",
  phoneNumber: "",
};

const Login = () => {
  const { login } = useAuth();

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

  const handleGoogleLogin = async () => {
    try {
      // Initialize Google OAuth
      const client = window.google.accounts.oauth2.initTokenClient({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID, // Use environment variable
        scope: "email profile",
        callback: async (response) => {
          if (response.access_token) {
            // Get user info using the access token
            const userInfo = await fetch(
              "https://www.googleapis.com/oauth2/v3/userinfo",
              {
                headers: { Authorization: `Bearer ${response.access_token}` },
              }
            ).then((res) => res.json());

            // Login with Google user info
            login(userInfo.name, null, userInfo.email, userInfo.sub);
          }
        },
      });

      client.requestAccessToken();
    } catch (error) {
      toast.error("خطا در ورود با گوگل", {
        style: {
          color: "white",
          backgroundColor: "#ef4444",
        },
        iconTheme: {
          primary: "white",
          secondary: "#ef4444",
        },
      });
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

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
            className="w-full btn btn-primary disabled:bg-gray-400 disabled:text-gray-600 disabled:border-gray-600 disabled:cursor-not-allowed mt-6"
          >
            ورود به چکیدا
          </button>
          <div className="relative flex items-center justify-center">
            <div className="border-t border-gray-300 w-full"></div>
            <span className="px-4 text-sm text-gray-500">یا</span>
            <div className="border-t border-gray-300 w-full"></div>
          </div>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full btn bg-white border-2 border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2 transition-all"
          >
            <FcGoogle size={20} />
            <span>ورود با گوگل</span>
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
