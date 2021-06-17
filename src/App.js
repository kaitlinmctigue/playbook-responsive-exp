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
                  <Navbar.Brand href="/playbook-responsive-exp/vertical">Playbook Playground</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="mr-auto">
                          <Nav.Link href="/playbook-responsive-exp/vertical">Vertically Responsive</Nav.Link>
                          <Nav.Link href="/playbook-responsive-exp/test">Test</Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>

          </header>

          <RowsVerticallyResponsive/>

          {/*<Switch>*/}
              {/*<Route exact path="/playbook-responsive-exp/vertical">*/}
                  {/*<RowsVerticallyResponsive/>*/}
              {/*</Route>*/}
              {/*<Route exact path="/playbook-responsive-exp/test">*/}
                  {/*other options*/}
              {/*</Route>*/}
          {/*</Switch>*/}

      </Router>
    </div>
  );
}

export default App;
