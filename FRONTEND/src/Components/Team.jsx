import React from "react";
import developer from "./images/developer.jpg";
import founder from "./images/founder.jpg";
import Nav from "./Nav";

function Team() {
  return (
    <div>
      <Nav/>
      <h1 className="Team-Heading">A Great Team you can count on!</h1>
      <div className="Team-Part1">
        <h3>Sheikh Hamza</h3>
        <p>Founder</p>
        <div className="Team-section1">
          <div className="Team-section1-I">
            <img className="team-img" src={founder} alt="Founder" />
          </div>
          <div className="Team-section1-II">
            <h3>Customer Service Professional and Project Management.</h3>
            <p>
              Dedicated and Passionated in such a big industry. Remarkable
              knowledge of the market ensures a perfect suit to help any
              trucking business on its path to success.
            </p>
          </div>
        </div>
      </div>
      <div className="Team-Part2">
        <h3>Hamza Atif</h3>
        <p>Developer</p>
        <div className="Team-section2">
          <div className="Team-section2-I">
            <img className="team-img" src={developer} alt="Developer" />
          </div>
          <div className="Team-section2-II">
            <h3>Customer Service Professional and Project Management.</h3>
            <p>
              Dedicated and Passionated in such a big industry. Remarkable
              knowledge of the market ensures a perfect suit to help any
              trucking business on its path to success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
