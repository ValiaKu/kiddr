import * as React from "react";
import "./index.css";
import Header from "../components/header";
import SketchLogo from "../images/logo-sketch.png";
import FigmaLogo from "../images/logo-figma.png";
import FramerLogo from "../images/logo-framer.png";
import StudioLogo from "../images/logo-studio.png";
import ReactLogo from "../images/logo-react.png";
import SwiftLogo from "../images/logo-swift.png";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <div className='Hero'>
        <div className='HeroGroup'>
          <h1>Valentyna Kuzmych</h1>
          <p>Front End Developer, Designer and Entrepreneur</p>
          {/* <p>
            Programmer: Front End Developer who focuses on writing clean,
            reusable, elegant and efficient code. Currently the main area of my
            interest is React.
          </p>
          <p>
            Designer: UI/UX designer with a passion for designing beautiful and
            functional user experiences.
          </p>
          <p>
            Entrepreneur: started at least 5 companies (alone and with friends).
            Two of them were successful, one is on hold.
          </p>
          <p>I ❤️ coffee and cooking.</p>
          */}
          <div className='Logos'>
            <img src={SketchLogo} width='50' />
            <img src={FigmaLogo} width='50' />
            <img src={StudioLogo} width='50' />
            <img src={FramerLogo} width='50' />
            <img src={ReactLogo} width='50' />
            <img src={SwiftLogo} width='50' />
          </div>

          <a href=''>Test assignment</a>
          <svg
            width='100%'
            height='172'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path fill='white'>
              <animate
                repeatCount='indefinite'
                fill='freeze'
                attributeName='d'
                dur='10s'
                values='M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
                
                M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;
                
                M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
                
                M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z'></animate>
            </path>
          </svg>
        </div>
      </div>
    </div>
  );
};

<svg
  width='2560'
  height='200'
  viewBox='0 0 2560 200'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'>
  <path
    d='M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z'
    fill='white'
  />
</svg>;

export default IndexPage;
