"use client"

import React from 'react'
import "./nav.css"
import Link from 'next/link'


function Navbar() {
  return (
    <>
    <div className="nav">
        <div className="part1">
            {/* <img src="./logo.png" alt="" /> */}
            <Link href={"/"}><h1>AP<span>.</span></h1></Link>
            
        </div>

        <div className="part2">
            <ul>
                <li>
                  <Link href={"/"}>Home</Link>
                  </li>
                <li><Link href={"/blogs"}>Blogs</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><Link href={"/portfolio"}>Portfolio</Link></li>
                <li><Link href={"/portfolio2"}>Portfolio2</Link></li>
            </ul>
            
        </div>

{/* <div className="part2">
  <Link href={"/"}>Home </Link>
  <Link href={"/blogs"}>Blogs</Link>
  <Link href={"/about"}>About</Link>
  <Link href={"/portfolio"}>Portfolio</Link>
</div> */}
        <div className="part3">
        <img src="https://www.svgrepo.com/show/439171/github.svg" alt="" />
        <img src="https://www.svgrepo.com/show/484206/mail.svg" alt="" />
        </div>
    </div>
    </>
  )
}

export default Navbar

