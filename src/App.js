import { HashRouter as Router, Route, Link } from 'react-router-dom';

import './styles/App.scss';

import RowsVerticallyResponsive from './RowsVerticallyResponsive/RowsVerticallyResponsive';
import RowsWithEventsFixedHeight from './RowsWithEventsFixedHeight/RowsWithEventsFixedHeight';
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
                      {/*<Nav className="mr-auto">*/}
                          {/*<Nav.Link href="/">Custom Height</Nav.Link>*/}
                          {/*<Nav.Link href="/test/">Fixed Event Height</Nav.Link>*/}
                      {/*</Nav>*/}
                      <Nav>
                          <Link to={'/'}>Custom Height</Link>
                      </Nav>
                      <Nav>
                          <Link to={'/test'}>Fixed Event Height</Link>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>

          </header>

          {/*on the same page for now - not using routing*/}
          {/*<RowsVerticallyResponsive/>*/}
          {/*<RowsWithEventsFixedHeight/>*/}

          <Route exact path="/" component={RowsVerticallyResponsive} />
          <Route path="/test" component={RowsWithEventsFixedHeight} />

      </Router>
    </div>
  );
}

export default App;
