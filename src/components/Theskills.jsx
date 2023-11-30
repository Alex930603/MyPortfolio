import React from "react";
import"../style/Theskills.css"
/****Skills section****/
function Theskills() {
  return (
    <div className="skills-container container-fluid d-flex flex-column">
      <h1 className="skills-title text-white">Skills</h1>

      <p className="skills-info text-white">
        • Front-end languages: JavaScript (ES6+), HTML5, React.js, Vue.js, Nuxt.js <br />
        • Back-end languages: Node.js, Express.js <br />
        • Styling: CSS, SASS/SCSS <br />
        • Design: Figma,Framer <br />
        • Version Control: GitHub <br />
        • Tools: Wordpress, Jira, Slack<br />
        • Responsive Design: Bootstrap, Tailwind CSS <br />
        • Other: RESTful APIs
      </p>
    </div>
  );
}
export default Theskills;
