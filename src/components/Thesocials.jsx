import React from "react";
import "../style/Thesocials.css"

function Thesocials() {
  const CurriculumABACCI = "/CurriculumABACCI.pdf";
  const downloadCurriculum = () => {
    window.open(CurriculumABACCI, "_blank");
  };

  return (
    <div className="social-icons_container container-fluid d-flex justify-content-center">
      <div className="github d-flex flex-column gap-3">
        <a href="https://github.com/Alex930603">
          <img alt="git logo" src="/github-logo.svg" className="github-logo" />
        </a>
        <h4 className="socials-text text-white"> Github</h4>
      </div>
      <div className="linkedin d-flex flex-column gap-3">
        <a href="https://www.linkedin.com/in/alessandro-bacci-930603bcclsn/">
          <img
            alt="linkedin-logo"
            src="/linkedin-logo.svg"
            className="linkedin-logo"
          />
        </a>
        <h4 className="socials-text text-white"> Linkedin</h4>
      </div>

      <div className="linkedin d-flex flex-column gap-3">
        <button className="curriculum-button" onClick={downloadCurriculum}>
          <img
            src="./curriculum.svg"
            alt="curriculum-logo"
            className="curriculum-logo"
          />
        </button>
        <h4 className="socials-text text-white"> Curriculum</h4>
      </div>
    </div>
  );
}
export default Thesocials;
