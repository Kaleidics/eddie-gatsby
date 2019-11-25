import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Card from "../components/card"
import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
import icon4 from "../images/icon4.png"
import icon5 from "../images/icon5.png"

import Projects from "../components/projects"

const BodyContent = () => {
  return (
    <StyledBodyContent>
      <section className="card-section">
        <Card
          title="Web & UI/UX Design"
          icon={icon1}
          alt="web and design icon"
          overview="I utilize the latest front end technologies to design and craft modern experiences."
          desc="Responsive and accessible web design, HTML5, CSS3/SASS, JavaScript, React, Gatsby, Next.js"
        />
        <Card
          title="Full-stack Web Development"
          icon={icon4}
          alt="fullstack icon"
          overview="Go beyond a static site with a full-stack JavaScript web app."
          desc="JavaScript, Node.js, Express, MongoDB, JWT Token Based Authentication, REST API"
        />
        <Card
          title="Web Services"
          icon={icon5}
          alt="web services"
          overview="Using the latest cloud technologies, deploy fast and scale easily."
          desc="Netlify, Heroku, Zeit, Git, GitHub, SEO, WCAG 2.0 Accessibility, Google Analytics"
        />
      </section>
      <Projects />
    </StyledBodyContent>
  )
}

const StyledBodyContent = styled.main`
  background: #f3f3f3;
  padding-top: 5px;

  .card-section {
    margin-top: -50px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 1024px) {
      flex-direction: row;
      justify-content: center;
      margin-left: 12px;
      margin-right: 12px;
    }
  }
`

export default BodyContent
