import './styles/App.scss';
import Container from 'react-bootstrap/Container';
import EventsRow from './EventsRow/EventsRow';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <Navbar expand="lg">
              <Navbar.Brand href="#home">Playbook Playground</Navbar.Brand>
              {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
              {/*<Navbar.Collapse id="basic-navbar-nav">*/}
                  {/*<Nav className="mr-auto">*/}
                      {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                      {/*<Nav.Link href="#link">Link</Nav.Link>*/}
                      {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                          {/*<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                          {/*<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                          {/*<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                          {/*<NavDropdown.Divider />*/}
                          {/*<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                      {/*</NavDropdown>*/}
                  {/*</Nav>*/}
                  {/*<Form inline>*/}
                      {/*<FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
                      {/*<Button variant="outline-success">Search</Button>*/}
                  {/*</Form>*/}
              {/*</Navbar.Collapse>*/}
          </Navbar>

      </header>

        <div className={'schedule'}>
            <EventsRow />
            {/*<EventsRow />*/}
            {/*<EventsRow />*/}
        </div>
    </div>
  );
}

export default App;
