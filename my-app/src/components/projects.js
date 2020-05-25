import React, { Component } from "react";
import {Tabs,Tab,Grid,Cell,Card, CardTitle,CardActions, Button,CardMenu,IconButton, CardText,} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ mindwidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center /cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>This is just a text dummy</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="Share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ mindwidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center /cover",
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>This is just a text dummy</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="Share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Swift</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is Java</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is NodeJS</h1>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div>
          <h1>This is MySQL</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabID) => this.setState({ activeTab: tabID })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Swift</Tab>
          <Tab>Java</Tab>
          <Tab>NodeJS</Tab>
          <Tab>MySQL</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;
