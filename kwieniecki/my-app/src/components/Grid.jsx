import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Grid.css';

export default class News extends Component {
    render() {
        return (
            <div>
                <Image src="assets/solar-system.png" className="header-image img" />
                <Grid>
                    <h2>Second grid</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                            <Image src="assets/blue-planet.png" />
                            <p>Bootstrap is a powerful tool for RWD.</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}