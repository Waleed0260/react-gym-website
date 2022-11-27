import React, {useState} from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import { Link } from "react-router-dom";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header" id="header">
      <img src={logo} alt="" className="logo" />

      {menuOpened === false && mobile === true ? (

        <div
        style = {{
          backgroundColor: "var(--appColor)",
          padding: "0.5rem",
          borderRadius: "5px"
        }}

        onClick={()=> setMenuOpened(true)}
        >
          <img src={bars} alt="" style={{width: '1.5rem', height: '1.5rem'}}/>
        </div>
      ) : (
        <nav>
          <ul className="header-menu">
            <li>
              <Link to="/" className="link-1" onClick={()=> setMenuOpened(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/About" className="link-2" onClick={()=> setMenuOpened(false)}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="link-3" onClick={()=> setMenuOpened(false)}>
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/Plans" className="link-4" onClick={()=> setMenuOpened(false)}>
                Plans
              </Link>
            </li>
            <li>
              <Link to="/Testimonials" className="link-5" onClick={()=> setMenuOpened(false)}>
                Testimonials
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;
