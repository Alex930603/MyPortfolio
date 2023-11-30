import React from "react";
import "../style/Thefooter.css";

function Thefooter() {
  return (
    <div className="footer-container container-fluid d-flex justify-content-center ">
      <div className="phone-info_container d-flex justify-content-center align-items-center ">
        <img className="phone-pic" alt="phone pic" src="/phone.svg" />
        <a
          className="d-flex align-items-center link-underline-secondary link-offset-3"
          href="tel:+393395462969"
        >
          <h2 className="my-contacts text-white fw-light">+39 339 5462 969</h2>
        </a>
      </div>

      <div className="mail-info_container d-flex justify-content-center align-items-center ">
        <img className="mail-pic" alt="mail pic" src="/email.svg" />
        <a
          className="link-underline-secondary link-offset-3"
          href="mailto:alessandro.bacci1993@gmail.com"
        >
          <h2 className="my-contacts text-white fw-light ">
            Alessandro.bacci1993@gmail.com
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Thefooter;
