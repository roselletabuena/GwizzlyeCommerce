import React from 'react'
import { Card } from 'react-bootstrap'


const GwizzlyCard = props => {
    return (
        <Card className="mt-4">
            <Card.Body>
                {props.children}
            </Card.Body>
        </Card>
    )
}

export default GwizzlyCard