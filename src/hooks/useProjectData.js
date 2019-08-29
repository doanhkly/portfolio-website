import { useStaticQuery, graphql } from 'gatsby'

const useProjectData = () => {
    return useStaticQuery(
        graphql`
          {
            allContentfulProject {
                edges {
                  node {
                    description {
                      description
                    }
                    github
                    name
                    technologies
                    webLink
                  }
                }
              }
            }
        `
    )
}

export default useProjectData;