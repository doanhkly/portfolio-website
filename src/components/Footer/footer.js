import React from "react"

import styles from "./footer.module.scss"
import {FaGithub, FaLinkedin, FaHome, FaEnvelope } from "react-icons/fa";

export default props => 
    <footer className={styles.container}> 
        <div className={styles.socialContainer}>
            <div className={styles.socialBar}>
                <a href='/'><FaHome /></a>
                <a href="mailto:doanhkly@gmail.com"><FaEnvelope /></a>
                <a href='https://github.com/doanhkly'><FaGithub /></a>
                <a href='https://www.linkedin.com/in/doanhly/'><FaLinkedin /></a>
            </div>        
        </div>  
        <div> 
            Designed &amp; Built <i>by</i> Doanh Ly 
            <br/> &#169; 2019 
        </div>
    </footer>