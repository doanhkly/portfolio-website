import React from 'react';

import { FaLaptopCode, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import styles from './ProjectCard.module.scss'

export default ({ title, description, techList, gitLink, webLink }) => {
    return (
        <div className={styles.container}>
            <main className={styles.content}>
                <div className={styles.icon}>
                    <div>  <FaLaptopCode /> </div>       
                    <div className={styles.external}>
                        <a href={webLink}> { webLink ? (<FaExternalLinkAlt />) : null} </a>
                        <a href={gitLink}> { gitLink ? <FaGithub /> : null } </a>
                    </div>
                    
                </div>
                <h1>{title}</h1>
                <p>{description}</p>
            </main>
            <footer>
                { techList.length !== 0 ? (
                    <ul className={styles.list}>
                        {techList.map( (name, index) => <li key={index}>{name}</li>)}
                    </ul>
                ) : null }            
            </footer>
        </div>  
    )
    
}
