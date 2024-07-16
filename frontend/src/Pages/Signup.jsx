import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { TiUpload } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { MdErrorOutline } from "react-icons/md";
import { Email } from "../redux/slice/fetchEmail";
const Signup = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [imageURL, setImageURL] = useState();
  const [cnfPassword, setCnfPassword] = useState();
  const [password, setPassword] = useState();
  const [proEmail, setEmail] = useState("");
   let email = proEmail.toLowerCase();
  const [file, setFile] = useState(false);
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formErr, setFormErr] = useState(false);

  //fetchemail
  const response = useSelector((state) => state.email.emailExist);
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  console.log(response, "response");
  //Image
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profile", file);
    axios
      .post("https://home-rental-backend-knmc.onrender.com/uploadProfile", formData)
      .then((res) => setImageURL(res.data.image_url))
      .catch((err) => console.log(err));

    dispatch(Email({ email }));
    setFormErr(true);
    let image = imageURL;

    if (password === cnfPassword && response === false) {
      axios
        .post("https://home-rental-backend-knmc.onrender.com/signup", {
          firstName,
          lastName,
          email,
          password,
          image,
        })
        .then((success) => {
          console.log(success);
          alert("Sign Up Successfully");
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setErr("Password does'nt match");
    }
  };

  return (
    <div className="flex justify-center  items-center bg-signupBanner h-screen bg-cover bg-bottom bg-no-repeat">
      <div className="flex rounded-lg flex-col bg-black bg-opacity-75  w-[500px] ml-[700px] px-10 text-white items-center pt-8 phones:mx-2">
        <h2 className="text-white font-bold tracking-wider">SIGN UP</h2>
        <input
          className="outline-none px-2 py-1 bg-transparent border-white  mt-3 w-full border-[1px] rounded-sm"
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        {formErr === true ? (
          firstName === undefined || firstName === "" ? (
            <div className="flex w-full  justify-center items-center text-center  gap-2 text-white bg-red-600 px-6 phones:text-sm">
              <MdErrorOutline className="text-xl" />
              <span className="font-sans "> First Name is Required!</span>
            </div>
          ) : (
            ""
          )
        ) : (
          "  "
        )}
        <input
          className="outline-none  w-full px-2 py-1 bg-transparent border-white my-2 border-[1px] rounded-sm"
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        {formErr === true ? (
          lastName === undefined || lastName === "" ? (
            <div className="flex w-full  justify-center items-center text-center  gap-2 text-white bg-red-600 px-6 phones:text-sm">
              <MdErrorOutline className="text-xl" />
              <span className="font-sans "> Last Name is Required!</span>
            </div>
          ) : (
            ""
          )
        ) : (
          "  "
        )}
        <input
          className="outline-none  w-full px-2 py-1 bg-transparent border-white mt-2 border-[1px] rounded-sm lowercase"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {response === true ? (
          <div className="flex  justify-center items-center text-center w-full gap-2 text-white bg-red-600    mb-2">
            <MdErrorOutline className="text-xl " />
            <span className="font-sans  "> Email Already Exist!</span>
          </div>
        ) : formErr === true ? (
          re.test(email) === false ? (
            <div className="flex  justify-center items-center text-center w-full gap-2 text-white bg-red-600    mb-2 phones:text-sm">
              <MdErrorOutline className="text-xl " />
              <span className="font-sans  ">Invalid Email!</span>
            </div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {formErr === true ? (
          email === undefined || email === "" ? (
            <div className="flex w-full  justify-center items-center text-center  gap-2 text-white bg-red-600 px-6 ">
              <MdErrorOutline className="text-xl phones:text-sm" />
              <span className="font-sans "> Email is Required!</span>
            </div>
          ) : (
            ""
          )
        ) : (
          "  "
        )}
        <input
          className="outline-none  w-full px-2 py-1 bg-transparent border-white my-2 mt-4 border-[1px] rounded-sm"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {formErr === true ? (
          password === undefined || password === "" ? (
            <div className="flex w-full  justify-center items-center text-center  gap-2 text-white bg-red-600 px-6 phones:text-sm">
              <MdErrorOutline className="text-xl" />
              <span className="font-sans "> Password is Required!</span>
            </div>
          ) : (
            ""
          )
        ) : (
          "  "
        )}

        <input
          className="outline-none  w-full px-2 py-1 bg-transparent border-white my-2 border-[1px] rounded-sm"
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setCnfPassword(e.target.value)}
        />
        <span className="text-xs mb-2 bg-red-600 px-1">{err}</span>

        {formErr === true ? (
          lastName === undefined || lastName === "" ? (
            <div className="flex w-full  justify-center items-center text-center  gap-2 text-white bg-red-600 px-6 phones:text-sm">
              <MdErrorOutline className="text-xl" />
              <span className="font-sans "> Confirm Password is Required!</span>
            </div>
          ) : (
            ""
          )
        ) : (
          "  "
        )}
        <div className="flex flex-row items-center   px-1 py-2 mt-2 ">
          <div className="ml-[90px] items-center text-center flex flex-col ">
            <TiUpload className="text-3xl" />
            <span className="text-xs w-[80px] text-center text-wrap">
              Upload Profile Photo
            </span>
          </div>
          <img
            src={file ? URL.createObjectURL(file) : ""}
            className="h-[78px] w-[88px] left-[-85px] relative object-cover object-top "
          />
        </div>
        <button
          onClick={handleSignup}
          className="bg-purple-400  my-3 px-16 tracking-wider py-2 rounded-md hover:text-black hover:bg-white"
        >
          REGISTER
        </button>
        <span className="text-xs  font-light tracking-widest">
          Already have an account? <NavLink to="/login"> Log in Here</NavLink>
        </span>
        <input
          className="w-[90px] h-[77px] relative overflow-hidden top-[-165px] opacity-0   z-10 bg-white phones:top-[-180px] phones:left-5"
          type="file"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default Signup;
