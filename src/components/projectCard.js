import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const ProjectCard = (props) => {
  return (
    <StyledProjectCard style={{ backgroundImage: `url(${props.hero})` }}>
      <Link to={props.slug}>
        <h2>{props.title}</h2>
        <p>{props.publishedDate}</p>
      </Link>
    </StyledProjectCard>
  )
}

const StyledProjectCard = styled.div`
  max-width: 370px;
  padding: 25px 30px 30px;
  margin-bottom: 30px;
  border-radius: 2px;
`

export default ProjectCard