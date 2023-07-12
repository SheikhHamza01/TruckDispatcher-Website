import React from "react";
import Nav from "./Nav";

function Affilate() {
  return (
    <div>
        <Nav/>
      <h1 className="aff-heading">Affiliate Program</h1>
      <div className="affilate-body">
        <h1 className="aff-heading-1">
          Do you know somebody that may benefit from using our dispatch service?
        </h1>
        <p className="aff-para">
          All referrals are paid $10/week for the lifetime of the referral. Just
          what you read!
        </p>
        <h1 className="aff-heading-1">How it works:</h1>
        <ul className="aff-para">
          <li>
            You send us a client and every week that they use our service, we
            send you $10. The $10’s keep coming for as long as the client uses
            our service.
          </li>
          <li>
            Yes, you can refer as many clients as you want! There is no limit on
            the number of referrals.
          </li>
          <li>
            Make sure you let us know or have your client tell us that you sent
            them so that we can send you your $10.
          </li>
        </ul>
        <h1 className="aff-heading-1">
          The Tiny Print (We like our tiny print huge!) ​
        </h1>
        <ul className="aff-para">
          <li>
            The client must generate $5,000 gross revenue in the billing cycle
            to be eligible.
          </li>
          <li>We must receive a W9 from you before we pay out</li>
          <li>We pay out weekly, every Friday. ​</li>
        </ul>
        <h1 className="aff-heading-1">That's all!</h1>
        <p className="aff-para">
          Please sign our affiliate form and consider it a done deal!
        </p>
      </div>
    </div>
  );
}

export default Affilate;
