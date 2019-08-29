import React from "react"
import Header from '../SectionHeader/sectionHeader'

import styles from './contact.module.scss'

export default () => {
  return (
    <React.Fragment>
      <Header>
        Contact Me
      </Header>
      <form action='/success' method="post" data-netlify="true"
            data-netlify-honeypot="bot-field" className={styles.form}>
        <input type="hidden" name="form-name" value="contact-form" />
        <input type="hidden" name="bot-field" />
        <p className={styles.formIdentity}>
          <input id="name" type="text" name="name" placeholder='Name' style={{fontSize: '24px'}}/>      
          <input id="email" type="email" name="email" placeholder='Email' style={{fontSize: '24px'}}/>       
        </p>
        <p className={styles.message}>
          <textarea style={{fontSize: '24px'}}
            rows="15" cols="15" name="message" 
            placeholder='Leave me a message!'/>           
        </p>
        <button className={styles.button} type="submit">Send &#8594;</button>
      </form> 
    </React.Fragment> 
  )
}