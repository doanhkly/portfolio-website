import React from "react"
import { Link } from "gatsby"
import styles from './navbar.module.scss'

const ListLink = props => (
    <li>
      <Link to={props.to}>{props.children}</Link>
    </li>
)

export default props => 
    <header className={styles.header}>
        <nav className={styles.navbar}>
            <Link to="/" className={styles.logo}>     
                <h3>DL</h3>
            </Link>
            <ul className={styles.list}>
                <ListLink to="/">About</ListLink>
                <ListLink to="#projects">Projects</ListLink>
                <ListLink to="#contact">Contact</ListLink>
            </ul>
        </nav>    
    </header>
    