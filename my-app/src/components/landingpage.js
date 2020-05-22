import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/footballer-soccer-iniesta-barcelona-spain-512.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Developer</h1>

              <hr />

              <p>
                HTML/CSS | Java | JavaScript | React.js | React.Native | Swift |
                NodeJS | MySQL
              </p>

              <div className="social-links">
                {/* LinkedIn Icon */}
                <a
                  href="http://Google.com"
                  rel="noopener noreferrer"
                  target=" blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* GitHub Icon */}
                <a
                  href="http://Google.com"
                  rel="noopener noreferrer"
                  target=" blank"
                  
                >
                  <i className="fa fa-github-square" aria-hidden="true"/>
                </a>

                {/* YouTube Icon */}
                <a
                  href="http://youtube.com"
                  rel="noopener noreferrer"
                  target=" blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>

                {/* FaceBook Icon */}
                <a
                  href="http://Google.com"
                  rel="noopener noreferrer"
                  target=" blank"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
