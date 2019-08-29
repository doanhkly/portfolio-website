import React from "react"
import { Link } from "gatsby"
import styles from './navbar.module.scss'
import { MdMenu } from 'react-icons/md'

const ListLink = props => (
    <li>
      <Link to={props.to}>{props.children}</Link>
    </li>
)

export default props => 
    <header className={styles.header}>
        <nav className={styles.navbar}>
            
            <div  className={styles.logo}>
                <Link to="/">     
                    <h3>DL</h3>
                </Link>
            </div>
        
            <div className={styles.menu}>
                <label htmlFor='menu-btn' className={styles.menuBtn}> <MdMenu/> </label>
                <input style={{display: 'none'}} type="checkbox" id="menu-btn"/>  
                

                <ul className={styles.list}>
                    <ListLink to="/">About</ListLink>
                    <ListLink to="#projects">Projects</ListLink>
                </ul>
            </div>
            
        </nav>    
    </header>
    