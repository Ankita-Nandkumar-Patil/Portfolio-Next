"use client"
/*
this is the client component which i am using 
-> to get data from user 
-> make api request to the backend 
-> put/get data to/from the backend
*/

// import Link from "next/link"
// import React ,{useEffect} from "react"
// import { useRouter } from "next/navigation"
// import axios from "axios"


// export default function Signup() {

//   const router = useRouter();

//   const [user, setUser] = React.useState({
//     email:"",
//     password:"",
//     username:"",
//   })

//   const [buttonDisabled, setButtonDisabled] = React.useState(false)
//   const [loading, setLoading] = React.useState(false);

//   const onSignup = async()=>{
//     try {
//       setLoading(true)
//       const response = await axios.post("/api/users/signup", user)
//       console.log("Signup Successful", response.data);
//       router.push("/login")
      
//     } catch (error:any) {
//       console.log("signup failed", error.message);
      
//     }finally{
//       setLoading(false)
//     }
//   }

//   useEffect(()=>{
//     if(user.email.length >0 && user.password.length > 0 &&user.username.length >0){
//       setButtonDisabled(false);
//     }else{
//       setButtonDisabled(true)
//     }
//   },[user])  


//   return (
//     <div className="center">
//     <div>{loading ?"Processing" : " Signup"}</div>

//     <label htmlFor="username">username</label>
//     <input type="text" 
//     id="username"
//     value={user.username}
//     onChange={(e)=>
//     setUser({...user, username:e.target.value })}
//     placeholder="userName"
//     />


// <label htmlFor="email">email</label>
//     <input type="text" 
//     id="email"
//     value={user.email}
//     onChange={(e)=>
//     setUser({...user, email:e.target.value })}
//     placeholder="email"
//     />


// <label htmlFor="password">password</label>
//     <input type="text" 
//     id="password"
//     value={user.password}
//     onChange={(e)=>
//     setUser({...user, password:e.target.value })}
//     placeholder="password"
//     />

//     <button onClick={onSignup}>{buttonDisabled ? "NO signup" : "Signup"}</button>   
//     {/* want to link, contact form to this button.
//     i.e. after registration the control will go to contact form page.! */}

// <Link href={"/login"}>Visit Login</Link>
//     </div>
//   )
// }



"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";




export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");
            
        } catch (error:any) {
            console.log("Signup failed", error.message);
            
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    return (
    <><div className="center">
        <h1>{loading ? "Processing" : "Signup"}</h1>
        
        <label htmlFor="username">username</label>
        <input

          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username" />
        <label htmlFor="email">email</label>
        <input

          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email" />
        <label htmlFor="password">password</label>
        <input

          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password" />
        <button
            onClick={onSignup}>
            {buttonDisabled ? "No signup" : "Signup"}</button>
            <Link href="/login">Visit login page</Link>
        </div>
        </>
    )

}