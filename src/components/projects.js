import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import ProjectCard from "./projectCard"

const Projects = () => {
  const data = useStaticQuery(graphql`
    # Write your query or mutation here

    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            hero {
              file {
                url
              }
            }
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  // build the projects list
  let projects = data.allContentfulBlogPost.edges.map(edge => {
    return (
      <ProjectCard
        slug={`/blog/${edge.node.slug}`}
        title={edge.node.title}
        publishedDate={edge.node.publishedDate}
        hero={edge.node.hero.file.url}
      />
    )
  });

  return (
    <StyledProjects>
      <h2>Latest Projects</h2>

      {projects}
    </StyledProjects>
  )
}

const StyledProjects = styled.section`
  padding: 0 20px;
  margin: 40px 0 0 0;
  h2 {
    font-size: 28px;
    font-family: "Assistant", sans-serif;
    font-weight: 900;
  }
`

export default Projects
