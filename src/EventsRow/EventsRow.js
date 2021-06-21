import React from 'react';
import PropTypes from 'prop-types';
import './EventsRow.scss';
import Event from '../Event/Event';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class EventsRow extends React.Component {

    smallRowHeight = 99;

    constructor(props) {
        super(props);
        this.state = {rowHeight: this.props.height};

        this.updateProps = this.updateProps.bind(this);
    }

    componentDidUpdate() {
        this.updateProps();
    }

    updateProps() {
        console.log('EventsRow.state.rowSize = ' + this.state.rowHeight);
        console.log('EventsRow.props.height = ' + this.props.height);
        if(this.state.rowHeight != this.props.height) {
            this.setState({rowHeight: this.props.height});
            console.log('EventsRow.state.rowSize = ' + this.state.rowHeight);
        }

    }

    render() {

        //TYPE 1
        if (this.props.type == 1) {
            return (
                <div className={'EventsRow ' + ((this.state.rowHeight <= this.smallRowHeight) ? 'simplified' : '')  }
                     style={{height: (this.state.rowHeight + 'px')}}>
                    <Row>
                        <div className={'row-name'}/>
                        <Event color={'green'}/>
                        <Event color={'red'} width={'250px'}/>
                        <Col>
                            <Row className="one-half">
                                <Event color={'blue'} width={'500px'}/>
                            </Row>
                            <Row className="one-half">
                                <Event color={'blue'} width={'250px'}/>
                                <Event color={'green'} width={'250px'}/>
                            </Row>
                        </Col>
                        <Event color={'green'} width={'500px'}/>
                        <Event color={'red'} width={'500px'}/>
                        <Col>
                            <Row className="one-half">
                                <Event color={'blue'} width={'500px'}/>
                            </Row>
                            <Row className="one-half">
                                <Event color={'blue'} width={'250px'}/>
                            </Row>
                        </Col>
                        <Event color={'blue'} width={'500px'}/>
                        <Col>
                            <Row className="one-third">
                                <Event color={'blue'} width={'500px'}/>
                            </Row>
                            <Row className="one-third">
                                <Event color={'blue'} width={'500px'}/>
                            </Row>
                            <Row className="one-third">
                                <Event color={'blue'} width={'500px'}/>
                            </Row>
                        </Col>
                    </Row>
                </div>
            )
        }
        else if (this.props.type == 2) {
            return (
                <div className={'EventsRow ' + ((this.state.rowHeight <= this.smallRowHeight) ? 'simplified' : '')  }
                     style={{height: (this.state.rowHeight + 'px')}}>
                    <Row>
                        <div className={'row-name'}/>
                        <Event color={'blue'}/>
                        <Col>
                            <Row className="one-half">
                                <Event color={'blue'} width={'500px'}/>
                            </Row>
                            <Row className="one-half">
                                <Event color={'blue'} width={'250px'}/>
                                <Event color={'green'} width={'250px'}/>
                            </Row>
                        </Col>
                        <Event color={'hidden'} width={'250px'}/>
                        <Col>
                            <Row className="one-half">
                                <Event color={'blue'} width={'500px'}/>
                            </Row>
                            <Row className="one-half">
                                <Event color={'blue'} width={'250px'}/>
                                <Event color={'green'} width={'250px'}/>
                            </Row>
                        </Col>
                        <Event color={'green'} width={'500px'}/>
                        <Event color={'red'} width={'500px'}/>
                        <Col>
                            <Row className="one-half">
                                <Event color={'blue'} width={'500px'}/>
                            </Row>
                            <Row className="one-half">
                                <Event color={'blue'} width={'250px'}/>
                            </Row>
                        </Col>
                        <Event color={'blue'} width={'500px'}/>

                    </Row>
                </div>
            )
        }
        else if (this.props.type == 3) {
            return (
                <div className={'EventsRow ' + ((this.state.rowHeight <= this.smallRowHeight) ? 'simplified' : '')  }
                     style={{height: (this.state.rowHeight + 'px')}}>
                    <Row>
                        <div className={'row-name'}/>
                        <Event color={'red'}/>
                        <Col>
                            <Row className="one-third">
                                <Event color={'blue'} width={'500px'}/>
                            </Row>
                            <Row className="one-third">
                                <Event color={'hidden'} width={'250px'}/>
                                <Event color={'green'} width={'250px'}/>
                            </Row>
                            <Row className="one-third">
                                <Event color={'blue'} width={'500px'}/>
                            </Row>
                        </Col>
                        <Event color={'red'} width={'250px'}/>
                        <Col>
                            <Row className="one-half">
                                <Event color={'blue'} width={'500px'}/>
                            </Row>
                            <Row className="one-half">
                                <Event color={'blue'} width={'250px'}/>
                                <Event color={'green'} width={'250px'}/>
                            </Row>
                        </Col>
                        <Event color={'green'} width={'500px'}/>
                        <Event color={'red'} width={'500px'}/>
                        <Col>
                            <Row className="one-half">
                                <Event color={'blue'} width={'500px'}/>
                            </Row>
                            <Row className="one-half">
                                <Event color={'blue'} width={'250px'}/>
                            </Row>
                        </Col>
                        <Event color={'blue'} width={'500px'}/>

                    </Row>
                </div>
            )
        }
        else {
            return (
                <div className={'EventsRow ' + ((this.state.rowHeight <= this.smallRowHeight) ? 'simplified' : '')  }
                     style={{height: (this.state.rowHeight + 'px')}}>
                    <Row>
                        <div className={'row-name'}/>
                        <Event color={'red'}/>
                        <Event color={'blue'} width={'500px'}/>
                        <Event color={'blue'} width={'500px'}/>
                        <Event color={'red'} width={'250px'}/>
                        <Event color={'green'} width={'500px'}/>
                        <Event color={'red'} width={'500px'}/>
                        <Event color={'blue'} width={'500px'}/>

                    </Row>
                </div>
            )
        }
    }
}

EventsRow.propTypes = {
    height: PropTypes.number,
    type: PropTypes.number
};

EventsRow.defaultProps = {
    type: 1
};

export default EventsRow;
