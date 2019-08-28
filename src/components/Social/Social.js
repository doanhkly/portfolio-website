import React from 'react'
import {FaGithub, FaLinkedin, FaHome } from "react-icons/fa";

import styles from './Social.module.scss'

export default () => {
    return (
        <div className={styles.socialContainer}>
            <div className={styles.socialBar}>
                <a href='/'><FaHome /></a>
                <a href='https://github.com/doanhkly'><FaGithub /></a>
                <a href='https://www.linkedin.com/in/doanhly/'><FaLinkedin /></a>
            </div>        
        </div>
    )
}