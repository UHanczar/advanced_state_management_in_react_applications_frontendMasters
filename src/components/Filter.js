import React, { Component } from 'react';

import './Filter.css';

class Filter extends Component {
  handleChange = event => {
    const { updateFilter } = this.props;
    const value = event.target.value;
    updateFilter(value);
  };

  render() {
    const { searchTerm } = this.props;
    return (
      <input
        className="Items-searchTerm"
        value={searchTerm}
        onChange={this.handleChange}
      />
    );
  }
}

export default Filter;
