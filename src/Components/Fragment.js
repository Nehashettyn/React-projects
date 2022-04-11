import React, { Component } from "react";

class Fragment extends Component {
  render() {
    return (
      // Instead of extra <div> tag , we can use <React.Fragment>
      //Fragments let you group a list of children without adding extra nodes to the DOM.
      //You can also use it with the shorthand <></> syntax
      <React.Fragment>
        <h3>Demo for React Fragment</h3>
      </React.Fragment>
    );
  }
}

export default Fragment;
