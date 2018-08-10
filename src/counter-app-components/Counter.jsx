import React, { Component } from "react";

export default class Counter extends Component {
  
  render() {
    //destructure arguments
    const {onIncrement, onDecrement, onDelete, counter} = this.props;
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-info btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => onDelete(counter)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  formatValue() {
    const value = this.props.counter.value;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes +=
      this.props.counter.value === 0
        ? "warning"
        : this.props.counter.value > 0
          ? "primary"
          : "secondary";
    return classes;
  }
}
