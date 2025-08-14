import { Link } from "gatsby";
import React from "react";
import logo from "../images/logo-designcode.svg";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  render() {
    return (
      <div
        className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img
              src={logo}
              width="30"
            />
          </Link>
          <Link to="https://drive.google.com/file/d/1rRPO3uhxlCtbLS5LK1LiZHwua_qaxpyx/view">
            PDF CV
          </Link>

          <Link to="https://valiaku.github.io/cv/index-2.html">
            Detailed CV
          </Link>

          <Link to="https://www.linkedin.com/in/valentinakuzmych/">
            LinkedIn Profile
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
