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
      case "fear":
        return (
          <div className="container">
            <div className="tone-message-container">
              <h1 className="results-hero-heading">Hi there.</h1>
              <p className="results-hero-paragraph">
               “Fear is the main source of superstition, and one of the main 
               sources of cruelty. To conquer fear is the beginning of wisdom.”
                — Bertrand Russell
              </p>
                We hope these movies help you overcome your fear.
            </div>
          </div>
        );
      case "joy":
        return (
          <div className="container">
            <div className="tone-message-container">
              <h1 className="results-hero-heading">Hey there!</h1>
              <p className="results-hero-paragraph">
                “Joy does not simply happen to us. We have to choose joy 
                and keep choosing it every day.”
                - Henri Nouwen
              </p>
              <p>We think the movies below will help you maintain
              your cheery mood.</p>
            </div>
          </div>
        );
      case "analytical":
        return (
          <div className="container">
            <div className="tone-message-container">
              <h1 className="results-hero-heading">Hey there!</h1>
              <p className="results-hero-paragraph">
                "The important thing is not to stop questioning. Curiosity 
                has its own reason for existing." 
                - Albert Einstein
              </p>
              <p>We believe the films below will challenge your curiosity.</p>
            </div>
          </div>
        );
      case "confident":
        return (
          <div className="container">
            <div className="tone-message-container">
              <h1 className="results-hero-heading">Hey there!</h1>
              <p className="results-hero-paragraph">
                “Confidence is contagious. So is lack of confidence.”
                – Vince Lombardi
              </p>
              <p>Watch one of the movies below to maintain your
              cool demeanor.</p>
            </div>
          </div>
        );
      case "tentative":
        return (
          <div className="container">
            <div className="tone-message-container">
              <h1 className="results-hero-heading">Hey there!</h1>
              <p className="results-hero-paragraph">
                “Life is either a daring adventure or nothing at all.”
                ― Helen Keller
              </p>
              <p>
              Take a risk and watch one of the movies below!
              </p>
            </div>
          </div>
        );
      default:
        return (
          <div className="container">
            <div className="tone-message-container">
              <h1 className="results-hero-heading">Hello!</h1>
              <p className="results-hero-paragraph">
                After analyzing your tone we came up with some movies for you!
                Here are a list of movies that you may be in the mood for.
              </p>
            </div>
          </div>
        );
    }
  }
}

export default ToneMessage;
