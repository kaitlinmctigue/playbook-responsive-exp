import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './styles/App.scss';

import RowsVerticallyResponsive from './RowsVerticallyResponsive/RowsVerticallyResponsive';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="App">
      <Router>
          <header className="App-header">

              <Navbar fixed="top" expand="lg">
                  <Navbar.Brand href="#home">Playbook Playground</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="mr-auto">
                          <Nav.Link href="/vert">Vertically Responsive</Nav.Link>
                          <Nav.Link href="/test">Test</Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>

          </header>

          <Switch>
              <Route exact path="/vert">
                  <RowsVerticallyResponsive/>
              </Route>
          </Switch>

      </Router>
    </div>
  );
}

export default App;
