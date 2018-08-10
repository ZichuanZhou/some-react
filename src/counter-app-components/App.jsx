import React, { Component } from "react";
import Counter from "./Counter";
import Navbar from "./Navbar";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counter => {
    const counters = this.state.counters.filter(c => c.id !== counter.id);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = this.state.counters;
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = this.state.counters;
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <button
          onClick={() => this.handleReset()}
          className="btn btn-primay btn-sm m2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
