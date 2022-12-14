import React, { Component } from 'react';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import AllPost from './components/AllPost';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PostDetails from './components/PostDetails';



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <NavBar/>
       <main className="container">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/add" element={<CreatePost/>} />
            <Route path="/all" element={<AllPost/>} />
            <Route path="/edit/:id" element={<EditPost/>} />
            <Route path="//post/:id" element={<PostDetails/>} />
        </Routes>
      </main>
    </BrowserRouter>


    )
  }
}
