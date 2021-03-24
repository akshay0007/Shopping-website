import React from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';


const SimpleListView = ({ rowData }) => {
    return (
        <tr scope="row">
            <td>{rowData.userId}</td>
            <td>{rowData.id}</td>
            <td>{rowData.title}</td>
        </tr>
    )
}

export default SimpleListView;
