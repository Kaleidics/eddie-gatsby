import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <StyledProjects>
      <h2>Latest Projects</h2>
      <ul>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </StyledProjects>
  )
}

const StyledProjects = styled.section`
 padding: 0 20px;

 h2 {
   font-size: 28px;
   font-family: "Assistant", sans-serif;
   font-weight: 900;
 }
`;

export default Projects
