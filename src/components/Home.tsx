import React from "react";
import { Link } from "react-router-dom";
import iphone_14 from "../images/iphone_14.jpg";
import iphone from "../images/iphone.jpg";
import ipad from "../images/ipad.jpg";
import watch from "../images/watch.jpg";

function Home() {
  return (
    <div>
      <Link to="iphone14Pro" className="text-decoration-none  text-white">
        <div>
          <div className="bg-black text-center">
            <h2 className="m-0 fs-1 pt-4 pb-0">iPhone 14 Pro</h2>
            <h3 className="m-0 p-2 fs-4">Pro. Beyond.</h3>
            <img src={iphone_14} className="img-fluid" alt="Iphone 14 Pro" />
          </div>
        </div>
      </Link>
      <Link to="iphone" className="text-decoration-none text-black">
        <div className="text-center">
          <h2 className="m-0 fs-1 pt-4 pb-0">iPhone 14</h2>
          <h3 className="m-0 p-2 fs-4">Wonderfull.</h3>
          <img src={iphone} className="img-fluid" alt="Iphones" />
        </div>
      </Link>
      <Link to="ipad" className="text-decoration-none text-black">
        <div className="text-center">
          <h2 className="m-0 fs-1 pt-4 pb-0">iPad</h2>
          <h3 className="m-0 p-2 fs-4">Lovable. Drawable. Magical.</h3>
          <img src={ipad} className="img-fluid" alt="Ipad" />
        </div>
      </Link>
      <Link to="watch" className="text-decoration-none text-white">
        <div className="text-center bg-black pb-5">
          <h2 className="m-0 fs-1 pt-4 pb-0 text-uppercase">
            Apple Watch Series 8
          </h2>
          <h3 className="m-0 p-2 fs-4">A healthy leap ahead.</h3>
          <img src={watch} className="img-fluid" alt="Watches" />
        </div>
      </Link>
    </div>
  );
}

export default Home;
