import React from 'react'
import '../styles/navBar.css'
import { useTranslation } from "react-i18next";

const NavBar = ({handleShow}) => {
    const [t, i18n] = useTranslation("global");

    return (
        <div className='list__1' >
            <ul className='list__menu' >
                <li 
                onClick={()=>handleShow(1)}  
                className='list__menu-li menu__info ' > {t("navBar.info")}</li>
                <li 
                onClick={()=>handleShow(2)}    
                className='list__menu-li ' >{t("navBar.pro")}</li>
                <li  
                onClick={()=>handleShow(3)}   
                className='list__menu-li' >{t("navBar.cer")}</li>
                <li 
                onClick={()=>handleShow(4)}    
                className='list__menu-li menu__about ' >About</li>
            </ul>
        </div>
    )
}

export default NavBar