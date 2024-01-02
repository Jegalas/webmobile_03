import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import NavbarComponent from "./Navbar";
import { Container } from "react-bootstrap";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <NavbarComponent />
          <Routes>
            <Route exact element={<Home />} path="/" />
            <Route exact element={<Contact />} path="/contact" />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
