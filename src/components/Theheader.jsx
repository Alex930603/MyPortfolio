import React from "react";
import "../style/Theheader.css"

function Theheader() {

    return (
    /*****Header and Contact info section****/
        <div className="bg-container container-fluid d-flex align-items-center justify-content-center">
          <div className=" d-flex flex-column ">
            <div className="name-container">
              <h1 className="my-name fw-lighter  ">Alessandro</h1>
              <h1 className="my-name fw-lighter text-white ">Bacci</h1>
            </div>
  
            <div className="bg-info_container d-grid gap-5">
                <h2 className="my-job fw-light text-white">Web Developer</h2>

                <a className="link-underline-secondary link-offset-3" href="mailto:alessandro.bacci1993@gmail.com">
                    <h3 className="my-email text-white fw-light ">
                        Alessandro.bacci1993@gmail.com
                    </h3>
                </a>
            </div>
          </div>
        </div>
        )
    }
    export default Theheader
