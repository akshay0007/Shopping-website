import { React, useEffect } from 'react'
import { Jumbotron } from 'reactstrap'

export default function WebNewView() {
    const effect = useEffect(() => {
        document.title = "webnewview ";
    }, []);
    return (
        <div>
            <Jumbotron>
                <h1 >Hello, world!</h1>
                <p className="lead">newvew</p>
                <hr className="my-2" />
            </Jumbotron>
        </div>
    )
}
