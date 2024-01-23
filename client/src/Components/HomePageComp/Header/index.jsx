import React from "react";
import "./index.scss";
const Header = () => {
  return (
    <section id="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-12 info">
            <div className="content">
              <h2>Select Your New Perfect Style</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                aliquam atque, eius fugiat odio magnam ex praesentium minima id
                nostrum quo ad cum accusamus neque
              </p>
              <div className="butt">Shop Now</div>
            </div>
          </div>
          <div className="col-lg-1 col-md-1 "></div>
          <div className="col-lg-4 col-md-5 foto">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
