import React from "react";
import Theheader from "../components/Theheader";
import Theinfo from "../components/Theinfo";
import Theskills from "../components/Theskills";
import Thesocials from "../components/Thesocials";
import "../style/HomePage.css";

function Homepage() {
  return (
    <div className="main-home container-fluid d-flex flex-column g-0">
      {/*****Header and Contact info section****/}

      <Theheader />

      {/****Introduction and info section****/}

      <Theinfo />

      {/****Skills section****/}

      <Theskills />

      {/****Social contact section****/}
      <Thesocials />
    </div>
  );
}

export default Homepage;
