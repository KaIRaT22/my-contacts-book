import React from 'react'

import POPOSSpace from '../POPOSSpace/POPOSSpace'

function ListBody(props) {
    const toggleContacts = props.onFavourite
    const query = props.query
    const data = props.data

    const spaces = data.filter(obj =>
        obj.firstName.toLowerCase().includes(query.toLowerCase()) || 
        obj.lastName.toLowerCase().includes(query.toLowerCase()))
        .map(( { id, favourite, firstName, lastName, phoneNumber, city, country, email, website, image } ) => {
        return (
            <POPOSSpace
                key={id}
                id={id}
                firstName={firstName}
                lastName={lastName}
                favourite={favourite}
                city={city}
                country={country}
                phoneNumber={phoneNumber}
                email={email}
                website={website}
                image={image}

                onFavourite={toggleContacts}
            />
        )
    })

    return (
        <div className="ListBody">
            {spaces}
        </div>
    )
}

export default ListBody