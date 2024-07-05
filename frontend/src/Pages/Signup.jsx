import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TiUpload } from "react-icons/ti";
const Signup = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [imageURL, setImageURL] = useState();
  const [cnfPassword, setCnfPassword] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [file, setFile] = useState(false);
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const formData = new FormData();
  formData.append("file", file);
  axios
    .post("http://localhost:8800/uploadProfile", formData)
    .then((res) => setImageURL(res.data.image_url))
    .catch((err) => console.log(err));
  const handleSignup = (e) => {
    e.preventDefault();

    let image = imageURL;
    console.log(imageURL);
    if (password === cnfPassword) {
      console.log(imageURL);

      axios
        .post("http://localhost:8800/signup", {
          firstName,
          lastName,
          email,
          password,
          image,
        })
        .then((success) => {
          console.log(success);
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setErr("password does'nt match");
    }
  };

  return (
    <div className="flex justify-center  items-center bg-signupBanner h-screen bg-cover bg-bottom bg-no-repeat">
      <div className="flex rounded-lg flex-col bg-black bg-opacity-75  w-[500px] ml-[700px] px-10 text-white items-center pt-8">
        <h2 className="text-white font-bold tracking-wider">SIGN UP</h2>
        <input
          className="outline-none px-2 py-1 bg-transparent border-white  my-3 w-full border-[1px] rounded-sm"
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="outline-none  w-full px-2 py-1 bg-transparent border-white my-2 border-[1px] rounded-sm"
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className="outline-none  w-full px-2 py-1 bg-transparent border-white my-2 border-[1px] rounded-sm"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="outline-none  w-full px-2 py-1 bg-transparent border-white my-2 border-[1px] rounded-sm"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="text-xs mb-2 text-red-500">{err}</span>
        <input
          className="outline-none  w-full px-2 py-1 bg-transparent border-white my-2 border-[1px] rounded-sm"
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setCnfPassword(e.target.value)}
        />

        <div className="flex flex-row items-center   px-1 py-2 mt-2 ">
          <div className="ml-[90px] items-center text-center flex flex-col">
            <TiUpload className="text-3xl" />
            <span className="text-xs w-[80px] text-center text-wrap">
              Upload Profile Photo
            </span>
          </div>
          <img
            src={file ? URL.createObjectURL(file) : ""}
            className="h-[78px] w-[88px] left-[-85px] relative object-cover object-top"
          />
        </div>
        <button
          onClick={handleSignup}
          className="bg-purple-400  my-3 px-16 tracking-wider py-2 rounded-md hover:text-black hover:bg-white"
        >
          REGISTER
        </button>
        <span className="text-xs  font-light tracking-widest">
          Already have an account? Log in Here
        </span>
        <input
          className="w-[90px] h-[77px] relative overflow-hidden top-[-165px] opacity-0   z-10 bg-white"
          type="file"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default Signup;
