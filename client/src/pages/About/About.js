import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="data:image/jpeg;base64,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"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Greetings and a pleasure to make your acquaintance! I am
                delighted to connect with a vibrant individual like you,
                <strong>Himanshu Yadav</strong> At the youthful age of 22, I proudly represent
                the picturesque city of Amravati, nestled in the heart of
                Maharashtra. With a Bachelor's degree in Engineering adorning my
                accomplishments, I stand poised at the threshold of a promising
                journey. My ambitious spirit, infused with boundless optimism,
                serves as the driving force propelling me forward. A fervent
                desire to carve a niche in the IT industry fuels my aspirations.
                Proficiency in an array of essential tools – HTML, CSS,
                JavaScript, and the dynamic realm of React – lays the
                cornerstone of my prowess. This robust foundation empowers me to
                envision and craft extraordinary creations. Upon donning the
                mantle of a BE graduate, my insatiable passion for unraveling
                intricate problems remained unquenched. This relentless pursuit
                led me to the fascinating domain of technology and its intricate
                mechanics. Amidst the ocean of skill-enhancement platforms and
                an inundation of tutorial videos, a sense of being adrift
                engulfed me. However, like a shining beacon, the decision to
                embark on the FunctionUp bootcamp emerged as my North Star,
                illuminating my path amidst the nebulous choices. The FunctionUp
                bootcamp proved to be a transformative juncture – a decision
                that has already woven a tapestry of growth and revelation. It
                is my privilege to share this journey with you, brimming with
                excitement, direction, and the promise of a radiant future.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
