import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  {registerUser} from '../actions/userActions'
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';

export default function Registerscreen() {
    const[name, setname]=useState("");
    const[email, setemail]=useState("");
    const[password, setpassword]=useState("");
    const[cpassword,setcpassword]=useState("");

    const registerstate = useSelector((state)=>state.registerUserReducer)
    const {error,loading,success} =registerstate;

   const dispatch = useDispatch()
    function register(){
        if(password!==cpassword)
        {
            alert("password not matched")
        }
        else{
            const user={
                name,//name:name
                email,//email:email
                password//password:password
            }
            console.log(user)
            dispatch(registerUser(user))
           
        }
    }
  return (
    <div>

      <div>
     
    <div className='row justify-content-center mt-5 '>
    {loading && (<Loading/>)}
      {error && (<Error error='Email already registerd'/>)}
      {success && (<Success success='user registerd succesfully'/>)}
     
        <h2 style={{fontSize:'20px'}} className='text-center'> Register</h2>
          <div className='col-md-5'>
            <input type='text' placeholder='Name' className='form-control' value={name} required onChange={(e)=>{setname(e.target.value)}}/>
            <input type='text' placeholder='Email' className='form-control' value={email} required onChange={(e)=>{setemail(e.target.value)}} />
            <input type='text' placeholder='Password' className='form-control'  value={password} required onChange={(e)=>{setpassword(e.target.value)}} />
            <input type='text' placeholder='Confirm password' className='form-control' value={cpassword} required onChange={(e)=>{setcpassword(e.target.value)}}/>
            <button className='btn-danger mt-3 ' onClick={register}> REGISTER</button><br></br>
            <a href='/login'>  Already an account <b>login</b></a>
          </div>

       </div>
      </div>
     

    </div>
  )
}
