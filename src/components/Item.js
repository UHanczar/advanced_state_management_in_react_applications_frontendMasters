import React, { Component } from 'react';

import './Item.css';
import { toggleItem, removeItem } from '../actions';

class Item extends Component {
  
  handleChange = () => {
    const { item } = this.props;
    
    toggleItem(item);
  }
  
  handleRemove = () => {
    const { item } = this.props;
    
    removeItem(item);
  }
  
  render() {
    const { item } = this.props;
    return (
      <article className="Item">
        <label htmlFor={item.id}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={this.handleChange}
            id={item.id}
          />
          {item.value}
        </label>
        <button className="Item-remove" onClick={this.handleRemove}>
          Remove
        </button>
      </article>
    );
  }
}

export default Item;
