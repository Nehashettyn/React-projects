// Another demo for React Fragment

import React, { Component } from "react";
import Columns from "./Columns";

class TableDemo extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TableDemo;
