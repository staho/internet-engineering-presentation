import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h1>This is Jumbotron element!</h1>
                    <p>This is a big box for an important information / attract attention</p>
                    <h2>Welcome to React-Bootstrap & React-Routing</h2>
                    <p>I'll show how to use Bootstrap and Routing in React Framework to build website!</p>
                    <h4>Here we can see bootstrap grid for example</h4>
                    <Link to="/grid">
                        <Button bsStyle="primary">Show next</Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/dog-image.jpg" circle className="profile-pic" />
                        <h3>I'm a dog</h3>
                        <p>I'm a dog inside bootstrap grid! </p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/funky-cat.jpg" circle className="profile-pic" />
                        <h3>I'm a cat</h3>
                        <p>I'm funky cat inside bootstrap grid!</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/sad-frog.jpg" circle className="profile-pic" />
                        <h3>I'm a frog</h3>
                        <p>I'm a sad frog inside bootstrap grid!</p>
                    </Col>
                    <h2>As you can see grid automatically fit for content inside columns.</h2>
                    <h2>We can see that in inspect mode in our browser</h2>
                </Row>
            </Grid>
        )
    }
}