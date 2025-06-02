import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mt-4">
          صفحه مورد نظر یافت نشد
        </h2>
        <p className="text-gray-500 mt-2">
          متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد.
        </p>
        <Link to="/" className="mt-6 inline-block btn btn-primary">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
