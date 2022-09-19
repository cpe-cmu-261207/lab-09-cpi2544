import React from "react";
import backgroundComp from "../components/backgroundComp";
import Navbar from "../components/Navbar";

function Exp() {
  return (
    <div style={{ padding: "2rem" }}>
      <Navbar />
      <div
        className="d-flex justify-content-center mt-4"
        style={{ fontSize: "30px" }}
      >
        <span> Project Experience </span>
      </div>
      <div className="hstack">
        <div style={{ width: "40%" }}>
          <img
            src="images/scratch.jpg"
            width="400"
            height="300"
            className="ms-5 mt-3"
            style={{ borderRadius: "10%" }}
          />
        </div>
        <div className="vstack justify-content-center" style={{ width: "60%" }}>
          <div style={{ fontSize: "25px" }}>
            <span> Scratch game project </span>
          </div>
          <span>That I tell in my profile. I had ever learnt scratch.And</span>
          <span>
            And the end of semester Teacher give me and my friend one project.
          </span>
          <span>
            it's creating game from scratch. My project is survival game.{" "}
          </span>
          <span>
            It's help me get more experience about the start of programming very
            well.
          </span>
        </div>
      </div>
      <div className="hstack">
        <div style={{ width: "40%" }}>
          <img
            src="images/cplus.png"
            width="400"
            height="300"
            className="ms-5 mt-3"
            style={{ borderRius: "10%" }}
          />
        </div>
        <div className="vstack justify-content-center" style={{ width: "60%" }}>
          <div style={{ fontSize: "25px" }}>
            <span> C++ project </span>
          </div>
          <span>
            This project is like scratch project but this project is free more.
          </span>
          <span>
            You can create beside game but I still create game project,because i
            love game.
          </span>
          <span>
            I create agian but different.New project is card game turnbase.
          </span>
          <span>
            So i get more experience and specailize computer language better.
          </span>
        </div>
      </div>
    </div>
  );
}

export default backgroundComp(Exp);
