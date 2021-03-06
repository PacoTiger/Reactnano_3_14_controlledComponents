import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddItemsForm from './AddItemsForm.js';

class App extends React.Component {
  state = {
    items: [],
  } 

  addItem = value => {
    this.setState(oldState => ({
      items: [...oldState.items, value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <AddItemsForm addItem={this.addItem} items={this.state.items}/>

        <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
          Delete Last Item
        </button>

      
      </div>
    );
  }
}

export default App;
