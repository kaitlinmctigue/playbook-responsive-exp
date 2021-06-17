import React from 'react';
import PropTypes from 'prop-types';
import './RowsVerticallyResponsive.scss';
import EventsRow from '../EventsRow/EventsRow';
import Container from 'react-bootstrap/Container';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class RowsVerticallyResponsive extends React.Component {

    constructor(props) {
        super(props);
        this.state = {rowSize: 100};

        this.changeRowSize = this.changeRowSize.bind(this);
        this.renderRows = this.renderRows.bind(this);
    }

    renderRows(count) {
        var rowType = 1;
        var rows = [];

        for (var i = 0; i < count; i++) {
            rows.push(<EventsRow height={this.rowSize} type={rowType} />);
            rowType++;
            if (rowType > 3) {
                rowType = 1;
            }
        }
        return(rows);
    }

    changeRowSize(size) {
        console.log(size);
        this.setState({rowSize: size});
    }

    render() {
        return (
            <div className="RowsVerticallyResponsive">
                <Container fluid>
                    <p>
                        Vertically Responsive rows
                    </p>
                    <DropdownButton
                        title={'Row Height: ' + this.state.rowSize + 'px'}
                        id="dropdown-menu"
                    >
                        <Dropdown.Item onSelect={()=> this.changeRowSize(75)} eventKey="1">Small</Dropdown.Item>
                        <Dropdown.Item onSelect={()=> this.changeRowSize(100)} eventKey="2">Medium (100px)</Dropdown.Item>
                        <Dropdown.Item onSelect={()=> this.changeRowSize(150)} eventKey="3">Large</Dropdown.Item>
                    </DropdownButton>
                </Container>
                <div className={'schedule'}>
                    {/*<EventsRow height={this.rowSize} type={1} />*/}
                    {this.renderRows(25)}
                </div>
            </div>
        );
    }
}

RowsVerticallyResponsive.propTypes = {};

RowsVerticallyResponsive.defaultProps = {};

export default RowsVerticallyResponsive;
