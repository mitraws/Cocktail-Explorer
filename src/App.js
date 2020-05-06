import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import ExploreCocktailsPage from "./Pages/ExploreCocktailsPage.js"
import HomePage from "./Pages/HomePage"

function App() {
  return (  
    <div className="App">
      <Navbar />
        <main>
          <Switch>
          {/* <Route exact path="/Discover/:searchtext?" component={DiscoverMoviesPage} />
          <Route path="/moviePage/:imdbID" component={MoviePage} /> */}
          <Route path="/explore" component={ExploreCocktailsPage} />
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="*" component={HomePage} /> */}
        </Switch>
        </main>
    </div>
  );
}

export default App;
