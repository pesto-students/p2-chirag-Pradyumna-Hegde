import React, { Component } from "react";
import ShortLinkForm from "./ShortLinkForm";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/shared.css";

class Main extends Component {
  // state = {  }
  render() {
    return (
      <div className="col-lg-8 mx-auto p-3 py-md-5">
        <main>
          <h1 className="center-element">Cut Short your link here</h1>
          <p className="fs-5 for-p center-element">
            Make Short-links in a click by using highly secured and reliable
            website
          </p>
          <ShortLinkForm />
        </main>
      </div>
    );
  }
}

export default Main;
