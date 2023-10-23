import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useAuth } from "../Context/AuthProvider";

const EditProfile = ({ setEditProfileBox }) => {
  const { name, phoneNumber, editProfile } = useAuth();
  const [editUser, setEditUser] = useState({
    editName: `${name}`,
    editPhoneNumber: `${phoneNumber}`,
  });


  const handleEditUser = (e) => {
    setEditUser({ ...editUser, [e.target.name]: [e.target.value] });
  };

  const submitEdit = () => {
    editProfile(editUser.editName, editUser.editPhoneNumber);
    setEditProfileBox(false);
  };
  return (
    <div className="backdrop">
      <div className="container my-32 sm:w-2/3 md:w-1/2 lg:w-1/3">
        <div className="bg-white p-3 rounded-xl">
          <div className="flex justify-between items-center">
            <h5 className="font-semibold">ویرایش پروفایل</h5>
            <IoClose
              onClick={() => setEditProfileBox(false)}
              className="text-gray-500 cursor-pointer"
              size={20}
            />
          </div>
          <form className="my-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label>نام کاربر</label>
              <input
                type="text"
                name="editName"
                value={editUser.editName}
                onChange={handleEditUser}
                className="border-2 border-gray-200 outline-none p-3 rounded-xl w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>شماره همراه</label>
              <input
                type="tel"
                name="editPhoneNumber"
                value={editUser.editPhoneNumber}
                onChange={handleEditUser}
                className="border-2 border-gray-200 outline-none p-3 rounded-xl w-full"
              />
            </div>
          </form>
          <div>
            <button className="w-full btn btn-primary text-lg" onClick={submitEdit}>
              ثبت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
