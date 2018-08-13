import React, { Component } from "react";
import { Provider } from "react-redux";
import PostForm from "./components/Postform";
import Posts from "./components/Posts";
import Store from './components/Store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;