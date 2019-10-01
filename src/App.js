import React, { Component } from "react"
import {Provider} from 'react-redux'
import store from './store'
import Post from "./components/Post"
import FetchPost from './components/FetchPost'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        App js
        <div>
          <h1>Starting redux</h1>
          {/* <UploadPost/> */}
          <FetchPost/>
          <Post/>
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
