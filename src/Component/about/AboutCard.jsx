import React from "react";
import Title from "../common/heading/Title";
import { homeAbout } from "../dummydata/dummy";
import Awrapper from "./Awrapper";
import '../about/About.css'

const AboutCard = () => {
  return (
    <div>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/back/about.webp" alt="" />
          </div>
          <div className="right row">
            <Title
              subtitle="LEARN ANYTHING"
              title="Benefits About Online Learning"
            />
            <div className="items">
              {homeAbout.map((val) => (
                <div className="item flexSB">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>

                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Awrapper/>
    </div>
  );
};

export default AboutCard;
