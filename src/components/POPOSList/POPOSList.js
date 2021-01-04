import React, { useState } from 'react'
import axios from 'axios';

import ListHeader from './ListHeader'
import ListBody from './ListBody'

import './POPOSList.css'

function POPOList() {
    const [ query, setQuery ] = useState('')
    const [ lovely, setLovely ] = useState(null)
    const [ letter, setLetter ] = useState(null)
    const [ data, setData ] = useState( JSON.parse(localStorage.getItem('myContactsData')) || getInfo())

    function getInfo() {
        axios.get('https://my-json-server.typicode.com/RomanChasovitin/demo-api/users')
        .then(response => {
            const newData = response.data.data
            newData.forEach((obj) => { obj.favourite = false })
            localStorage.setItem('myContactsData', JSON.stringify(newData))
            setData(newData)
        })
        return []
    }

    function toggleContacts(id) {
        setData(
            data.map(oneData => {
            if (oneData.id === id) {
                oneData.favourite = !oneData.favourite
            }
            return oneData
          })
        )
        localStorage.setItem('myContactsData', JSON.stringify(data));
    }

    function getFavourite() {
        if(lovely) {
            setLovely(false)
            setData(
                JSON.parse(localStorage.getItem('myContactsData'))
            )
        }
        else {
            setData(
                data.filter(oneData => oneData.favourite === true)
            )
            setLovely(true)
        }
    }

    function byAZ(boolean) {
        if(boolean && letter) {
            setData(
                data.sort((a,b) => {
                    return a.firstName.localeCompare(b.firstName)
                })
            )
            setLetter(false)
        }
        else {
            setData(
                data.sort((a,b) => {
                    return b.firstName.localeCompare(a.firstName)
                })
            )
            setLetter(true)
        }
    }

    return (
        <div className="POPOSList container">
            <ListHeader onSearch={[ query, setQuery ]} functions={[getFavourite, byAZ]} />
            <ListBody onFavourite={toggleContacts} query={query} data={data} />
        </div>
    )
}

export default POPOList