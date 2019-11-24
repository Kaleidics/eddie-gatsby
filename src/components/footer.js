import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { MdWeb } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"
import { GoMarkGithub } from "react-icons/go"
import { MdEmail } from "react-icons/md"
import sig from "../images/portfolio_sig.png"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          tagline
        }
      }
    }
  `)

  return (
    <StyledFooter>
      <div className="container">
        <h3>EC</h3>
        <p className="tagline">{data.site.siteMetadata.tagline}</p>

        <div className="quick-link--container">
          <div className="quick-link-1">
            <MdWeb size="1.5em" color="#fff" />
            <p>Find me on Upwork</p>
          </div>

          <div className="quick-link-2">
            <MdWeb size="1.5em" color="rgb(37, 40, 43)" />
            <p>Find me on Fiverr</p>
          </div>
        </div>

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
          <img src={sig} />
        </div>

        <div class="contact">
          <ul>
            <li>
              <a
                href="https://github.com/Kaleidics"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoMarkGithub size="25px" />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/eddiechu-dev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Eddie Chu Linkedin"
              >
                <FaLinkedin size="26px" />
              </a>
            </li>

            <li>
              <a
                href="mailto:contact@eddiechu.dev"
                target="_top"
                aria-label="contact@eddiechu.dev"
              >
                <MdEmail size="30px" />
              </a>
            </li>
          </ul>
        </div>

        <div className="copyright-container">
          <p>© Eddie Chu 2019. All rights reserved.</p>
        </div>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  color: white;
  background: rgb(37, 40, 43);
  padding-top: 80px;

  .container {
    padding: 0 2rem;
  }

  .quick-link--container {
    display: flex;
    margin-bottom: 20px;
  }

  .quick-link-1 {
    background: #2b5468;
    display: flex;
    align-items: center;
    border-radius: 3px;
    margin-right: 2%;
    padding: 0 5px;

    p {
      font-size: 12px;
      font-weight: 700;
      color: #fff;
      margin: 0 5px;
    }
  }

  .quick-link-2 {
    background: rgb(0, 226, 182);
    display: flex;
    align-items: center;
    border-radius: 3px;
    padding: 1px 5px;

    p {
      font-size: 12px;
      font-weight: 700;
      color: rgb(37, 40, 43);
      margin: 0 5px;
    }
  }

  .tagline {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.6;
    font-family: "Open Sans", sans-serif;
  }

  .connect {
    margin-bottom: 20px;
    a {
      text-decoration: none;
      border-bottom: 2px solid rgb(0, 226, 182);
      font-weight: 600;
      font-size: 16px;
      color: rgb(0, 226, 182);
    }
  }

  .contact {
    margin-bottom: 20px;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
    }

    li {
      margin: 0 10px 0 0;
      a,
      a:visited {
        color: #fff;
      }
    }
  }

  .sig-container {
    width: 100%;
    margin: 0 0 40px -11px;

    img {
      margin: 0;
    }
  }

  .copyright-container {
      p {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.75);
      }
  }
`

export default Footer
