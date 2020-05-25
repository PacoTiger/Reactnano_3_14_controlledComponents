import React from 'react';
import Item from './Item.js';

class ListItems extends React.Component {
  render() {
    console.log("iniciando ListItems, this.props> ", this.props," this.state> ", this.state);
    const { items } = this.props.items;
    return (
      <React.Fragment>
      <div>
        <p className="items">Items</p>
        <ol className="item">{this.props.items.map((item, index) => <Item key={index} item={item} />)}</ol>
      </div>
      </React.Fragment>
    )
  }
}

export default ListItems
