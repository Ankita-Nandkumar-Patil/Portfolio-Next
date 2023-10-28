import React from "react";
// import "./foot.css";

function Footer() {
  return (
    <>
    <div className="foot">
      <div className="head">
        <span>Contact Us</span>
        <h2 >Ways to connect with Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          incidunt corrupti ut nemo cupiditate iure dolores animi aspernatur
          voluptatum repellendus!
        </p>
      </div>
    </div>
    <div>
      <div className="details1">
        <div className="detail">
          <img src="./gmail.png" alt="" className="fimg" />
          <span>abc@gmail.com</span>
        </div>
        <div className="detail">
          <img src="./phone.png" alt="" className="fimg" />
          <span>+91 1234567890</span>
          </div>
        <div className="detail">
          <img src="./skype.png" alt="" className="fimg" />
            <span>abc_d</span>
        </div>
      </div>

      <div className="details2">
      <div className="detail">
        <img src="./twitter.png" alt="" className="fimg" />
        <span>@abcd</span>
      </div>
      <div className="detail">
        <img src="./site.png" alt="" className="fimg" />
        <span>ABCXYZ</span>
      </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
