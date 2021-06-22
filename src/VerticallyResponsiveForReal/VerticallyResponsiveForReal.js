import React from 'react';
import PropTypes from 'prop-types';
import './VerticallyResponsiveForReal.scss';
import EventsRow from '../EventsRow/EventsRow';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class VerticallyResponsiveForReal extends React.Component {

    constructor(props) {

        // const rows = [1,2,4,1,3,2,3,4];
        const rows = [1,2,4];

        super(props);
        this.state = {
            rowSize: 'auto',
            rows: rows
        };

        this.setRowHeight = this.setRowHeight.bind(this);
        this.addRows = this.addRows.bind(this);
        this.setRowHeight();
    }

    componentDidMount() {
        this.setRowHeight();
    }

    setRowHeight() {
        const count = this.state.rows.length;
        let height;

        if (count < 8) {
            height = (1 / (count + 2));
        }
        else {
            height = 100;
        }
        this.setState({rowSize: height});
        console.log(this.state.rowSize);

    }

    addRows() {
        let rows = this.state.rows;
        const max = 4;
        const min = 1;
        let rand = Math.floor(Math.random() * (max - min + 1) + min);

        rows.push(rand);
        this.setState({rows: rows});

        setTimeout(() => {
            this.setRowHeight();
        }, 1);

    }

    render() {
        return (
            <div className="VerticallyResponsiveForReal">
                <Container fluid>
                    <p>
                        Vertically responsive rows.
                        If there are less than 8 rows, the row height is calculated as a percentage of the viewer height.
                        If there are more than 8, the row height is 100px.
                    </p>
                    <Button variant="primary" onClick={this.addRows}>Add Row +</Button>{' '}
                </Container>
                <div className={'schedule'}>

                    {this.state.rows.map(item => (
                        <EventsRow type={item} height={this.state.rowSize} />
                    ))}

                </div>
            </div>
        );
    }
}

VerticallyResponsiveForReal.propTypes = {};

VerticallyResponsiveForReal.defaultProps = {};

export default VerticallyResponsiveForReal;
