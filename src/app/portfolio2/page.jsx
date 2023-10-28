"use client"
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";
import { jspdf } from "jspdf";



function Portfolio2() {
  const downloadDoc = async() =>{
    const input = document.getElementById("portfolio");
    
    html2canvas(input).then((canvas)=>{
      const imgData = canvas.toDataURL("image.png");
      const pdf = new jspdf("p", "px", "letter");
      pdf.addImage(imgData, "JPEG", 10, 10, 10, 10, );
      
      pdf.save(`${"portfolio"}`);
    })
    
  }

  return (
    <>
      <div className="container">
        <h1>You can download my portfolio.</h1>
        <div className="portfolio">
          <img src="./heroImg.png" alt="" />

          <div className="part1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quis delectus magni doloremque et inventore dicta voluptates quam debitis fuga enim optio vitae cupiditate velit accusamus iusto ratione voluptatum veniam quisquam, sed, recusandae eius. Vero earum molestiae minima animi ad ipsam deserunt veritatis optio, tenetur beatae placeat blanditiis, voluptate corrupti eaque doloremque expedita ducimus suscipit ullam ratione unde? Unde similique architecto porro quisquam eum, minima nam? Pariatur fugiat corporis nostrum cupiditate ut magni unde. Nostrum facere blanditiis doloribus eum natus eius, cumque ab, ea aliquid repudiandae eaque odit atque. Accusamus sapiente earum, reiciendis non qui provident accusantium autem labore dolore assumenda optio aut dolor illo? Vel, est totam magnam quos in harum dolores omnis consequatur quo molestias dolore possimus! Alias odit quibusdam ullam id iure adipisci delectus quis quae, facere recusandae eligendi molestiae maiores. Quaerat nemo iusto iste, sequi ducimus voluptatem officia quam veniam, necessitatibus laborum perspiciatis, rerum reiciendis ipsa magni. Illo odit, voluptatem voluptate molestias expedita, minus quaerat nobis ex aspernatur consequuntur, beatae molestiae eum ipsa possimus velit alias nostrum maiores quisquam porro soluta ratione ad! Optio dolor voluptatibus itaque adipisci quas fugit maxime fugiat velit placeat assumenda sequi vitae iusto magni distinctio, veniam nobis quibusdam numquam labore provident vero totam iure! Ipsa, odio delectus culpa porro ratione assumenda ipsum, ab doloremque aliquam obcaecati animi adipisci itaque iure quas blanditiis quam neque! Veniam commodi aut nulla deserunt tempora, at inventore minus voluptatem facere illum a! Totam aut quae odio exercitationem consequatur nemo reprehenderit, soluta consectetur voluptas suscipit aperiam repellendus?
          </div>

          <div className="part2">
            <ul>
              <li>dewf</li>
              <li>ewfr</li>
              <li>csdfew</li>
              <li>sdfcdn</li>
              <li>ndkjhdehou</li>
            </ul>
          </div>
        </div>


        <button onClick={downloadDoc}>Download</button>
      </div>
    
    </>




  )
}

export default Portfolio2

