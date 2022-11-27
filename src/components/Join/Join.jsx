import React, { useRef } from "react";
import "./Join.css";

const join = () => {
  return (
    <div className="Join" id="Join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span> YOUR BODY</span>
          <span className="stroke-text"> WITH US ?</span>
        </div>
      </div>
      <div className="right-j">``

        <form className="email-container">
            <input type="email" name="user_email" id="" placeholder="Enter your email address" />
            <button className="btn btn-j">join now</button>
        </form>
      </div>
    </div>
  );
};

export default join;
