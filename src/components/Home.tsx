import React from "react";
import { Link } from "react-router-dom";
import iphone_14 from "../images/iphone_14.jpg";
import iphone from "../images/iphone.jpg";
import ipad from "../images/ipad.jpg";
import watch from "../images/watch.jpg";

function Home() {
  return (
    <div>
      <Link to="iphone14Pro" className="">
        <img src={iphone_14} className="img-fluid" alt="Iphone 14 Pro" />
      </Link>
      <Link to="iphones" className="">
        <img src={iphone} className="img-fluid" alt="Iphones" />
      </Link>
      <Link to="ipads" className="">
        <img src={ipad} className="img-fluid" alt="Ipad" />
      </Link>
      <Link to="watches" className="">
        <img src={watch} className="img-fluid" alt="Watches" />
      </Link>
    </div>
  );
}

export default Home;
