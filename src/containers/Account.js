import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import GwizzlyCard from '../Components/UI/Card'
import './Account.css'

const Account = () => {
    return (
        <Container>
            <Row>
                <Col md="auto">
                    <ul className="list-unstyled Menu">
                        <li>Payment Options</li>
                        <li>My Orders
                            <ul className="list-unstyled my-1">
                                <li>Returns</li>
                                <li>Cancelations</li>
                            </ul>
                        </li>
                        <li>Reviews</li>
                        <li>Wishlist</li>
                    </ul>
                </Col>

                <Col>
                    <h1 className="mt-5 mb-3 page-name">MANAGE MY ACCOUNT</h1>
                    <Row>
                        <Col  md={5}>
                            <GwizzlyCard>
                            <p>Personal Profile</p>
                            </GwizzlyCard>
                        </Col>
                        <Col>
                            <Card  className="mt-4">
                                <Card.Body>
                                <p>Personal Profile</p>

                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                  
                </Col>
            </Row>
        </Container>
    )
}

export default Account