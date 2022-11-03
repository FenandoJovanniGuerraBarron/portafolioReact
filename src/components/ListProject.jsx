import React from 'react'
import projects from '../json/projects.json'
import CardProject from './CardProject'
import '../styles/listProject.css'

const ListProject = ({theme}) => {

    return (
        <section data-theme={theme} className='contanier__projects' >
            {
                projects.map(project => (
                    <CardProject
                        key={project.name} 
                        name={project.name} 
                        img={project.imag} 
                        domain={project.domain}
                        />
                ))
            }
        </section>
    )
}

export default ListProject