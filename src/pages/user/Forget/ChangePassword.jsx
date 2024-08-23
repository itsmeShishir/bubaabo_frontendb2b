import React from "react";
import { Link } from "react-router-dom"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const ChangePassword= () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = React.useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white pt-4 pb-4 rounded-lg shadow-lg  max-w-md w-full border-t-4 border-blue-500">
        <div className="flex justify-center mb-4 border-b-2 border-[#dfdfdf] ">
          <img
            src="https://b2b.bibaabo.com/assets/frontend/images/bibaabo_logo.png"
            alt="Bibaabo Logo"
            className="h-10 py-2"
          />
        </div>
        <div className="px-6">
          <h2 className="text-center text-lg font-semibold text-gray-700 mb-4">
          Conform Password
        </h2>
        <form>
          <div className="relative mb-2">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              New Password
            </label>
             <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center  leading-5 cursor-pointer text-blue-500 text-bold text-xl"
                aria-label={passwordVisible ? "Hide password" : "Show password"}
              >
                {passwordVisible ? <IoEyeOutline/> : <IoEyeOffOutline />}
              </span>
          </div>
          <div className="relative mb-2">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              New Password
            </label>
             <input
                type={confirmPasswordVisible ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <span
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center  leading-5 cursor-pointer text-blue-500 text-bold text-xl"
                aria-label={confirmPasswordVisible ? "Hide password" : "Show password"}
              >
                {confirmPasswordVisible ? <IoEyeOutline/> : <IoEyeOffOutline />}
              </span>
          </div>
          <div className="flex justify-center">
            <Link to="/"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Reset Password
            </Link>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword;

