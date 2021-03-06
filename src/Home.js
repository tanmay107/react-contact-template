import React, { useEffect, useState } from 'react'
import Contact from './components/Contact'
import SearchBar from './components/SearchBar';

function Home() {
    const [contact, setContact] = useState([])
    const [searchField, setSearchField] = useState('')

    useEffect(() => {
       fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => (setContact(data.data)));
    }, [])

    const onSearchChange = event => {
        setSearchField(event.target.value)
        console.log(event.target.value);
    }

    const filteredContact = contact.filter(contact => {
        let fullName = contact.first_name + ' ' + contact.last_name
        return fullName.toLowerCase().includes(searchField.toLowerCase())
    })

    function GetSortOrder(prop) {    
        return function(a, b) {    
            if (a[prop] > b[prop]) {    
                return 1;    
            } else if (a[prop] < b[prop]) {    
                return -1;    
            }    
            return 0;    
        }    
    }

    contact.sort(GetSortOrder("first_name"));

    return (
        <div className="home">
            <SearchBar searchChange={onSearchChange} />
            {filteredContact.map((item) => {
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
