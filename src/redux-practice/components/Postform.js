import React, { Component } from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createPost} from '../actions/PostAction';

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add post</h1>
        <form onSubmit={this.onSubmit}>
          <label>Title:</label>
          <br />
          <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
          <br /><br />
          <label>Body:</label>
          <br />
          <textarea name="body" onChange={this.onChange} value={this.state.body}/>
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

Postform.propTypes = {
  createPost: PropTypes.func.isRequired,
}

export default connect(null, {createPost})(Postform);