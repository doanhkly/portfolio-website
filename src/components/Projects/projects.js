import React from "react"
import Header from '../SectionHeader/sectionHeader'

import styles from './projects.module.scss'
import ProjectCard from './ProjectCard'

let techList = ['tech1', 'tech2', 'tech3']
export default () => (
    <React.Fragment>
      <Header> Projects </Header>
      <div className={styles.container}>
        <ProjectCard 
          title='Title of project' 
          description='Description of project'
          techList={techList}
          gitLink='/'/>   
      </div>
    </React.Fragment> 
)