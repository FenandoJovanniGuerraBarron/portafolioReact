import React from 'react'
import '../styles/navInfo.css'
import { useTranslation } from "react-i18next";


const NavInfo = ({show,theme}) => {
    const [t, i18n] = useTranslation("global");
    return (
        <div data-theme={theme}  className={`nav__info ${show === 1 ? 'show' : ''}`} >
            <h3 className='info__title' >{t("navInfo.title")}</h3>
            <p>{t("navInfo.p1")} </p>
            <ul className='info__list' >
                <li className='info__item' >{t("navInfo.l1")}</li>
                <li className='info__item' >{t("navInfo.l2")}</li>
                <li className='info__item' >{t("navInfo.l3")}</li>
                <li className='info__item' >-Scrum</li>
                <li className='info__item' >-GitHub</li>
            </ul>
            <h3 className='m-bottom' >{t("navInfo.h1")}</h3>
            <ul className='info__contact' >
                <li><span>{t("navInfo.phone")}</span>+52 8120686102</li>
                <li><span>{t("navInfo.email")}</span>fernando_jova@hotmail.com</li>
                <li><span>Linkedin:</span><a  className='info__contact-a' href="https://acortar.link/x0FciT">Jovanni Guerra</a></li>
            </ul>
        </div>
    )
}

export default NavInfo