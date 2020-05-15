import React, { Component } from "react";

export class ToneMessage extends Component {
  render() {
    const tone = JSON.parse(localStorage.getItem("tone"));

    switch (tone) {
      case "sadness":
        return (
          <div className="container">
            <div className="tone-message-container">
              <h1 className="results-hero-heading">Hey there!</h1>
              <p className="results-hero-paragraph">
                Hey there! We’ve noticed that you're feeling low, and thats
                okay, here are some movies to lift your spirits!
              </p>
            </div>
          </div>
        );
      case "anger":
        return (
          <div className="container">
            <div className="tone-message-container">
              <h1 className="results-hero-heading">
                Breathe in... Breathe out.
              </h1>
              <p className="results-hero-paragraph">
                As difficult as your day may have been, anger is an acid that
                can do more harm to the vessel in which it is stored, than to
                anything on which it is poured. We hope these movies cheer you
                up.
              </p>
            </div>
          </div>
        );
      // case 3:
      //     return <FormConfirmation nextStep={this.nextStep} prevStep={this.prevStep} values={values} />;
      default:
        return (
          <div className="container">
            <div className="tone-message-container">
              <h1 className="results-hero-heading">Hello!</h1>
              <p className="results-hero-paragraph">
                After analyzing your tone we came up with some movies for you!
                Here are a list of movies that you may be in the mood for
              </p>
            </div>
          </div>
        );
    }
  }
}

export default ToneMessage;
