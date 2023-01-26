import { useState } from "react";
import "./App.css";
import DashBoard from "./Pages/MyAccount/DashBoard";
import Home from "./Pages/Home";
import Vehicles from "./Pages/Vehicles";
import MyAccount from "./Pages/MyAccount";
import ContactUs from "./Pages/ContactUs";
import ProductDetals from "./Pages/ProductD";
import Faqs from "./Pages/Faqs";
import AboutUs from "./Pages/AboutUs";
import Error from "./Pages/Error";
import SignUp from "./Pages/MyAccount/SignUp";
import SignIn from "./Pages/MyAccount/SignIn";
import HeaderSection from "./Components/HeaderSection/HeaderSection";
import Footer from "./Components/Home/Footer";

function App() {
  return (
    <div className="App">
      {/* <App2/> */}
      <Home />
      {/* <Vehicles/> */}
      {/* <DashBoard/> */}
      {/* <MyAccount/> */}
      {/* <ContactUs/> */}
      {/* <ProductDetails /> */}
      {/* <ProductDetals/> */}
      {/* <Faqs/> */}
      {/* <AboutUs/> */}
      {/* <Error /> */}
      {/* <SignUp /> */}
      {/* <SignIn/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
