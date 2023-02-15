import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Vehicles from "./Pages/Vehicles";
import MyAccount from "./Pages/MyAccount";
import ContactUs from "./Pages/ContactUs";
import ProductDetals from "./Pages/ProductD";
import Faqs from "./Pages/Faqs";
import AboutUs from "./Pages/AboutUs";
import Error from "./Pages/Error";
import SignUp from "./Pages/MyAccount/SignUp";
import SignIn from "./Pages/MyAccount/SignIn";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, auth } from "./firebase";
import { useDispatch } from "react-redux";
import { setloading, setsigned, setuser } from './redux/reducers/authSlice';
import DashBoard from "./Components/DashBoard/DashBoard";

function App() {
  // const dispatch = useDispatch();
  // dispatch(setloading(true));

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     dispatch(setuser(user));
  //     dispatch(setsigned(true));
  //   } else {
  //     dispatch(setuser({}));
  //     dispatch(setsigned(false));
  //   }
  //   dispatch(setloading(false));
  // });

  return (
    <div className="App">
      {/* <App2/> */}
      {/* <Home /> */}
      {/* <Vehicles /> */}
      {/* <DashBoard /> */}
      {/* <MyAccount /> */}
      {/* <ContactUs /> */}
      {/* <ProductDetals /> */}
      {/* <Faqs /> */}
      {/* <AboutUs /> */}
      {/* <Error /> */}
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      {/* <Footer /> */}
      <Router>
        <Routes>
          <Route
            element={ <MyAccount /> }
            path='/account'
          />
          <Route
            element={ <SignIn /> }
            path='/login'
          />
          <Route
            element={ <SignUp /> }
            path='/register'
          />
          <Route
            element={ <ProductDetals /> }
            path='/item-details'
          />
          <Route
            element={ <ContactUs /> }
            path='/contact'
          />
          <Route
            element={ <AboutUs /> }
            path='/about'
          />
          <Route
            element={ <Faqs /> }
            path='/faq'
          />
          <Route
            element={ <Vehicles /> }
            path='/item'
          />
          <Route
            element={ <Home /> }
            path='/'
          />
          <Route
            element={ <Error /> }
            path='*'
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
