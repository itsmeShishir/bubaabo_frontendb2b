import {Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={"Login"}/>
        <Route path="/register" element={"Register"}/>
        <Route path="/forget-password" element={"ForgetPassword"}/>
        <Route path="*" element={"404 Error Pages"}/>
        <Route path="/home">
            <Route index element={"Main Page"}/>
            <Route path="dashboard" element={"Home Page"}/>
            <Route path="my-service-requests" element={"My Service Request Page"}/>
            <Route path="loan-services" element={"loan-services"}>
              <Route path="all-Banks" element={"All Banks"}/>
            </Route>
            <Route path="earnings" element={"my Earnings"}/>
            <Route path="support" element={"Support"}/>
            <Route path="video-guide" element={"Video Guide"}/>
            <Route path="my-details" element={"my Detials"}/>
            <Route path="change-password" element={"Change Password"}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
