import React, { useEffect, useState } from 'react'
import Contact from './components/Contact'

function Home() {
    const [contact, setContact] = useState([])

    useEffect(() => {
       fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => (setContact(data.data)));
    }, [])

    return (
        <div className="home">
            {contact.map((item) => {
                    return (
                        <Contact 
                            key = {item.id}
                            id = {item.id} 
                            email = {item.email}
                            first_name = {item.first_name}
                            last_name = {item.last_name}
                            image = {item.avatar}
                        />    
                    )})}
        </div>
    )
}

export default Home
