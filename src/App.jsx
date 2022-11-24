import { useEffect, useState } from 'react'
import './App.css'
import CardInfo from './components/CardInfo'
import Header from './components/Header'
import ListProject from './components/ListProject'
import NavBar from './components/NavBar'
import NavInfo from './components/NavInfo'
import About from './components/About'
import ListCertificates from './components/ListCertificates'
import { Route, Routes } from 'react-router-dom'
import PreLoader from './components/PreLoader'
import useLocalStorage from 'use-local-storage'
import { useTranslation } from "react-i18next";


function App() {

  const [t, i18n] = useTranslation("global");

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const [show, setShow] = useState(2)

  const handleShow = num => {
    setShow(num)
  }


  const switchTheme = () => {

    const newTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(newTheme)

  }


  return (
    <div className="App" data-theme={theme} >
      <Routes>
        <Route path='/' element={<PreLoader />} />
        <Route path='/portafolio' element={
          <>
            <Header />
            <div className="general__info">
              <CardInfo theme={theme} />
              <NavInfo theme={theme} />
            </div>
            <div className="general__content">
              <NavBar handleShow={handleShow} />
              {
                show === 1 ?
                  <NavInfo theme={theme} show={show} />
                  : show === 2 ?
                    <ListProject theme={theme} />
                    : show === 3 ?
                      <ListCertificates theme={theme} />
                      :
                      <About />
              }
            </div>
            <div className='app_btn' >
              <button
                onClick={switchTheme}
                className='dark' >
                {theme === 'light' ? <i className="fa-solid fa-moon"></i> : <i className="fa-regular fa-sun"></i>}
              </button>
              <div className='lenguage' >
                <button className='lenguage_es' onClick={() => i18n.changeLanguage("es")} ></button>
                <button className='lenguage_en' onClick={() => i18n.changeLanguage("en")} ></button>
              </div>
            </div>
          </>
        } />
      </Routes>
    </div>
  )
}

export default App
