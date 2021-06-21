import React from 'react';
import PropTypes from 'prop-types';
import './RowsWithEventsFixedHeight.scss';
import EventsRow from '../EventsRow/EventsRow';
import Container from 'react-bootstrap/Container';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class RowsWithEventsFixedHeight extends React.Component {

    constructor(props) {
        super(props);

        this.renderRows = this.renderRows.bind(this);
    }

    renderRows(count, height) {
        var rowType = 1;
        var rows = [];

        for (var i = 0; i < count; i++) {
            rows.push(<EventsRow height={'auto'} type={rowType} />);
            rowType++;
            if (rowType > 3) {
                rowType = 1;
            }
        }
        return(rows);
    }

    render() {
        return (
            <div className="RowsWithEventsFixedHeight">
                <Container fluid>
                    <p>
                        Vertically responsive rows with fixed height events
                    </p>
                </Container>
                <div className={'schedule'}>
                    <EventsRow type={1} />
                    <EventsRow type={2} />
                    <EventsRow type={4} />
                    <EventsRow type={1} />
                    <EventsRow type={3} />
                    <EventsRow type={2} />
                    <EventsRow type={3} />
                    <EventsRow type={4} />
                    {/*<EventsRow height={this.state.rowSize} type={1} />*/}
                    {/*<EventsRow height={this.state.rowSize} type={1} />*/}
                    {/*<EventsRow height={this.state.rowSize} type={2} />*/}
                    {/*<EventsRow height={this.state.rowSize} type={1} />*/}
                    {/*<EventsRow height={this.state.rowSize} type={3} />*/}
                    {/*<EventsRow height={this.state.rowSize} type={2} />*/}
                    {/*<EventsRow height={this.state.rowSize} type={3} />*/}
                    {/*<EventsRow height={this.state.rowSize} type={1} />*/}


                    {/*{this.renderRows(25, this.state.rowSize)}*/}
                </div>
            </div>
        );
    }
}

RowsWithEventsFixedHeight.propTypes = {};

RowsWithEventsFixedHeight.defaultProps = {};

export default RowsWithEventsFixedHeight;
