"use client"


import React from "react";

import { jsPDF } from "jspdf";

function Portfolio() {
  const jspdf = new jsPDF("p", "pt", "letter");

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = e.target.txt.value;

    const data = {
      callback: function (jspdf) {
        jspdf.save("demo.pdf");
      },
      margin: [10, 10, 10, 10],
      autoPaging:"text",
    };
    jspdf.html(val, data);
  };

  return (
    <>
      <div>portfolio</div>

      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <textarea name="txt"></textarea>


        
        <button>Download Portfolio</button>
      </form>
    </>
  );
}

export default Portfolio;

