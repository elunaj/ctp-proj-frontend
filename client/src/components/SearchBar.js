import React from "react";
class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="form-container">
        <form class="form-inline" onSubmit={this.onFormSubmit}>
          <div class="form-group mx-sm-3 mb-2">
            <input
              className="form-field"
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              placeholder='Try "I am feeling down"'
            />
          </div>
          <button type="submit" class="btn btn-primary submit-button">
            Find Movies
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
