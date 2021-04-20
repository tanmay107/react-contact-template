import React from 'react'
import { Card, Image } from 'semantic-ui-react'

function Contact({ id, email, first_name, last_name, image }) {
    return (
        <Card>
            <Card.Content>
                <Image
                floated='right'
                size='mini'
                src={image}
                />
                <Card.Header>{first_name} {last_name}</Card.Header>
                <Card.Description>
                {email}
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default Contact
