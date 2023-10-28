"use client"
/*
this is the client component which i am using 
-> to get data from user 
-> make api request to the backend 
-> put/get data to/from the backend
*/

import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
import axios from "axios"


export default function Register() {
  const [user, setUser] = React.useState({
    email:"",
    password:"",
    // username:"",
  })

  const onLogin = async()=>{

  }


  return (
    <div className="center">
    <div>Register</div>



<label htmlFor="email">email</label>
    <input type="text" 
    id="email"
    value={user.email}
    onChange={(e)=>
    setUser({...user, email:e.target.value })}
    placeholder="email"
    />


<label htmlFor="password">password</label>
    <input type="text" 
    id="password"
    value={user.password}
    onChange={(e)=>
    setUser({...user, password:e.target.value })}
    placeholder="password"
    />

    <button onClick={onLogin}>Login</button>   
    {/* want to link, contact form to this button.
    i.e. after registration the control will go to contact form page.! */}
    <Link href={"/signup"}>visit Signup</Link>
    </div>
  )
}
