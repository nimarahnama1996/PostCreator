import React, { Fragment } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";




import Home from "./UserPost";
import CreatePost from "./UserPost/CreatePost";
import './App.css';




function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createPost" element={<CreatePost />} />
        </Routes>
      </div>
    </BrowserRouter>
    </Fragment>
  );
}

export default App;
