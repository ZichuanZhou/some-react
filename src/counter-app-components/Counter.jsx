import React, { Component } from "react";

export default class Counter extends Component {
	
  state = {
    count: 0
	};
	
	handleIncrement = (product) => {

		this.setState({
			count: this.state.count + 1
		})
	}

	handleDecrement = () => {
		this.setState({
			count: this.state.count - 1
		});
	}

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={()=>this.handleIncrement({id:1})} className="btn btn-secondary btn-sm">+</button> 
				<button onClick={this.handleDecrement} className="btn btn-secondary btn-sm">-</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}
