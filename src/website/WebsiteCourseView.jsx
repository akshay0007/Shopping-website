import { React, useEffect,memo } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'

const WebsiteCourseView = ({ course, update }) => {
    const effect = useEffect(() => {
        console.log("api call");
    }, []);

    const callDelete = (e) => {
        update(course.id);
        console.log("call coming==" + course.id);
    };
    return (
        <Card body>
            <CardTitle>{course.title}</CardTitle>
            <CardText>{course.body}</CardText>
            <Button variant="primary" onClick={callDelete}>delete</Button>
        </Card>
    )
};
export default WebsiteCourseView;
// componentdidmount,componetdidupdate,componentwillunmont