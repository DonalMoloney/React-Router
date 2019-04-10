import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

const NewRoute = () =>{
  return(
    <div>
      <p> New Route </p>
    </div>
  );
}
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/new" component={NewRoute} /> //Essentially routing in a nutshell you create routes and components and link them togetehr
      </BrowserRouter>
    );
  }
}

export default App;
