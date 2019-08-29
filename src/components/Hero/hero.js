import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styles from './hero.module.scss'

const Hero = () => {
    
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        image
                        description
                    }
                }
            }
        `
    )
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h5 className={styles.intro}>Hi, my name is</h5>
                <h1 className={styles.name}>Doanh Ly</h1>
                <h3 className={styles.subtitle}>
                    Code &nbsp; | &nbsp; Eat &nbsp; | &nbsp; Sleep &nbsp; | &nbsp; Repeat
                </h3>
                <p className={styles.blurb}>
                    { site.siteMetadata.description }
                </p>
            </div>
            <div className={styles.avatarContainer}>
                <img alt='avatar' src={site.siteMetadata.image[1]} />
            </div>
        </div>           
    )
}


export default Hero;