import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <h1>This is React </h1>
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
        <section className="projects-grid">{this.toggleCategories()}</section>
      </div>
    );
  }
}
export default Projects;
