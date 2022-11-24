import React from 'react'
import '../styles/cardInfo.css'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { TiSocialTwitterCircular } from 'react-icons/ti'
import { SiGooglemaps } from 'react-icons/si'
import { BsWhatsapp } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { useTranslation } from "react-i18next";


const CardInfo = ({theme}) => {
    const [t, i18n] = useTranslation("global");
    return (
        <article className='card__info' >
            <div className='card__image' >
                <img src={"../imgs/Logo.png"} alt='picture' />
            </div>
            <h1 className='card__title' >Frontend Fernando </h1>
            <ul>
                <li className='card__description' >{t("cardInfo.description")}</li>
                <li className='card__email' >fernando_jova@hotmail.com</li>
            </ul>
            <div className='cardInfo__icons' >
                <a data-theme={theme} href="http://github.com/FenandoJovanniGuerraBarron" target="_blank"><AiFillGithub  className='icons-social icon__git' /></a>
                <a href="http://linkedin.com/in/jovanni-guerra-b4790499" target="_blank"><AiFillLinkedin className='icons-social  icon__link '  /></a>
                <a href="http://twitter.com/JovanniGuerra" target="_blank"><TiSocialTwitterCircular  className='icons-social  icon__twitter ' /></a>
                
            </div>
            <div className='card__ubication' >
                <SiGooglemaps />
                <p>Mexico</p>
            </div>
            <div className='card__buttons'>
                <a href="https://wa.link/d5xsuw
            " target="_blank"> <button className='btn__whats card__btn ' >
                        <BsWhatsapp />
                    </button></a>
                <a href="mailto:fernando_jova@hotmail.com" target="_blank" >
                    <button className='btn__email card__btn ' >
                        <FiMail />
                    </button>
                </a>

            </div>
        </article>
    )
}

export default CardInfo