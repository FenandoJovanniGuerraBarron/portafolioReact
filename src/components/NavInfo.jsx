import React from 'react'
import '../styles/navInfo.css'

const NavInfo = ({show,theme}) => {
    return (
        <div data-theme={theme}  className={`nav__info ${show === 1 ? 'show' : ''}`} >
            <h3 className='info__title' >About me</h3>
            <p>Hears! I will be happy to work in your company </p>
            <ul className='info__list' >
                <li className='info__item' >-Frontend developer(HTML,CSS,JS,ReactJS)</li>
                <li className='info__item' >-Web design</li>
                <li className='info__item' >-Mobile design</li>
                <li className='info__item' >-UI/UX</li>
                <li className='info__item' >-Scrum</li>
                <li className='info__item' >-GitHub</li>
            </ul>
            <h3 className='m-bottom' >Contact width me:</h3>
            <ul className='info__contact' >
                <li><span>Phone:</span>+52 8120686102</li>
                <li><span>Email:</span>fernando_jova@hotmail.com</li>
                <li><span>Linkedin:</span><a  className='info__contact-a' href="https://acortar.link/x0FciT">Jovanni Guerra</a></li>
            </ul>
        </div>
    )
}

export default NavInfo