import React from 'react';
import PropTypes from 'prop-types';
import './RowsVerticallyResponsive.scss';
import EventsRow from '../EventsRow/EventsRow';
import Container from 'react-bootstrap/Container';

class RowsVerticallyResponsive extends React.Component {

    renderRows(count) {
        var rowType = 1;
        var rows = [];

        for (var i = 0; i < count; i++) {
            rows.push(<EventsRow type={rowType} />);
            rowType++;
            if (rowType > 3) {
                rowType = 1;
            }
        }
        return(rows);
    }

    render() {
        return (
            <div className="RowsVerticallyResponsive">
                <Container fluid>
                    <p>
                        Vertically Responsive rows
                    </p>
                </Container>
                <div className={'schedule'}>
                    {this.renderRows(25)}
                </div>
            </div>
        );
    }
}

RowsVerticallyResponsive.propTypes = {};

RowsVerticallyResponsive.defaultProps = {};

export default RowsVerticallyResponsive;
