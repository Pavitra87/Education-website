import React from "react";
import './Hero.css';
import Title from '../../common/heading/Title'

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title subtitle='WELCOME TO ACDEMIA' title='Best Online Education'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolores fugit maiores libero adipisci in! Sit sint dolorum error  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga placeat nostrum, omnis culpa distinctio eaque.</p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>

              <button className="">
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </div>
  );
};

export default Hero;
