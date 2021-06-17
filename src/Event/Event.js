import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Event.scss';
import Tag from '../Tag/Tag';
import Col from 'react-bootstrap/Col';

class Event extends Component {
    render() {
        return (
            <Col style={{
                maxWidth: this.props.width,
                width: this.props.width,
                minWidth: this.props.width,
                height: this.props.height
            }}>
                <div className={'event ' + this.props.color}>
                    <div className={'title'}>
                        Title
                    </div>
                    <div className={'desc'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tempus nunc, ac tristique augue. Vestibulum sagittis dolor et lectus elementum, in suscipit risus dignissim.
                    </div>
                    {/*<div className={'actions'}>*/}
                        {/*<Tag />*/}
                        {/*<Tag />*/}
                        {/*<Tag />*/}
                    {/*</div>*/}
                </div>
            </Col>
        )
    };
}

Event.propTypes = {
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};

Event.defaultProps = {
    color: 'green',
    width: '500px',
    height: '100%'
};

export default Event;
