import { HashRouter as Router, Route, Link } from 'react-router-dom';

import './styles/App.scss';

import RowsVerticallyResponsive from './RowsVerticallyResponsive/RowsVerticallyResponsive';
import RowsWithEventsFixedHeight from './RowsWithEventsFixedHeight/RowsWithEventsFixedHeight';
import VerticallyResponsiveForReal from './VerticallyResponsiveForReal/VerticallyResponsiveForReal';
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
                          <Link to={'/fixed-height'}>Fixed Event Height</Link>
                      </Nav>
                      <Nav>
                          <Link to={'/vertically-responsive'}>Vertically Responsive</Link>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>

          </header>

          {/*on the same page for now - not using routing*/}
          {/*<RowsVerticallyResponsive/>*/}
          {/*<RowsWithEventsFixedHeight/>*/}

          <Route exact path="/" component={RowsVerticallyResponsive} />
          <Route path="/fixed-height" component={RowsWithEventsFixedHeight} />
          <Route path="/vertically-responsive" component={VerticallyResponsiveForReal} />

      </Router>
    </div>
  );
}

export default App;
