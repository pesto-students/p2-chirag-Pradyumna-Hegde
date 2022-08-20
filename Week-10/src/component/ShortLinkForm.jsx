import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/shared.css";

class ShortLinkForm extends Component {
  state = {
    text: "",
    links: {},
    sharableShortLink: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.text) alert(`Input is empty..`);
    else {
      const shortified = async () => {
        const result = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${this.state.text}`
        );
        const data = await result.json();
        this.setState({ links: data.result });
        this.setState({ sharableShortLink: data.result.full_share_link });
      };
      shortified();
    }
  };

  handleChange = (e) => {
    const text = e.currentTarget.value;
    this.setState({ text });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <section className="container text-center row mt-5">
            <div className="col-9">
              <input
                type="url"
                placeholder="Place long link here..."
                className="form-control form-control-lg medium-border"
                value={this.state.text}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-3">
              <button className="btn btn-primary btn-lg medium-border">
                cut-short
              </button>
            </div>
          </section>
        </form>

        <div className="container text-center row badge bg-light my-5 py-5 text-color">
          <h5>
            Sharable Short Code:
            <span className="badge bg-primary p-2 m-3">
              {this.state.sharableShortLink}
            </span>
          </h5>
        </div>
      </React.Fragment>
    );
  }
}

export default ShortLinkForm;
