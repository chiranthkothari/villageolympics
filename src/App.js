import "./App.css";
import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from "./Components/Homepage/Navbar";
import SportsPage from "./Components/Sports/Sports";
import { Footer } from "./Components/Homepage/Footer";
import SportsDetails from "./Components/Sports/SportsDetails";
import ScrollToTop from "./Components/utils/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Nav />
          <Switch>
            <Route
              path={process.env.PUBLIC_URL + "/sports/:sport"}
              component={SportsDetails}
            ></Route>
            <Route
              path={process.env.PUBLIC_URL + "/sports"}
              component={SportsPage}
            ></Route>
            <Route
              path={process.env.PUBLIC_URL + "/"}
              component={Homepage}
            ></Route>
          </Switch>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
