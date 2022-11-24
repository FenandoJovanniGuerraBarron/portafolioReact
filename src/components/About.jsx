import React from 'react'
import '../styles/about.css'
import { useTranslation } from "react-i18next";

const About = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className='about__container' >
      <div className='about__container__text' >
        <p>
        {t("about.p1")}
        </p>
        <p>
        {t("about.p2")}
        </p>
        <p>{t("about.p3")}</p>
        <p>
        {t("about.p4")} 
        </p>
        <p>
        {t("about.p5")}
        </p>
      </div>
    </div>
  )
}

export default About