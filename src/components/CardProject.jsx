import React from 'react'
import { MdRemoveRedEye } from 'react-icons/md'
import '../styles/cardProject.css'
import { BiLike } from 'react-icons/bi'

const CardProject = ({ name, img, domain }) => {
    return (
        <article className='card_project' style={{
            backgroundImage: `url(${img})`
        }}>
            <div className='card__content'>
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