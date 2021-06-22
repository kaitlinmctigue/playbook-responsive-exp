import React from 'react';
import PropTypes from 'prop-types';
import './VerticallyResponsiveForReal.scss';
import EventsRow from '../EventsRow/EventsRow';
import Container from 'react-bootstrap/Container';

class VerticallyResponsiveForReal extends React.Component {

    constructor(props) {

        // const rows = [1,2,4,1,3,2,3,4];
        const rows = [1,2,4,1];

        super(props);
        this.state = {
            rowSize: 'auto',
            rows: rows
        };

        this.setRowHeight = this.setRowHeight.bind(this);
        this.setRowHeight();
    }

    componentDidMount() {
        this.setRowHeight();
    }

    setRowHeight() {
        const count = this.state.rows.length;
        let height;

        if (count < 8) {
            height = (1 / count) + 'vh';
        }
        this.setState({rowSize: height});
        console.log(this.state.rowSize);

    }

    render() {
        return (
            <div className="VerticallyResponsiveForReal">
                <Container fluid>
                    <p>
                        VerticallyResponsiveForReal
                    </p>
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
