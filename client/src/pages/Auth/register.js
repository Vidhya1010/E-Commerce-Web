import React,{useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import {toast} from 'react-toastify'
import "../../styles/AuthStyles.css"
const Register = () => {

  const[name,setName]=useState("");
    const[email,setEmail]=useState("");
      const[password,setPassword]=useState("");
        const[phone,setPhone]=useState("");
          const[address,setAddress]=useState("");
          const[answer,setAnswer]=useState("");
          const navigate =useNavigate()
          const handleSubmit=async (e)=>{
            e.preventDefault();
            try {
              const res=await axios.post('/api/v1/auth/register',
              {name,email,password,phone,address,answer});
              if(res.data.success){
                toast.success(res.data.message)
                navigate("/login");
              }else{
                toast.error(res.data.message)
              }
            } catch (error) {
              console.log(error)
              toast.error("Something went wrong")
            }
          
          }

  return (
    <Layout>
    <div className='form-container'>
    <form onClick={handleSubmit}>
     <h1 className='title'>REGISTER FORM</h1>
     <div className='mb-3'>
    
     <input
     type="text"
     value={name}
     onChange={(e)=>setName(e.target.value)}
     className='form-control'
     id="exampleInputEmail"
     placeholder='Enter your name'
       required
     />
    </div>
    <div className='mb-3'>
     
     <input
     type="email"
     value={email}
       onChange={(e)=>setEmail(e.target.value)}
     className='form-control'
     id="exampleInputEmail"
      placeholder='Enter your Email'
        required
     />
    </div>
    <div className='mb-3'>
    
     <input
     type="password"
     value={password}
       onChange={(e)=>setPassword(e.target.value)}
     className='form-control'
     id="exampleInputEmail"
      placeholder='Enter your password'
        required
     />
    </div>
    <div className='mb-3'>
     
     <input
     type=""
     value={phone}
       onChange={(e)=>setPhone(e.target.value)}
     className='form-control'
     id="exampleInputEmail"
      placeholder='Enter your phone'
        required
     />
    </div>
    <div className='mb-3'>
    
     <input
     type="text"
     value={address}
       onChange={(e)=>setAddress(e.target.value)}
     className='form-control'
     id="exampleInputEmail"
      placeholder='Enter your address'
      required
     />
    </div>
     <div className='mb-3'>
    
     <input
     type="text"
     value={answer}
       onChange={(e)=>setAnswer(e.target.value)}
     className='form-control'
     id="exampleInputEmail"
      placeholder='Enter your school'
      required
     />
    </div>
  <button type='submit' className='btn btn-primary'>
     REGISTER
  </button>
    </form>
    </div>
   
    </Layout>
  )
}

export default Register