import React from "react";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.onFormSubmit}>
          <div className="input-group mb-3">
            <input
              className="form-field form-control input"
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              placeholder="How are you feeling today?"
              aria-label="How are you feeling?"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button
                className="btn btn-outline-secondary search-button"
                type="submit"
              >
                GO!
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
