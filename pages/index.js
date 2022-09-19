import Navbar from "../components/Navbar";
import backgroundComp from "../components/backgroundComp";

function Home() {
  return (
    <div>
      <Navbar />

      <div className="hstack">
        <div style={{ width: "40%" }}>
          <img
            src="images/profile.jpg"
            className="ms-5 mt-3"
            style={{ borderRadius: "50%" }}
            width="170"
          />
        </div>
        <div className="vstack justify-content-center" style={{ width: "60%" }}>
          <span> Chayayos Inpracha </span>
          <span> Hi, my name is Chayayos.graduated from Satit cmu </span>
          <span> i interested in programming. </span>
        </div>
      </div>
      <div
        className="d-flex justify-content-center mt-3"
        style={{ fontSize: "30px" }}
      >
        <span> My Skills </span>
      </div>

      <div className="hstack">
        <div style={{ width: "40%" }}>
          <img
            src="images/code.jpg"
            width="160"
            height="160"
            className="ms-5 mt-3"
            style={{ borderRadius: "10%" }}
          />
        </div>
        <div className="vstack justify-content-center" style={{ width: "60%" }}>
          <div style={{ fontSize: "25px" }}>
            <span> Programming </span>
          </div>
          <span>
            I used to learn Scratch from the first semester of the first-year.
          </span>
          <span> it's a basic programming for other computer language </span>
          <span>and i used to learn C++ language in the second semester.</span>
        </div>
      </div>

      <div
        className="d-flex justify-content-center mt-2"
        style={{ fontSize: "30px" }}
      >
        <span> My Hobbies </span>
      </div>

      <div className="hstack">
        <div style={{ width: "40%" }}>
          <img
            src="images/tennis.jpg"
            width="160"
            height="160"
            className="ms-5 mt-3"
            style={{ borderRadius: "10%" }}
          />
        </div>
        <div className="vstack justify-content-center" style={{ width: "60%" }}>
          <div style={{ fontSize: "25px" }}>
            <span> Tennis </span>
          </div>
          <span>
            tennis is a sport that i prefered and interested in since childhood.
          </span>
          <span>i have played tennis for 2 years.</span>
          <span>It's fun and get much cadio exersice.</span>
        </div>
      </div>
      <div className="hstack">
        <div style={{ width: "40%" }}>
          <img
            src="images/game.jpg"
            width="160"
            height="160"
            className="ms-5 mt-3"
            style={{ borderRadius: "10%" }}
          />
        </div>
        <div className="vstack justify-content-center" style={{ width: "60%" }}>
          <div style={{ fontSize: "25px" }}>
            <span> Playing games </span>
          </div>
          <span>
            {" "}
            Normally, boys like to play games and i too.Games have varius
            category.{" "}
          </span>
          <span>
            {" "}
            And the most category of game that i like is advangering and
            fighting game.{" "}
          </span>
          <span>
            {" "}
            I take almost all my spare time to play these games.It's my
            happiness{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default backgroundComp(Home);
