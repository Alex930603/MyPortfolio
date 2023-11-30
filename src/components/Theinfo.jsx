import React from "react";
import "../style/Theinfo.css";
/****Introduction and info section****/
function Theinfo() {
  return (
    <div className="info d-flex flex-column ">
      <h1 className="introduction-title text-white ">Intro</h1>

      <div className="info-section container-fluid d-flex align-items-center justify-content-center">
        <div className="my-pic_container ">
          <img alt="pic of me" src="/mypic.jpeg" className="image-fluid " />
        </div>
        <div className="info-container text-white">
          <p>
            I'm a dedicated web developer passionate about creating immersive
            digital experiences, with a focus on front-end development. I
            specialize in creating appealing interface and add functionalities
            to websites. My experience spans freelancing and collaborating with
            agencies and organizations, where I've created, upgraded and
            improved web contents. I want to grow and learn new things everyday,
            let's work together!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Theinfo;
