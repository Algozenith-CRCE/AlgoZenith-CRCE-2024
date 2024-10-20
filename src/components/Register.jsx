import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
// import {app} from '../firebase';
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Register.css'; 


function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    rollNumber: '',
    year: '',
    branch:''
  });


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    const notifySuccess = () => toast.success('Registration Successful!', {
      position:"bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });;
  
    const notifyFailure = () => toast.error('Please Complete All The Fields', {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

    if(formData.name==='' || formData.email==='' || formData.phoneNumber==='' || formData.rollNumber==='' || formData.year==='' || formData.branch==='')
    {
      // alert("Some fields are incomplete");
      notifyFailure();
    }
    else{
      try{
        /*eslint-disable*/ 
        const docRef = addDoc(collection(db,"techVista"), 
        /*eslint-enable*/ 
        {
              name:formData.name,
              email:formData.email,
              phoneNumber:formData.phoneNumber,
              rollNumber:formData.rollNumber,
              year:formData.year,
              branch:formData.branch,
            
        });
            notifySuccess();
            setFormData({
              name: '',
              email: '',
              phoneNumber: '',
              rollNumber: '',
              year: '',
              branch:''
            });
        } catch(e)
        {
          console.log("Couldnt store data")
          alert('Couldnt store data')
        }
        };
  }  

  return (
      <div className="register-form-container" id='contact'>
        <Zoom>
          <h2 className="center events-title">Register</h2>
          <form className="form" onSubmit={handleSubmit}>
            <Zoom>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={(event)=>setFormData((prev) => ({...prev, name: event.target.value}))}
                className="i-field"
              />
              <div className="inline-fields">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(event)=>setFormData((prev) => ({...prev, email: event.target.value}))}
                  className="i-field"
                />
                <input
                  type="number"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={(event)=>setFormData((prev) => ({...prev, phoneNumber: event.target.value}))}
                  className="i-field"
                />
              </div>
              <div className="inline-fields">
                <input
                  type="number"
                  name="rollNumber"
                  placeholder="Roll No.(4-digit)"
                  value={formData.rollNumber}
                  onChange={(event)=>setFormData((prev) => ({...prev, rollNumber: event.target.value}))}
                  className="i-field"
                />
                
                <select name="year" id="year" className='s-field' value={formData.year} onChange={(event)=>setFormData((prev) => ({...prev, year: event.target.value}))}>
                  <option disabled selected value="">Select a year</option>
                  <option value="FE">FE</option>
                  <option value="SE">SE</option>
                  <option value="TE">TE</option>
                  <option value="BE">BE</option>
                </select> 
                
                <select name="branch" id="branch" className='s-field' value={formData.branch} onChange={(event)=>setFormData((prev) => ({...prev, branch: event.target.value}))}>
                  <option disabled selected value="">Select a Branch</option>
                  <option value="ComputerA">Computer A</option>
                  <option value="ComputerB">Computer B</option>
                  <option value="AIDS">AI-DS</option>
                  <option value="ECS">ECS</option>
                  <option value="Mechanical">Mechanical</option>
                </select>
              </div>
              <button type="submit" className="sub-button" >Submit</button>
            </Zoom>
          </form>
        </Zoom>
        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      </div>
  );
}

export default Register;
