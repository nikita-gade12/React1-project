

import About from "./Component/About";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import "./App.css"
import { BrowserRouter as Router,Route,Switch  } from "react-router-dom";

import Order from "./Component/Order";

function App() {
  return (
    <Router>
      <div className="app">
      <Navbar/>
      <div className="content">
    <Switch>
      <Route exact path="/">
        <Home />

      </Route>
      <Route exact path="/about">
      
        <About />
</Route>
      <Route path="/order">
        <Order/>

      </Route>
    </Switch>

      </div>
      
    
    </div>
    </Router>
  );
}

export default App;
