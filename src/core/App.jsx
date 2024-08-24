import {Routes, Route } from "react-router-dom"
import ErrorPage from "../pages/Error/Error"
import LoginPage from "../pages/user/Login"
import ForgotPassword from "../pages/user/Forget/Forget"
import Register from "../pages/user/Register"
import Dashboard from "../pages/admin/Dashboard"
import ServiceRequest from "../pages/admin/serviceRequest/ServiceRequest"
import SupportPage from "../pages/admin/support/Support"
import Earnings from "../pages/admin/myearning/Earning"
import DashSummary from "../pages/admin/Dash"
import Profile from "../pages/admin/other/UserDetails"
import Services from "../pages/admin/services/Services"
import LoanServices from "../pages/admin/services/loan/LoanServices"
import BankLoanService from "../pages/admin/services/loan/BankLoanService"
import InfoLoanDetails from "../pages/admin/services/loan/InfoLoanDetails"
import Guide from "../pages/admin/videoguide/Guide"
import UpdateProfile from "../pages/admin/other/updateProfile"
import EducationLoanForm from "../pages/admin/services/loan/EducationLoanForm"
import OtpConfirmation from "../pages/user/Forget/OtpConfirmation"
import UpdatePassword from "../pages/admin/other/UpdatePassword"
import ChangePassword from "../pages/user/Forget/ChangePassword"
import Withdraw from "../pages/admin/myearning/withdraw"

const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" >
        <Route index element={<ForgotPassword />}/>
        <Route path="otp-confirmation" element={<OtpConfirmation />}/>
        <Route path="change-password" element={<ChangePassword />}/>
      </Route>
      <Route path="*" element={<ErrorPage />} />
      {/* admin Panel Side */}
      <Route path="/admin" element={<Dashboard />}>
        <Route index element={<DashSummary />} />
        <Route path="my-service-requests" element={<ServiceRequest />} />
        <Route path="loan-services" element={<Services />}>
          <Route index element={<LoanServices />} />
          <Route path="education-loan">
            <Route index element={<BankLoanService />} />
            <Route path="bank-loan" >
              <Route index element={<InfoLoanDetails />}/>
              <Route path="loan-form" element={<EducationLoanForm />}/>
            </Route>
          </Route>
        </Route>
        <Route path="earnings" element={<Earnings />} />
        <Route path="withdraw" element={<Withdraw />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="video-guide" element={<Guide />} />
        <Route path="my-details">
          <Route index element={<Profile />} />
          <Route path="updateProfile" element={<UpdateProfile />} />
        </Route>
        <Route path="update-password" element={<UpdatePassword /> } />
        
      </Route>
    </Routes>
    </>
  )
}

export default App
