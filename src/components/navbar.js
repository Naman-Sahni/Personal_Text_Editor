import React, {useState} from "react";
import PropTypes from 'prop-types'

export default function Navbar(props) {

  const [modeText,setModeText] = useState("Enable Dark Mode")

  return (
    <>
      <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="mx-2">
              <img src = {props.mode==="dark"? "dark-favicon-32x32.png": "light-favicon-32x32.png"} />
          </a>
          <a className="navbar-brand" href="#">Text Manipulator</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                    Home
                    </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changeMode}/>
              <label className={`form-check-label text-${props.mode=="light"?"dark":"light"}`} text- htmlFor="flexSwitchCheckDefault">{props.mode=="light"?"Enable Dark Mode":"Disable Dark Mode"}</label>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired
}

// Navbar.defaultProps = {
//     title: "Navbar"
// }