import React, { useState, useEffect, useReducer } from 'react'

import './POPOSDetails.css'

function POPOSDetails(props) {
  const [ data ] = useState( JSON.parse(localStorage.getItem('myContactsData')))
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    JSON.parse(localStorage.getItem('myContactsData')).filter(obj => obj.id === Number(props.match.params.id))[0]
  )

  const handleChange = evt => {
    const { name, value} = evt.target;

    setUserInput({[name]: value});
  }

  useEffect(() => {
    localStorage.setItem('myContactsData', JSON.stringify(data));
  })

  const handleSubmit = (evt) => {
    evt.preventDefault()

    var data = JSON.parse(localStorage.getItem('myContactsData'))
    data.forEach((element, index, arr) => {
      if(element.id === userInput.id) {
        arr[index] = userInput
      }
      return element
    })
    localStorage.setItem('myContactsData', JSON.stringify(data))
  }

  return (
    <div className="POPOSDetails container">
      <div className="POPOSDetails-image">
        <img src={userInput.image} alt="Hello" />
        <div className="Favourite-icon">
        {
          userInput.favourite ? 
            <svg viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 37.4L17.2 34.6C6.8 25.4 0 19.2 0 11.6C0 5.39998 4.8 0.599976 11 0.599976C14.4 0.599976 17.8 2.19998 20 4.79998C22.2 2.19998 25.6 0.599976 29 0.599976C35.2 0.599976 40 5.39998 40 11.6C40 19.2 33.2 25.4 22.8 34.6L20 37.4Z" fill="#D32F2F"/>
            </svg> : 
            <svg viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.972 5.31019C17.7227 2.57892 15.7812 0.597327 13.3514 0.597327C11.7326 0.597327 10.2505 1.4647 9.41644 2.85486C8.58998 1.44672 7.16855 0.597 5.57572 0.597C3.14625 0.597 1.20438 2.57859 0.955491 5.30987C0.93579 5.43051 0.855015 6.06543 1.10062 7.10086C1.45458 8.59433 2.27218 9.95277 3.46442 11.0284L9.4125 16.403L15.4627 11.0287C16.6549 9.95277 17.4725 8.59465 17.8265 7.10086C18.0721 6.06576 17.9913 5.43084 17.972 5.31019ZM17.1872 6.95112C16.8641 8.31512 16.1151 9.55782 15.0234 10.5426L9.41644 15.5235L3.90573 10.5439C2.81199 9.55717 2.06335 8.31479 1.73992 6.95079C1.50745 5.97094 1.603 5.41743 1.60333 5.41384L1.60825 5.38081C1.82168 2.98793 3.49003 1.25088 5.57572 1.25088C7.1147 1.25088 8.46948 2.19248 9.11239 3.70785L9.4148 4.42157L9.71721 3.70785C10.3499 2.21569 11.7763 1.25121 13.3517 1.25121C15.4371 1.25121 17.1058 2.98825 17.3235 5.4122C17.3241 5.41743 17.4197 5.97127 17.1872 6.95112Z" fill="black"/>
            </svg>
        }
        </div>
      </div>
      <div className="POPOSDetails-info">
        <form onSubmit={handleSubmit}>
          <label>
            First name:
            <input type="text" name="firstName" value={userInput.firstName} onChange={handleChange} />
          </label>
          <label>
            Last name:
            <input type="text" name="lastName" value={userInput.lastName} onChange={handleChange} />
          </label>
          <label>
            City:
            <input type="text" name="city" value={userInput.city} onChange={handleChange} />
          </label>
          <label>
            Country:
            <input type="text" name="country" value={userInput.country} onChange={handleChange} />
          </label>
          <label>
            Phone Number:
            <input type="text" name="phoneNumber" value={userInput.phoneNumber} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" value={userInput.email} onChange={handleChange} />
          </label>
          <label>
            Website:
            <input type="text" name="website" value={userInput.website} onChange={handleChange} />
          </label>
          <input type="submit" value="Save Contact" />
        </form>
      </div>
    </div>
  )
}

export default POPOSDetails