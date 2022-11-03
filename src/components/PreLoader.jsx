import React from 'react'
import { SiReact, SiRedux, SiTsnode } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'
import { Link } from 'react-router-dom'
import '../styles/preLoader.css'

const PreLoader = () => {
    return (
        <div className='preload'>   
            <div className="card">
                <div className="lines"></div>
                <div className="imgBx">
                    <img src="" alt="" />
                </div>
                <div className="content">
                    <div className="details">
                        <div className="actionBtn">
                        <h2>Fernando Guerra<br /><span>Front-End</span></h2>
                            <button className='btn1' >Enter</button>
                        </div>
                        <div className="data">
                            <h3><SiReact/><br /><span>React</span></h3>
                            <h3><SiRedux/><br /><span>Redux</span></h3>
                            <h3><IoLogoNodejs/><br /><span>Node</span></h3>
                        </div>
                        <div className="actionBtn btn2 ">
                            <Link to='/portafolio' >
                            <button>Enter</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreLoader