import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-1.appspot.com/o/circle-cropped.png?alt=media&token=ef43b632-cf28-40b2-832c-eec5990c88f0"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Developer</h1>

              <p>Programming Lanaguages:</p>
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
                  <i className="fa fa-github-square" aria-hidden="true" />
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
// document.oncontextmenu = function () {
//   return false;
// };
export default Landing;