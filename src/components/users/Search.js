import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          onChange={this.onChange}
        />
        <input
          type="text"
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
          onSubmit={this.onSubmit}
        />
      </form>
    );
  }
}

export default Search;
