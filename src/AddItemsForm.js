import React from 'react';
import ListItems from './ListItems.js'

class AddItemsForm extends React.Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  add = event => {
    event.preventDefault();
    this.props.addItem(this.state.value);
  }
  

  render() {
    return (
      <React.Fragment>
      <form onSubmit={this.add}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
      </form>

      <ListItems items={this.props.items}/>
      </React.Fragment>      
    )
  }
}

export default AddItemsForm
