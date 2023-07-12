import React from "react";
import truck from "./images/truck.jpg";
import truck2 from "./images/truck2.jpg";
import stars from "./images/stars.png";
import truck4 from "./images/truck4.png";
import mail from "./images/mail.jpg";
import road from "./images/road.jpg";
import sign from "./images/sign.jpg";
import saleperson from "./images/saleperson.png";
import Nav from "./Nav";
import axios from "axios";

function Home() {
  let obj = {
    firstname: " ",
    phone: " ",
    email: " ",
    truck: " ",
    income: " ",
    options: " ",
    average: " ",
  };
  const submit = async (e) => {
    console.log(obj);
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:5000/Home/adddata", obj);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Nav />
      <div className="part1">
        <div className="section1">
          <h1 className="heading">
            Welcome to the Most Reliable Dispatch Company in North America.
          </h1>
          <p className="para">
            We find the best paying loads in the market.
            <br /> Get a dedicated dispatcher assigned for you and don't worry{" "}
            <br /> any more about spending time looking for loads or empty
            miles.
          </p>
          <button className="btn1">Hire a Dispatcher Today</button>
        </div>
        <div className="section2">
          <img src={truck} alt="truck" />
        </div>
      </div>

      <div className="part2">
        <div className="pt2section1">
          <h1 className="pt2Heading">
            53' Dry Vans,Reefers, <br />
            and Flatbeds Only.
          </h1>
        </div>
        <div className="pt2section2">
          <p className="pt2Para">
            A Bigger <br />
            Equipment makes <br /> you more Money!
          </p>
        </div>
      </div>

      <div className="part3">
        <div className="pt3section1">
          <img src={truck2} alt="truck2" />
        </div>
        <div className="pt3section2">
          <h1 className="pt3Heading">
            Hit the road on your <br /> terms, you're the boss
          </h1>
          <p className="pt3Para">
            Loads, rates and routes are your choice, no force dispatching. We
            make sure you get the best freight at the best rate and get paid on
            time. <br /> Documentation, prices and fees are disclosed upfront.{" "}
            <br /> To receive SMS notifications from us, <br /> we require your
            email address.
          </p>
          <input
            className="bar"
            type="text"
            name="email"
            placeholder="Email Address"
          />
          <button className="btn2">Start Today!</button>
        </div>
      </div>

      <div className="part4">
        <div className="background-image">
          <div className="pt4section1"></div>
          <div className="pt4section2">
            <h1 className="pt4Heading">
              Call Us Today,get loaded <br />& be Profitable Now
            </h1>

            <button className="btn1">CALL NOW</button>
          </div>
        </div>
      </div>

      <div className="part5-I">
        <div className="part5-II">
          <div className="pt5section1">
            <img src={stars} alt="stars" />
            <h4>Lopez Hauling Inc </h4>
            <p>
              Our company, Lopez Hauling, just started back in July of 2021 and
              Genius Dispatch has been with us since the beginning. They have
              been so helpful with us being a start up company and not knowing
              much about the industry to knowing where the money is and what we
              need to do to get it! Jessica, especially has been so amazing and
              her along with many others are very quick to respond and always
              take care of any issue we run into. To the point I don’t have to
              worry about much but making money!
            </p>
          </div>
          <div className="pt5section2">
            <img src={stars} alt="stars" />
            <h4>Spartan Cargo LLC </h4>
            <p>
              I can’t say enough to express my positive experience with this
              dispatch service.
            </p>
            <p>
              With the challenges of expenses going through the roof these days,
              having support from a dedicated staff is very important.
            </p>
          </div>
          <div className="pt5section3">
            <img src={stars} alt="stars" />
            <h4>National Brothers Inc </h4>
            <p>
              Our trucking company was in need of a dispatching company to
              dispatch our fleet of trucks and found Genius Dispatching in an
              article written about top dispatching companies. We have only
              worked with Genius for a short time but thus far, they have not
              disappointed. David and Jessica have both been readily available
              to answer questions our members have regarding their process. They
              have been nothing but professional and are quick to reach out to
              our team about concerns and/or issues. We look forward to
              continuing a great profitable relationship with their team.
            </p>
          </div>
          <div className="pt5section4">
            <img src={stars} alt="stars" />
            <h4>Venados Logistics LLC </h4>
            <p>
              Excellent service that they provide in all aspects, Elisa who is
              my dispatch assigned always on the lookout for having the best
              paid loads, always waiting for me to be loaded and unloaded on
              time and also pending along with Jessica who always pays us the
              total on time of the load plus the extra charges that we have for
              lumper or detention.
            </p>
          </div>
        </div>
        <div className="part5-III">
          <img className="pt5img" src={truck4} alt="truck4" />
        </div>
      </div>

      <div className="part6">
        <h1 className="pt6Heading">Getting started is easy</h1>
        <div className="part6-I">
          <div className="pt6section1">
            <img src={mail} alt="mail" />
            <h2>Send Documents</h2>
            <p>MC Authority, Certificate of Insurance and W-9 Form.</p>
            <button className="pt6btn">Send Documents</button>
          </div>
          <div className="pt6section2">
            <img src={sign} alt="sign" />
            <h2>Sign Agreement</h2>
            <p>Sign a quick and easy dispatch service level agreement.</p>
            <button className="pt6btn">Request Agreement</button>
          </div>
          <div className="pt6section3">
            <img src={road} alt="road" />
            <h2>Hit the road</h2>
            <p>We start dispatching your truck immediately.</p>
            <button className="pt6btn">Hire a Dispatcher</button>
          </div>
        </div>
      </div>

      <div className="part7">
        <div className="pt7section1">
          <h1>
            Top dedicated truck <br /> dispatch service
          </h1>
          <p>
            As truck dispatchers providing freight dispatching services, we take
            a low percentage of your rate. This is an incentive to negotiate
            high rates for you. The more money you make, the more money we make.
          </p>
          <p>
            There are NO contracts. It is difficult to be profitable and that is
            why we charge only a small Percentage Fee for any premium load we
            find. Other dispatchers and brokers charge much higher fees and do
            not care about the service they provide to their drivers, we believe
            in long term relationships, our main focus is a great truck dispatch
            and customer service.
          </p>
          <button className="pt7btn">Hire a Distacher Today</button>
        </div>
        <div className="pt7section2">
          <img className="pt7img" src={saleperson} alt="saleperson" />
        </div>
      </div>

      <div className="part8">
        <h1 className="pt8Heading">What is truck dispatch service? </h1>
        <p className="pt8Para">
          A truck dispatch services help truck drivers and owner operators who
          have their own trucking company manage the load booking and
          back-office processes of running a trucking company. Some dispatchers
          specialize only in booking loads, while others, like Genius Dispatch,
          offer a wide variety of services such as invoice management and
          detention requests.
        </p>
        <button className="pt8btn">Hire a Disptach now</button>
      </div>

      <div className="part9">
        <div className="pt9backgroundimg">
          <div className="pt9section1">
            <h1 className="pt9Heading">
              Genius Dispatch is your freight planning solution.{" "}
            </h1>
            <p className="pt9Para">
              Our services are mainly for owner operators, independent truckers
              & carriers with their own DOT or MC authority. It’s in our best
              interest for us to find the best paying loads available for you.
              We dispatch dry-vans, reefers , flatbeds. We find you the best
              truck loads in the US. We help you improve your profits and
              experience. Whether you are looking for your next load or you need
              a load that takes you home, Genius Dispatch is committed to your
              goals. For us to be successful, you must be successful first. We
              are the best dispatch service in the US.
            </p>
            <button className="pt9btn">Start Today!</button>
          </div>
        </div>
      </div>

      <div className="part10">
        <div className="pt10section1">
          <h1 className="pt10Heading">
            Tell us about your goals and let us help
          </h1>
          <p className="pt10Para">
            Having some idea of what your company needs or what are your hauling
            plans and desires will help us provide the best dispatch service
            solution for your trucking company.​ Complete the form now and start
            today!
          </p>
        </div>
        <div className="pt10section2">
          <form>
            <div className="pt10section2-I">
              <input
                className="pt10bar"
                type="text"
                name="average"
                placeholder="What average rate you are looking for?"
                onChange={(e) => {
                  obj.average = e.target.value;
                }}
              />
              <input
                type="text"
                list="options"
                className="pt10bar"
                placeholder="How many trucks do you have?"
                name="truck"
                onChange={(e) => {
                  obj.truck = e.target.value;
                }}
              />
              <datalist id="options">
                <option value="1" />
                <option value="2" />
                <option value="More than 2" />
              </datalist>
              <input
                className="pt10bar"
                type="text"
                name="email"
                placeholder="Email Address*"
                onChange={(e) => {
                  obj.email = e.target.value;
                }}
              />
              <br />
              <label id="option" htmlFor="inputs">
                What type of Truck do you have?*
              </label>
              <br />
              <input
                type="checkbox"
                id="option"
                name="options"
                value="53ft Dry Van"
                onChange={(e) => {
                  obj.options = e.target.value;
                }}
              />
              <label id="option" for="option1">
                53ft Dry Van
              </label>
              <br />
              <input
                type="checkbox"
                id="option"
                name="options"
                value="53ft Reefer"
                onChange={(e) => {
                  obj.options = e.target.value;
                }}
              />
              <label id="option" for="option2">
                53ft Reefer
              </label>
              <br />
              <input
                type="checkbox"
                id="option"
                name="options"
                value="48ft or 53ft Flatbed"
                onChange={(e) => {
                  obj.options = e.target.value;
                }}
              />
              <label id="option" for="option3">
                48ft or 53ft Flatbed
              </label>
              <br />
              <input
                type="checkbox"
                id="option"
                name="options"
                value="53ft Stepdeck"
                onChange={(e) => {
                  obj.options = e.target.value;
                }}
              />
              <label id="option" for="option4">
                53ft Stepdeck
              </label>
            </div>
            <div className="pt10section2-II">
              <input
                className="pt10bar"
                type="text"
                name="income"
                placeholder="Weeking income desired"
                onChange={(e) => {
                  obj.income = e.target.value;
                }}
              />
              <input
                className="pt10bar"
                type="text"
                name="firstname"
                placeholder="First Name"
                onChange={(e) => {
                  obj.firstname = e.target.value;
                }}
              />
              <input
                className="pt10bar"
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={(e) => {
                  obj.phone = e.target.value;
                }}
              />
              <button className="pt10btn" onClick={submit} value="submit">
                Start Today!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
