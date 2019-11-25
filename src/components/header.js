import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import sig from "../images/portfolio_sig.png"

import Navbar from './navbar'
import pplace_mini from "../images/pplace_mini.png"
import pplace from "../images/pplace.png"
import pplace_vert from "../images/pplace_vert.png"

const Header = () => {
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
    <StyledHeader>
      <div className="header-content">
        <h1>Freelance <span>digital designer</span> & <span>web developer</span> based in California</h1>
        <p>Hey! My name is Eddie Chu. I am a design driven developer that uses hot new tools and tech to create modern websites.</p>
        <div className="connect">
          <a
            href="mailto:contact@eddiechu.dev"
            target="_top"
            aria-label="contact@eddiechu.dev"
          >
            Say hi! I am always happy to meet new people &#8594;
          </a>
        </div>
        <div className="sig-container">
          <img src={sig} alt="Eddie" />
        </div>
      </div>
      <Navbar />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column-reverse;
  max-width: 1440px;
  margin: 0 auto;

  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  background-image: linear-gradient(
      to bottom right,
      rgba(0, 192, 255, 0.8),
      rgba(0, 192, 126, 0.9)
    ),
    url(${pplace_vert});
  max-height: 800px;

  @media screen and (min-width: 1024px) {
    background: none;
  }

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

  .connect {
    margin-bottom: 20px;
    a {
      text-decoration: none;
      border-bottom: 2px solid rgb(50, 255, 140);
      font-weight: 600;
      font-size: 16px;
      color: rgb(50, 255, 140);
    }
  }

  .sig-container {
    width: 80%;
    max-width: 350px;
    margin: 0 0 80px 0;

    img {
      margin: 0;
    }
  }
`

export default Header
