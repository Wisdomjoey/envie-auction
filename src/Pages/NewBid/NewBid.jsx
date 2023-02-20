import { useContext, useState } from "react";
import HeaderSection from "../../Components/HeaderSection/HeaderSection";
import Footer from "../../Components/Home/Footer";
import styled from "styled-components";
// import Footer from "../Home/Footer";
import "./NewBid.css";
import { AttachFile } from "@mui/icons-material";
import Spinner from "../../Components/utils/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { createAuction, getAllAuctions } from "../../Firebase Actions/auctionActions";
import { setauctions } from "../../redux/reducers/auctionSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router";
// import storage from "../../firebase";
// import { createMovie } from "../../context/movieContext/apiCalls";
// import { MovieContext } from "../../context/movieContext/MovieContext";

const SignUpInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const SignUpInputCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
  flex: 1;
  background: white;
  padding: 0 30px;
  height: 60px;
  color: grey;
  margin: 25px 0;
`;
const SignUpInputCon1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
  flex: 1;
  background: white;
  padding: 20px 30px;
  color: grey;
  margin: 25px 0;

  textarea {
    outline: none;
  border: none;
  height: 100%;
  width: 100%;
  flex: 1;
  margin-left: 10px;

  &::placeholder {
    font-size: 17px;
  }
  }
`;
const SignUpInput = styled.input`
  outline: none;
  border: none;
  height: 100%;
  width: 100%;
  flex: 1;
  margin-left: 10px;

  &::placeholder {
    font-size: 17px;
  }
`;
const SubmitCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Submit = styled.button`
  background: linear-gradient(2deg, #3da9f5 0%, #683df5 100%);
  box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
  border: none;
  color: white;
  padding: 15px 50px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  margin-top:20px;
`;

export default function NewBid() {
  const [userdata, setdata] = useState({});
  const [isLoading, setloading] = useState(false);
  const { loading, signed } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  useEffect(() => {
    if(!loading) {
      if(!signed) {
        navigate('/login');
      }
    }
  })

  const handleChange = (e) => {
    e.preventDefault();
    setdata({
      ...userdata,
      [e.target.name]: e.target.value,
    });

    // console.log(userdata.file.name);
  }

  const handleUpload = async (e) => {
    e.preventDefault();
    let list = ['', undefined];

    if (list.includes(userdata?.name) || list.includes(userdata?.description) || list.includes(userdata?.price) || list.includes(userdata?.instant) || list.includes(userdata?.days) || list.includes(userdata?.file)) {
      alert.error(<p style={{ textTransform: 'none' }}>Field should not be empty</p>);
    } else {
      var valid = true;

      for (let index = 0; index < userdata.file.length; index++) {
        if (!userdata.file[index].type.includes('image')) {
          valid = false;
          break;
        }
      }

      if (valid) {
        setloading(true);

        const date = Date.now() + (Math.round(parseInt(userdata.days)) * 24 * 60 * 60 * 1000);

        await createAuction(userdata.name, userdata.description, userdata.price, userdata.instant, date, userdata.file, user.id).then(async (value) => {
          if (value.status) {
            await getAllAuctions().then((value) => {
              if (value.status) {
                dispatch(setauctions(value.result));
                alert.success(<p style={{ textTransform: 'none' }}>Auction created Successfully</p>);
              } else {
                console.log(value.result);
              }
            })
          } else {
            console.log(value.result);
          }
        });

        setloading(false);
      } else {
        alert.error(<p style={{ textTransform: 'none' }}>Please upload only images</p>);
      }
    }
  };
  window.scrollTo(0, 0);

  return (
    <>
      <Spinner show={loading || isLoading} />
            <div className="container">
              <HeaderSection
                SingleRoute={false}
                Page="MyAccount"
                CurrentPage="Create"
              />
              <div className="newProduct">
                <h1 className="addProductTitle">New Bid</h1>
                <form className="addProductForm" method="post">
                  <SignUpInputCon>
                    <SignUpInput placeholder="Name" type="text" name="name" onChange={(e) => handleChange(e)} />
                  </SignUpInputCon>
                  <SignUpInputCon1>
                    <textarea placeholder="Description" rows={10} name="description" onChange={(e) => handleChange(e)} />
                  </SignUpInputCon1>
                  <SignUpInputGroup>
                    <SignUpInputCon>
                      <SignUpInput placeholder="Startup Price" type='number' name="price" onChange={(e) => handleChange(e)} />
                    </SignUpInputCon>
                    <SignUpInputCon>
                      <SignUpInput placeholder="Instant Price" type="number" name="instant" onChange={(e) => handleChange(e)} />
                    </SignUpInputCon>
                  </SignUpInputGroup>
                  <p>Add images for this auction</p>
                  <SignUpInputGroup>
                    <SignUpInputCon>
                      <AttachFile />
                      <SignUpInput placeholder="Images" type="file" multiple accept="image/*" name="file" onChange={(e) => setdata({ ...userdata, [e.target.name]: e.target.files })} />
                    </SignUpInputCon>
                    <SignUpInputCon>
                      <SignUpInput placeholder="End time (days)" type="number" name="days" onChange={(e) => handleChange(e)} />
                    </SignUpInputCon>
                  </SignUpInputGroup>
                  <SubmitCon>
                    {/* <Submit onClick={(e) => { e.preventDefault(); alert.success(<p style={{textTransform: 'none'}}>registration successfull</p>);}}>Register</Submit> */}
                    <Submit onClick={(e) => handleUpload(e)}>Submit</Submit>
                  </SubmitCon>
                  {/* <div className="addProductItem">
            <label>Image</label>
            <input
              type="file"
              id="img"
              name="img"
              // onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
          <div className="addProductItem">
            <label>Thumbnail image</label>
            <input
              type="file"
              id="imgSm"
              name="imgSm"
              onChange={(e) => setImgSm(e.target.files[0])}
            />
          </div>
          <div className="addProductItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="John Wick"
              name="title"
              // onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Description</label>
            <input
              type="text"
              placeholder="description"
              name="desc"
              // onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Price</label>
            <input
              type="number"
              placeholder="starting price"
              name="year"
              // onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>starting bid</label>
            <input
              type="text"
              placeholder="starting bid"
              name="genre"
              // onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Bid duration</label>
            <input
              type="text"
              placeholder="bid duration"
              name="duration"
              // onChange={handleChange}
            />
          </div> */}
                  {/* <div className="addProductItem">
            <label>Is Series?</label> */}
                  {/* <select
              name="isSeries"
              id="isSeries"
              //   onChange={handleChange}
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div> */}
                  {/* <div className="addProductItem">
            <label>Trailer</label>
            <input
              type="file"
              name="trailer"
              // onChange={(e) => setTrailer(e.target.files[0])}
            />
          </div>
          <div className="addProductItem">
            <label>Video</label>
            <input
              type="file"
              name="video"
              // onChange={(e) => setVideo(e.target.files[0])}
            />
          </div> */}
                </form>
                {/* <div className="addProductButtonCon">
          {uploaded === 5 ? (
            <button
              className="addProductButton"
              // onClick={handleSubmit}
            >
              Create
            </button>
          ) : (
            <button
              className="addProductButton"
              // onClick={handleUpload}
            >
              Upload
            </button>
          )}
        </div> */}
              </div>
              <Footer />
            </div>
    </>
  );
}
