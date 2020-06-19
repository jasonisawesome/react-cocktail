import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/cocktails/:id" exact component={SingleCocktail} />
        <Route path="*" exact component={Error} />
      </Switch>
    </div>
  );
}
