import * as React from "react";
import "./index.css";
import Header from "../components/header";
import SketchLogo from "../images/logo-sketch.png";
import FigmaLogo from "../images/logo-figma.png";
import FramerLogo from "../images/logo-framer.png";
import StudioLogo from "../images/logo-studio.png";
import ReactLogo from "../images/logo-react.png";
import SwiftLogo from "../images/logo-swift.png";
import AngularLogo from "../images/logo-angular.png";
import MiLogo from "../images/logo-mi.png";
import HtmlLogo from "../images/logo-html.png";
import CssLogo from "../images/logo-css.png";
import ReduxLogo from "../images/logo-redux.png";
import TsLogo from "../images/logo-ts.png";
import JsLogo from "../images/logo-js.png";
import BootstrapLogo from "../images/logo-bootstrap.png";
import Valia from "../images/me.jpeg";
import Laptop from "../images/Laptop.png";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <div className='Container Hero'>
        <div className='HeroGroup'>
          <h1>
            <span className='Letters Name'>
              <span>V</span>
              <span>a</span>
              <span>l</span>
              <span>e</span>
              <span>n</span>
              <span>t</span>
              <span>y</span>
              <span>n</span>
              <span>a</span>
            </span>
            <span className='Letters Surname'>
              <span>K</span>
              <span>u</span>
              <span>z</span>
              <span>m</span>
              <span>y</span>
              <span>c</span>
              <span>h</span>
            </span>
          </h1>
          <p>Front End Developer, Designer and Entrepreneur</p>

          <div className='Logos'>
            <img src={AngularLogo} width='60' alt='Angular' />
            <img src={FigmaLogo} width='50' alt='Figma' />
            <img src={MiLogo} width='50' alt='Material UI' />
            <img src={ReactLogo} width='50' alt='React JS' />

            <img src={ReduxLogo} width='50' alt='Redux' />
            <img src={JsLogo} width='45' alt='JavaScipt' />
            <img src={TsLogo} width='70' alt='TypeScipt' />
            <img src={BootstrapLogo} width='50' alt='Bootstrap' />
          </div>
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

      <div className='Container Goal'>
        <div className='Group'>
          <h2>
            About
            <span class='Letters'>
              <span>m</span>
              <span>e</span>
            </span>
          </h2>
          <img
            src={Valia}
            className='mePic'
            width='120'
            alt='Valentyna Kuzmych'
          />
          <p>
            <strong>Programmer:</strong> Senior Front End Developer who focuses on
            writing clean, reusable, elegant and efficient code. Currently the
            main area of my interest is React and Svelte ecosystems.
          </p>
          <p>
            <strong>Designer:</strong> UI/UX designer with a passion for
            designing beautiful and functional user experiences.
          </p>
          <p>
            <strong>Entrepreneur:</strong> started at least 5 companies (alone
            and with friends). Two of them were successful.
          </p>
          <p>I ❤️ coffee and cooking.</p>
        </div>
      </div>

      <div className='Container WorkExperience'>
        <div className='HeroGroup'>
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
          <h2>
            Work
            <span className='Letters Experience'>
              <span>E</span>
              <span>x</span>
              <span>p</span>
              <span>e</span>
              <span>r</span>
              <span>i</span>
              <span>e</span>
              <span>n</span>
              <span>c</span>
              <span>e</span>
            </span>
          </h2>

          <div className='WorkWrapper'>
            <div className='Work'>
              <span className='date'>jan 2024 - now</span>
              <span class='position'>
                Senior Front End developer in{" "}
                <a href='https://qubit-labs.com/' target='_blank'>
                  Cubit labs
                </a>{" "}
                Work on US defi startup
              </span>
            </div>

            <div className='Work'>
              <span className='date'>2022 - dec 2023</span>
              <span class='position'>
                Senior Front End developer (Chief Specialist) in{" "}
                <a href='https://nazk.gov.ua/' target='_blank'>
                  NACP
                </a>{" "}
                [National Agency on Corruption Prevention]
              </span>
            </div>

            <div className='Work'>
              <span className='date'>2015 - 2021</span>
              <span className='position'>
                Senior Front End developer in{" "}
                <a href='https://www.ciklum.com/' target='_blank'>
                  Ciklum
                </a>
              </span>
            </div>
            <div className='Work'>
              <span className='date'>2014 - 2015</span>
              <span className='position'>
                Front End developer in{" "}
                <a href='https://www.livatek.com/' target='_blank'>
                  Kuadriga
                </a>{" "}
                [now Livatek]
              </span>
            </div>
            <div className='Work'>
              <span className='date'>till 2014 </span>
              <span className='position'>
                Web designer - I worked mostly as a web developer or designer in
                outsourcing companies or like a{" "}
                <a href='https://yellowlab.com.ua/' target='_blank'>
                  freelancer
                </a>
              </span>
            </div>
          </div>

          <a
            href='https://valiaku.github.io/cv/index-2.html'
            className='Button'>
            More details...
          </a>
        </div>
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

      <div className='Container Skills'>
        <h2>
          Knowledge and{" "}
          <span class='Letters'>
            <span>S</span>
            <span>k</span>
            <span>i</span>
            <span>l</span>
            <span>l</span>
            <span>s</span>
          </span>
        </h2>

        <div class='Wrapper'>
          <div className='Skillset-wrapper'>
            <div className='Skillset'>
              <div className='Skillset-bg Skillset-bg-0'></div>
              <div className='Skillset-card'>
                <h3 className='Skillset-category'>Web</h3>
                <ul>
                  <li>Cross browser attitude</li>
                  <li>Browser Performance</li>
                  <li>Adaptive/Responsive design</li>
                  <li>SEO optimization and analytics</li>
                  <li>Semantics and standards</li>
                </ul>
              </div>
            </div>
            <div className='Skillset'>
              <div className='Skillset-bg Skillset-bg-1'></div>
              <div className='Skillset-card'>
                <h3 className='Skillset-category'>Front End</h3>
                <ul>
                  <li>
                    TypeScript/JavaScript, React JS, React Native,
                    Angular2+/AngularJS, Gatsby.js, jQuery, three.js, StoryBook,
                    JS animations
                  </li>
                  <li>
                    CSS(Grid, flexbox model, responsive), Bootstrap Framework
                    (3,4,5), Material UI, Tailwind, CSS Preprocessors
                    (SASS/SCSS, LESS), HTML5/Canvas, BEM metodology, , CSS and
                    SVG animations
                  </li>
                  <li>
                    WordPress, Drupal, Joomla CMS, Sharepoint (SPFx), Shopify
                    (Liquid)
                  </li>
                  <li>git, NPM, Bower, Gulp, Webpack</li>
                </ul>
              </div>
            </div>

            <div className='Skillset'>
              <div className='Skillset-bg Skillset-bg-2'></div>
              <div className='Skillset-card'>
                <h3 className='Skillset-category'>Design</h3>
                <ul>
                  <li>Web site design</li>
                  <li>Design system</li>
                  <li>Application design</li>
                  <li>User experience and Usability</li>
                  <li>Prototyping</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='Container Footer'>
        <div className='Group'>
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
          <h2>
            Formal
            <span className='Letters'>
              <span>E</span>
              <span>d</span>
              <span>u</span>
              <span>c</span>
              <span>a</span>
              <span>t</span>
              <span>i</span>
              <span>o</span>
              <span>n</span>
            </span>
          </h2>
          <ul>
            <li>
              <a href='https://www.ukma.edu.ua/eng/' target='_blank'>
                National University of Kyiv-Mohyla Academy
              </a>{" "}
              Bachelor of Science (BS), Economics
            </li>
            <li>
              <a href='https://www.k-a-m-a.com/en/' target='_blank'>
                Kyiv Academy of Media Arts
              </a>{" "}
              Design and Visual Communications
            </li>
            <li>
              <span>Ukraine Information Institute </span> Web Technology
            </li>
          </ul>
          <img src={Laptop} width='500' alt='Laptop' className='macPic' />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
