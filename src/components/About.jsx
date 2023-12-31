/* eslint-disable react/no-unescaped-entities */
import img from "../assets/prahlad.jpg";
import png from "../assets/png.png";
import gif from "../assets/2024.gif";

function About() {
  return (
    <>
      <div className="about-me">
        <div className="about-name">Prahlad Gaur wishing you Happy New Year 2024</div>

        <div className="left-right">
          <div className="left">
          <a className='myname' rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/prahlad-gaur-071107abc/'> <img className="img1" src={img} ></img></a>
          </div>
          <div className="right" >
            <p>
              “I hope that in this year to come, you make mistakes. Because if
              you are making mistakes, then you are making new things, trying
              new things, learning, living, pushing yourself, changing yourself,
              changing your world. You're doing things you've never done before,
              and more importantly, you're doing something.” —Neil Gaiman
            </p>
            <div className="img0">
              <img className="img2" src={png} alt="PNG" />
              <img className="img2" src={gif} alt="GIF" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
