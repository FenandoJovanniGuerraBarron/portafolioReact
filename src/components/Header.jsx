import React from 'react'
import '../styles/header.css'
import { useTranslation } from "react-i18next";



const Header = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <header className='header' >
            <h2 className='header__title' >Full Stack Web Developer</h2>
            <p className='header__description' >fernando_jova@hotmail.com</p>
        </header>
    )
}

export default Header