import React from "react"

import { Navbar, Contact, Hero, Footer, Projects, Social } from '../components'
import styles from './index.module.scss'

export default () => (
    <div className='container'>
        <Navbar />
        <Social />
        <main className={styles.main}>
            <section>  
                <Hero />
            </section>
            <section id='projects'>   
                <Projects />           
            </section>
            <section id='contact'>    
                <Contact />          
            </section>
        </main>       
        <Footer />
    </div>
)