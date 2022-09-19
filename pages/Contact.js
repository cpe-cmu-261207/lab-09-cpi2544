import React from "react";
import backgroundComp from "../components/backgroundComp";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <div
        className="d-flex justify-content-center mt-4"
        style={{ fontSize: "30px" }}
      >
        <span> Contact Me </span>
      </div>

      <div className="d-flex justify-content-center">
        <img
          src="images/profile.jpg"
          style={{ borderRadius: "50%", width: "170px" }}
        />
      </div>
      <div
        className="d-flex hstack justify-content-center"
        style={{ fontSize: "25px" }}
      >
        <div style={{ width: "40%" }}>
          <span>
            Name <br />
            <br />
            Address <br />
            <br />
            Facebook <br />
            <br />
            Email <br />
            <br />
            Phone
          </span>
        </div>
        <div className="vstack justify-content-center" style={{ width: "60%" }}>
          <span>
            Chayayos Inpracha <br />
            <br />
            Pokpong <br />
            <br />
            <a
              href="https://www.facebook.com/profile.php?id=100008294706247"
              className="text-decoration-none"
              rel="noreferrer"
            >
              https://www.facebook.com/profile.php?id=100008294706247
            </a>
            <br />
            <br />
            <a href="mailto:chayayos_i@cmu.ac.th" class="text-decoration-none">
              {" "}
              chayayos_i@cmu.ac.th{" "}
            </a>
            <br />
            <br />
            0645294668
          </span>
        </div>
      </div>
    </div>
  );
}

export default backgroundComp(Contact);
