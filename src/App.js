import { HashRouter as Router, Route, Link } from 'react-router-dom';

import './styles/App.scss';

import RowsVerticallyResponsive from './RowsVerticallyResponsive/RowsVerticallyResponsive';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="App">
      <Router basename='/'>
          <header className="App-header">

              <Navbar fixed="top" expand="lg">
                  <Navbar.Brand>Playbook Playground</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="mr-auto">
                          {/*<Nav.Link href="/">Vertically Responsive</Nav.Link>*/}
                          {/*<Nav.Link href="/test">Test</Nav.Link>*/}
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>

          </header>

          {/*<RowsVerticallyResponsive/>*/}

          <Route exact path="/">
              <RowsVerticallyResponsive/>
          </Route>
          <Route path="/test">
              other options
          </Route>

      </Router>
    </div>
  );
}

export default App;
