import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Item.css';

class Item extends Component {
  render() {
    const { item, onCheckOff, onRemove } = this.props;
    return (
      <article className="Item">
        <label htmlFor={item.id}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={item.toggle}
            id={item.id}
          />
          {item.value}
        </label>
        <button className="Item-remove" onClick={item.remove}>
          Remove
        </button>
      </article>
    );
  }
}

Item.propTypes = {
  packed: PropTypes.bool,
};

Item.defaultProps = {
  packed: false,
};

export default Item;