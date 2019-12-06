import React from "react"

import styled from "styled-components"


import Navbar from "../components/navbar"


const BlogHeader = (props) => {
  

  return (
    <StyledBlogHeader>
      <div className="header-content">
        <h1>{props.title}</h1>
        <p className="overview">{props.overview}</p>
        <a
          className="button"
          target="_blank"
          rel="noopener noreferrer"
          href={props.website}
        >
          Website
        </a>
        <a
          className="button"
          target="_blank"
          rel="noopener noreferrer"
          href={props.code}
        >
          Code
        </a>
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

    @media screen and (min-width: 1024px) {
    padding: 20px 0 0 0;
  }

  .header-content {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    @media screen and (min-width: 1024px) {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    h1 {
      color: #fff;
      font-family: "Assistant", san-serif;
      font-weight: 900;
      font-size: 36px;
      line-height: 1.1;
      max-width: 800px;
      text-align: center;
      margin: 10px auto;

      @media screen and (min-width: 1024px) {
        font-size: 56px;
      }
    }

    span {
      color: #e5f5f2;
    }

    p.overview {
      font-size: 18px;
      color: rgba(255, 255, 255, 0.85);
      text-align: center;
      max-width: 800px;
      margin: 10px auto;

      @media screen and (min-width: 1024px) {
        font-size: 22px;
        margin: 20px auto;
      }
    }
  }

  .button {
    text-decoration: none;
    background: #fff;
    padding: 9px 14px;
    display: inline-block;
    font-weight: bold;
    text-decoration: none;
    font-size: 90%;
    border-radius: 4px;
    margin: 5px auto;
    width: 130px;
    max-width: 130px;
    text-align: center;
    color: #2d2d2d;

    @media screen and (min-width: 1024px) {
      margin: 10px auto;
    }
  }
`

export default BlogHeader
