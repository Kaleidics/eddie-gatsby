import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import ProjectCard from "./projectCard"

const Projects = () => {
  const data = useStaticQuery(graphql`
    # Write your query or mutation here

    query {
      allContentfulBlogPost {
        edges {
          node {
            hero {
              file {
                url
              }
            }
            title
            overview
            tags
            slug
            
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
        overview={edge.node.overview}
        tags={edge.node.tags}
        hero={edge.node.hero.file.url}
      />
    )
  });

  return (
    <StyledProjects>
      <h2>Latest Projects</h2>
      <div className="projects-container">

      {projects}
      </div>
    </StyledProjects>
  )
}

const StyledProjects = styled.section`
  padding: 0 20px;
  margin: 40px auto 0 auto;
  max-width: 1280px;
  width: 90%;

  @media screen and (min-width: 1024px) {
    width: 100%;
  }

  h2 {
    font-size: 28px;
    font-family: "Assistant", sans-serif;
    font-weight: 900;
  }

  .projects-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 1024px) {
      flex-direction: row;
      align-items: initial;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
`

export default Projects
