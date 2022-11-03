import React from 'react'
import '../styles/navBar.css'

const NavBar = ({handleShow}) => {

    return (
        <div className='list__1' >
            <ul className='list__menu' >
                <li 
                onClick={()=>handleShow(1)}  
                className='list__menu-li menu__info ' >Information</li>
                <li 
                onClick={()=>handleShow(2)}    
                className='list__menu-li ' >Projects</li>
                <li  
                onClick={()=>handleShow(3)}   
                className='list__menu-li' >Certificates</li>
                <li 
                onClick={()=>handleShow(4)}    
                className='list__menu-li menu__about ' >About</li>
            </ul>
        </div>
    )
}

export default NavBar