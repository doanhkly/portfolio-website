import React from "react"

import { Hero, Projects, Social } from '../components'
import Layout from '../Layout/Layout'

import styles from './index.module.scss'

export default () => (
    <Layout>
        <Social />
        <main className={styles.main}>
            <section>  
                <Hero />
            </section>
            <section id='projects'>   
                <Projects />           
            </section>
        </main>       
    </Layout>
)