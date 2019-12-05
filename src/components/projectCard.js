import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ProjectCard = props => {
  return (
    <StyledProjectCard hero={props.hero}>
      <Link to={props.slug}>
        <div className="container">
          <div class="image-container"></div>
        
          <div class="content">
            <h2>{props.title}</h2>
            <p className="overview">{props.overview}</p>
            <p className="tags">{props.tags}</p>
          </div>
        </div>
      </Link>
    </StyledProjectCard>
  )
}

const StyledProjectCard = styled.div`
  display: inline-block;
  margin-bottom: 30px;
  height: 200px;
  width: 100%;
  @media screen and (min-width: 1024px) {
    width: 33%;
  }
    a,
    a:visited {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.95);
      min-height: 200px;
      width: 100%;
    }

    h2 {
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    }

    p {
      margin: 0 0 15px 0;
    }
   

    .image-container {
      background-image: ${props => ` url(${props.hero})`};
      background-position: top;
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      border-radius: 2px;
      height: 200px;
    }

    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 3;
      padding: 25px 30px 10px 30px;
      background: rgba(35, 35, 35, 0.5);
      transition: all 0.3s;

      &:hover {
        background: rgba(35, 35, 35, 0.2);
      }
    }
    
    .container {
      position: relative;
      margin: 0 auto;
      width: 100%;
      padding: 25px 30px 10px 30px;
      border-radius: 3px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.1), 0 1px 6px rgba(0,0,0,0.2);
      border-radius: 2px;
      height: 100%;
    }

    .overview {
      font-size: 16px;
    }

    .tags {
      font-size: 14px;
      line-height: 1.2;
    }
  }
`

export default ProjectCard
