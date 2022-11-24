import React from 'react'
import { MdRemoveRedEye } from 'react-icons/md'
import '../styles/cardProject.css'
import { useTranslation } from "react-i18next";

const CardProject = ({ name, img, domain, video }) => {
    const [t, i18n] = useTranslation("global");

    const handleMove = e => {
        e.target.previousSibling.play()
    }

    const handleOut = e => {
        e.target.previousSibling.pause()
    }


    return (
        <article className='card_project'>
            <video
                src={video}
                type='video/mp4' loop
                className='clip'
                muted >
            </video>
            <div
                className='card__content'
                onMouseOut={handleOut}
                onMouseEnter={handleMove}>
                <div className='content__titles'>
                    <h2 className='card__title'>{name}</h2>
                </div>
                <div className='content__icons' >
                    <a href={domain} target='_blank' className='card__link' ><MdRemoveRedEye /></a>
                </div>

            </div>
        </article>

    )
}

export default CardProject