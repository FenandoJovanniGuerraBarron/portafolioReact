import React from 'react'
import '../styles/certificates.css'

const Certificates = ({ name, img, domain }) => {
  return (
    <div className='card__certificate' >
        <a href={domain} target='__blank' >
        <img className='card__certificate-image' src={img} alt={name} /> 
        </a>
    </div>
  )
}

export default Certificates