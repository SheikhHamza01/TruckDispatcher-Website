import React from "react";
import card1 from "./images/card1.jpg"
import card2 from "./images/card2.jpg"
import card3 from "./images/card3.jpg"
import card4 from "./images/card4.jpg"
import Nav from "./Nav";


function Plans() {
  return (
    <div className="plans-body">
      <Nav/>
      <div className="Plpart1">
        <div className="Plsection1">
          <div className="Plpt1secttion1-I">
            <div className="card">
              <img className="card-img-top" src={card1} alt="Card1" />
            </div>
          </div>
          <div className="Plpt1secttion1-II">
            <div className="card">
              <img className="card-img-top" src={card2} alt="Card2" />
             
            </div>
          </div>
          <div className="Plpt1secttion1-III">
            <div className="card">
              <img className="card-img-top" src={card3} alt="Card3" />
              
            </div>
          </div>
        </div>
        <div className="Plsection2">
          <div className="Plsec2-I">
            <div className="card">
              <img className="card-img-top" src={card4} alt="Card4" />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
