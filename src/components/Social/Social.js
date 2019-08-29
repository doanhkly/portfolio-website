import React from 'react'
import {FaGithub, FaLinkedin, FaHome, FaEnvelope } from "react-icons/fa";

import styles from './Social.module.scss'

export default () => {
    return (
        <div className={styles.socialContainer}>
            <div className={styles.socialBar}>
                <a href='/'><FaHome /></a>
                <a href="mailto:doanhkly@gmail.com?subject=Message from Website"><FaEnvelope /></a>
                <a href='https://github.com/doanhkly'><FaGithub /></a>
                <a href='https://www.linkedin.com/in/doanhly/'><FaLinkedin /></a>
            </div>        
        </div>
    )
}