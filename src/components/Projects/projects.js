import React from "react"
import Header from '../SectionHeader/sectionHeader'

import styles from './projects.module.scss'
import ProjectCard from './ProjectCard'
import useProjectData from '../../hooks/useProjectData'

export default () => {
    const edges = useProjectData().allContentfulProject.edges;
    const data = edges.map(res => res.node);
    return (
      <React.Fragment>
        <Header> Projects </Header>
        <div className={styles.container}>
        { data.map(project => 
            <ProjectCard 
              title={project.name}
              description={project.description.description}
              techList={project.technologies}
              gitLink={project.github}
              webLink={project.webLink}
            />) 
          }
        </div>
      </React.Fragment>
    )
}