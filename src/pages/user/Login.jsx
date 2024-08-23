import React from "react";
import { Link } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

function LoginPage() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="min-h-screen flex items-center justify-center  bg-gray-100">
      <div className="bg-white pt-8 pb-8 rounded-lg shadow-lg max-w-sm w-full border-t-4 border-[#007bff]">
        <div className="flex justify-center mb-2 border-b-2 border-[#dfdfdf] py-2">
          <img src="https://b2b.bibaabo.com/assets/frontend/images/bibaabo_logo.png" alt="Logo" className="h-7" />
        </div>
        <h2 className="text-center text-md text-gray-700 mb-2">
          Sign in as Bibaabo Partner
        </h2>
        <div className="pr-8 pl-8">
          <form >
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Mobile Number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="relative mb-2">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
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
          <div className="flex items-center justify-between ">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-gray-700 text-sm">Remember Me</span>
            </label>
            <div className="">
            <Link to="/admin"
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Sign in
            </Link>
          </div>
          </div>
          
        </form>
        <div className="">
          <Link to="/forgot-password" className="text-blue-500 text-sm">
            I forgot my password.
          </Link>
        </div>
        <div className="mt-2">
          <Link to="/register" className="text-black text-sm">
            New to Bibaabo Partner? <span className="text-blue-500">Register</span> Now.
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
