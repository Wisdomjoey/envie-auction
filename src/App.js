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
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { setloading, setsigned, setuser } from './redux/reducers/authSlice';
import { useEffect } from "react";
import { getAllAuctions } from "./Firebase Actions/auctionActions";
import { setauctions, setuserauctions } from "./redux/reducers/auctionSlice";
import { getAllUsers, getUser, getUserBids } from "./Firebase Actions/userActions";
import { setuserdata, setusers } from "./redux/reducers/userSlice";
import NewBid from "./Pages/NewBid/NewBid";
import { setuserbids } from "./redux/reducers/bidSlice";
import { useAlert } from "react-alert";

function App() {
  const dispatch = useDispatch();
  const alert = useAlert();
  dispatch(setloading(true));

  useEffect(() => {
  onAuthStateChanged(auth, async (user) => {
  dispatch(setloading(true));
    if (user) {
      dispatch(setuser({...user}));
      dispatch(setsigned(true));

      await getUser().then(async (value2) => {
                  if (value2.status) {
                    dispatch(setuserdata({ ...value2.result }));

                    await getAllAuctions().then(async (value) => {
        dispatch(setauctions(value.result));
        dispatch(setuserauctions(value.result.filter((item) => item.userId === user.uid)));

          await getAllUsers().then(async (value2) => {
            dispatch(setusers(value2.result));
                      await getUserBids(user.uid).then((value2) => {
                        if (value2.status) {
                          dispatch(setuserbids(value2.result));
                        }
                      })
          });
      });
                  } else {
          alert.error(<p style={{ textTransform: 'none' }}>An error occurred</p>);
                    console.log(value2.result);
                  }
                });
  dispatch(setloading(false));
    } else {
      dispatch(setuser({}));
      dispatch(setsigned(false));
      dispatch(setuserauctions([]));
      dispatch(setuserbids([]));

      await getAllAuctions().then(async (value) => {
        dispatch(setauctions(value.result));

        await getAllUsers().then((value2) => {
            dispatch(setusers(value2.result));
          });
      });
  dispatch(setloading(false));
    }
  dispatch(setloading(false));
  });
  });

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
            path='/item-details/:id'
          />
          <Route
            element={ <NewBid /> }
            path='/create-auction'
          />
          <Route
            element={ <Vehicles /> }
            path='/auctions'
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
