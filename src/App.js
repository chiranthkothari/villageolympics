import "./App.css";
import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from "./Components/Homepage/Navbar";
import SportsPage from "./Components/Sports/Sports";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/sports" component={SportsPage}></Route>
          <Route path="/" component={Homepage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
