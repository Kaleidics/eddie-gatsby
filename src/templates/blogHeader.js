import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import sig from "../images/portfolio_sig.png"

import Navbar from "../components/navbar"


const BlogHeader = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledBlogHeader>
      <div className="header-content">
        <h1>
          {props.title}
        </h1>
        <p>
          Hey! My name is Eddie Chu. I am a design driven developer.
        </p>
       
        
      </div>
      <Navbar />
    </StyledBlogHeader>
  )
}

const StyledBlogHeader = styled.header`
  display: flex;
  flex-direction: column-reverse;
  max-width: 1280px;
  margin: 0 auto;

  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    padding: 20px 0 0 0;
  }

  .header-content {
    padding: 0 20px;

    @media screen and (min-width: 1024px) {
      padding-top: 40px;
    }

    h1 {
      font-family: "Assistant", san-serif;
      font-weight: 900;
      font-size: 36px;
      line-height: 1.1;
      max-width: 800px;

      @media screen and (min-width: 1024px) {
        font-size: 56px;
      }
    }

    span {
      color: #e5f5f2;
    }

    p {
      font-size: 18px;
      color: rgba(255, 255, 255, 0.85);

      max-width: 800px;

      @media screen and (min-width: 1024px) {
        font-size: 22px;
      }
    }
  }
`

export default BlogHeader
