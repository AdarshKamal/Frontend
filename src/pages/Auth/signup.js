import React, { useState } from "react";
import Layout from "../../components/Layout/Layout.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../css/signup_login.css"





const Signup = () => {
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [phone,setPhone]=useState("");
const [password,setPassword]=useState("");
const [answer,setAnswer]=useState("");
const navigate =useNavigate();

//form function 
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(name,
    email,
   password,
   phone,
   answer,
    )
  try {
    const res = await axios.post("/api/v1/auth/register", {
      name,
      email,
     password,
     phone,
     answer,
    
      

    });
    console.log(res.data);
    if (res && res.data.success) {
      toast.success(res.data && res.data.message);
     
      navigate("/login");
    } else {
      toast.error(res.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};






  return (
    <Layout title="Register- Ecommer App">
    <div className="form-container ">
      <form onSubmit={handleSubmit}>
        <h4 className="title">REGISTER FORM</h4>
        <div className="mb-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="exampleInputName"
            placeholder="Enter Your Name"
            required
            autoFocus
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email "
            required
          />
        </div>

       
       
        
        <div className="mb-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
            required
          />
        </div>

       
        <div className="mb-3">
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            id="exampleInputPhone"
            placeholder="Enter Your Phone"
            required
          />
        </div>
        
      
        <div className="mb-3">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="form-control"
            id="exampleInput"
            placeholder="what is your nickname?"
            required
          />
        </div>
        
        
        <button type="submit" className="btn btn-primary">
          REGISTER
        </button>

      </form>
    </div>
  </Layout>
  );
};

export default Signup