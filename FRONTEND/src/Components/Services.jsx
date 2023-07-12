import React from "react";
import ignious from "./images/ignious logo.jpg";
import water from "./images/water.png";
import sign2 from "./images/sign2.png";
import sign3 from "./images/sign3.png";
import fuel from "./images/fuel.png";
import Nav from "./Nav";
import axios from "axios";

function Services() {
  let obj = {
    firstname: " ",
    phone: " ",
    email: " ",
  };
  const submit = async (e) => {
    console.log(obj);
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:5000/Service/adddata", obj);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Nav />
      <div className="Ser-part1">
        <h1 className="Ser-Heading">
          Streamline Your Operations with Our Comprehensive FMCSA & DOT
          Compliance Solutions.
        </h1>
        <p className="Ser-Para">
          Ensuring FMCSA (Federal Motor Carrier Safety Administration) and DOT
          (Department of Transportation) compliance is critical for your
          trucking company to operate legally and safely. Our comprehensive
          compliance solutions streamline your operations by providing expert
          guidance on everything from driver qualification to vehicle
          maintenance, electronic logging devices (ELDs), and more. <br />{" "}
          <br /> We keep up with the latest regulations and help you stay
          compliant, minimizing the risk of fines, penalties, and other
          consequences. With our services, you can focus on your core business
          while we handle all your FMCSA and DOT compliance needs.
        </p>
        <img src={ignious} alt="" className="Ser-Img" />
      </div>
      <div className="Ser-part2">
        <div className="Ser-pt2-secI">
          <h2 className="Ser-pt2-Heading">IFTA Reporting</h2>
          <p className="Ser-pt2-Para">
            Our IFTA preparation and filing services help trucking companies
            streamline the process of reporting and paying fuel taxes across
            multiple jurisdictions. We provide expert assistance with accurate
            calculation, preparation, and filing of IFTA reports while ensuring
            compliance with all applicable rules and regulations.{" "}
          </p>
          <button className="Ser-pt2-Btn">Select</button>
        </div>
        <div className="Ser-img-I">
          <img src={fuel} alt="fuel" />
        </div>
        <div className="Ser-pt2-secII">
          <h2 className="Ser-pt2-Heading">Trucking Permits</h2>
          <p className="Ser-pt2-Para">
            Our IFTA preparation and filing services help trucking companies
            streamline the process of reporting and paying fuel taxes across
            multiple jurisdictions. We provide expert assistance with accurate
            calculation, preparation, and filing of IFTA reports while ensuring
            compliance with all applicable rules and regulations.{" "}
          </p>
          <button className="Ser-pt2-Btn">Select</button>
        </div>
        <div className="Ser-img-II">
          <img src={sign2} alt="sign2" />
        </div>
        <div className="Ser-pt2-secIII">
          <h2 className="Ser-pt2-Heading">State and Federal </h2>
          <p className="Ser-pt2-Para">
            Our IFTA preparation and filing services help trucking companies
            streamline the process of reporting and paying fuel taxes across
            multiple jurisdictions. We provide expert assistance with accurate
            calculation, preparation, and filing of IFTA reports while ensuring
            compliance with all applicable rules and regulations.{" "}
          </p>
          <button className="Ser-pt2-Btn">Select</button>
        </div>
        <div className="Ser-img-III">
          <img src={sign3} alt="sign3" />
        </div>
        <div className="Ser-pt2-secIV">
          <h2 className="Ser-pt2-Heading">Driver Compliance</h2>
          <p className="Ser-pt2-Para">
            Our IFTA preparation and filing services help trucking companies
            streamline the process of reporting and paying fuel taxes across
            multiple jurisdictions. We provide expert assistance with accurate
            calculation, preparation, and filing of IFTA reports while ensuring
            compliance with all applicable rules and regulations.{" "}
          </p>
          <button className="Ser-pt2-Btn">Select</button>
        </div>
        <div className="Ser-img-IV">
          <img src={water} alt="water" />
        </div>
      </div>
      <div className="Ser-part3">
        <h1 className="Ser-pt3-Heading">
          We also care about <br /> your road partners.
        </h1>
      </div>
      <div className="Ser-part4">
        <h1 className="Ser-pt4-Heading">Get Free Consultation</h1>
        <form>
          <div className="Ser-pt4-sect-I">
            <label htmlFor="">Name</label>
            <br />
            <input
              className="Ser-pt4-bar"
              type="text"
              name="firstname"
              onChange={(e) => {
                obj.firstname = e.target.value;
              }}
            />
          </div>
          <div className="Ser-pt4-sect-II">
            <label htmlFor="">Email</label>
            <br />

            <input
              className="Ser-pt4-bar"
              type="text"
              name="email"
              onChange={(e) => {
                obj.email = e.target.value;
              }}
            />
          </div>

          <div className="Ser-pt4-sect-III">
            <label htmlFor="">Telephone*</label>
            <br />
            <input
              className="Ser-pt4-bar"
              type="text"
              name="phone"
              onChange={(e) => {
                obj.phone = e.target.value;
              }}
            />
          </div>
          <div className="Ser-pt4-sect-IV">
            <button className="Ser-pt4-btn" onClick={submit}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Services;
