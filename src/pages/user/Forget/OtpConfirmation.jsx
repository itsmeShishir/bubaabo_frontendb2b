import { Link } from "react-router-dom"

const OtpConfirmation= () => {
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
          Enter OTP Pin
        </h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Mobile Number"
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-center">
            <Link to="/forgot-password/change-password"
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Verify
            </Link>
          </div>
        </form>
        </div>
        
      </div>
    </div>
  )
}

export default OtpConfirmation;

