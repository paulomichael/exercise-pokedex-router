import React, { Component } from "react";
import "./App.css";
import pokemons from "./data";
import Pokedex from "./Pokedex";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <nav>
      </nav>
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => (
              <div className="App">
                <h1> Pokedex </h1>
                <Pokedex {...routeProps} pokemons={pokemons} />
              </div >
            )}
          />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </Router>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
/*   return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );

*/
