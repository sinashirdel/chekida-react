import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      login(username, password);
    }
      else if(!username || !password) {
        toast.error("نام کاربری یا رمز عبور را صحیح وارد کنید", {
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
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  return (
    <div>
      <div className="container mt-24 mb-36 w-full px-8 flex flex-col gap-4 justify-between items-center max-w-[400px]">
        <h1 className="w-full text-start text-3xl font-semibold">
          ورود / ثبت نام
        </h1>
        <form
          className="w-full flex flex-col gap-6 mt-4"
          onSubmit={handleSubmit}
          action=""
        >
          <div className="w-full">
            <label className="text-sm text-gray-400 font-light">
              نام کاربری
            </label>
            <input
              className="w-full border-2 border-gray-900 text-left p-2 bg-gray-100 rounded-lg text-sm font-medium mt-2 focus:border-emerald-400 focus:outline focus:outline-4 focus:outline-emerald-400/20 transition-all"
              type="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="w-full">
            <label className="text-sm text-gray-400 font-light">رمز عبور</label>
            <input
              className="w-full border-2 border-gray-900 text-left p-2 bg-gray-100 rounded-lg text-sm font-medium mt-2 focus:border-emerald-400 focus:outline focus:outline-4 focus:outline-emerald-400/20 transition-all"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button className="w-full btn btn-primary">
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
