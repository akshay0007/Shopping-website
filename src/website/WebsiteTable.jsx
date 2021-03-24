import { Table, Jumbotron, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import { React, useEffect, useState } from 'react'
import axios from 'axios';
import SimpleListView from './SimpleListView.jsx';
import { Container, Row, Col } from 'reactstrap';
import { ApiData } from './ApiData'

const WebsiteTable = () => {

    const [listData, setListData] = useState([]);
    const effectData = useEffect(() => {
        apiCall();
    }, [setListData]);


    const apiCall = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/`).then(
            (response) => {
                console.log(response.data);
                setListData(response.data);
            },
            (error) => {
                console.log(error);
                alert("something went wrong");
            }
        );
    };



    const userIdClick = () => {
        const sortByuserId = listData.sort((a, b) => a.userId > b.userId ? 1 : -1);
        setListData([...sortByuserId])
    }

    const idClick = () => {
        const sortByid = listData.sort((a, b) => a.id > b.id ? 1 : -1);
        setListData([...sortByid])
    }

    const titleClick = () => {
        const sortByTitle = listData.sort((a, b) => a.title > b.title ? 1 : -1);
        setListData([...sortByTitle]);
    }

    const [dataItem, setDataItem] = useState({
        id: '',
        userid: '',
        title: ''
    });


    const changeClick = (event) => {
        const { name, value } = event.target;
        setDataItem({ [name]: value });
        console.log(name + "==" + value);
    }

    const addToList = () => {
        // const item = { userId: "userid2", id: "id1", title: "title1" }
        addItemInSetData(dataItem);
        // console.log(dataItem.userid + "=" + dataItem.id + "=" + dataItem.title);
    }

    const addItemInSetData = (item) => {
        setListData(() => [...listData], listData.push(item));
    }
    return (
        <Table class="table table-bordered">
            <thead>
                <tr class="table-secondary">
                    <th><Button color="primary" onClick={userIdClick}>sort by userid</Button></th>
                    <th><Button color="info" onClick={idClick}>sort by id</Button></th>
                    <th><Button class="btn btn-danger" onClick={titleClick}>sort by title</Button></th>
                </tr>
            </thead>
            <thead>
                <tr class="table-secondary">
                    <th >UserId</th>
                    <th >Id</th>
                    <th >Title</th>
                </tr>
            </thead>
            <tbody>
                {
                    listData.map((item) => (<SimpleListView key={item.id} rowData={item} />))
                }


                <tr scope="row" >
                    <td><input id="userid" name="userid" type="text" onChange={changeClick} /></td>
                    <td><input id="id" name="id" type="text" onChange={changeClick} /></td>
                    <td><input id="title" name="title" type="text" onChange={changeClick} /></td>
                    <td><Button onClick={addToList} class="info">Add</Button></td>
                </tr>


            </tbody>

        </Table>
    )
}

export default WebsiteTable;
