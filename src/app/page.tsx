"use client";
// import "./globals.css"

// import Login from "./login/page";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState(true)
  return (
    <>

   

    {/* ****************** MAIN SECTION ************************ */}
      <div className="main">
        <div className="name">
          {/* <input type="checkbox" /> */}
          
 {/* Conditional rendering */}
          {name && <h2>
            Ankita <br /> Patil <span>.</span>
          </h2>}
          {/* <span>
            <hr />
          </span> */}
          <span>
            <Link href={"/signup"}>
            <button>contact me</button>
            </Link>
          </span>
        </div>


        <div className="heroImg">
          {/* <h1>Main page here : home</h1> */}
          <img src="./heroImg.png" alt="" />
        </div>


        <div className="introduction">
          <span>
            <h5>introduction</h5>
          </span>
          <h2>
            Front-end Developer, <br /> UI Designer
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque
            sequi dolorem eius perferendis voluptate! Quasi aperiam minus omnis
            officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, libero?
          </p>
        </div>
      </div>

          {/*  ******************** SERVICES SECTION *********************/}

          <div className="services">
            <div className="head">
              <span>services</span>
              <h2>what i am great at</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, incidunt corrupti ut nemo cupiditate iure dolores animi aspernatur voluptatum repellendus!</p>
            </div>

            <div className="cards">
              <div className="card">
                <img className="cardImg" src="./web.png" alt="" />
                <h4>Web Development</h4>
                <p>React | Angular</p>
                <Link href={"/web"}><img src="./link.png" alt="" className="fimg" /></Link>
              </div>
              <div className="card">
                <img src="./ui.png" alt="" className="cardImg" />
                <h4>UI Design</h4>
                <p>Figma</p>
                <img src="./link.png" alt="" className="fimg" />
              </div>
              <div className="card">
                <img src="./dapp.png" alt="" className="cardImg" />
                <h4>Blockchain</h4>
                <p>Dapp | IPFS </p>
                <img src="./link.png" alt="" className="fimg" />
              </div>
              <div className="card">
                <img src="./content.png" alt="" className="cardImg" />
                <h4>Content Writing</h4>
                <p>Tech | Life </p>
                <img src="./link.png" alt="" className="fimg" />
              </div>
            </div>
          </div>
    </>
  );
}
