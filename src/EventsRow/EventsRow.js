import React from 'react';
import PropTypes from 'prop-types';
import './EventsRow.scss';
import Event from '../Event/Event';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EventsRow = () => (
  <div className="EventsRow">
      <Row>
          <Event color={'green'}/>
          <Event color={'red'} width={'250px'}/>
          {/*<Col>*/}
              {/*<Row>*/}
                  {/*<Event color={'blue'} width={'500px'}/>*/}
              {/*</Row>*/}
              {/*<Row>*/}
                  {/*<Event color={'blue'} width={'250px'}/>*/}
              {/*</Row>*/}
          {/*</Col>*/}
          <Event color={'green'} width={'500px'}/>
          <Event color={'red'} width={'500px'}/>
          <Event color={'blue'} width={'500px'}/>
      </Row>
  </div>
);

EventsRow.propTypes = {};

EventsRow.defaultProps = {};

export default EventsRow;
