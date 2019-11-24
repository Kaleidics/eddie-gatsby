import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'

import logo from '../images/logo_temp.png'

const Navbar = () => {
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
    <StyledNavbar>
      <img src={logo} alt="Eddie Chu" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  padding: 30px 20px;
  
  img {
    width: 45px;
    margin: 0;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  li {
    margin: 0;
    margin-left: 30px;
  }

  a, a:visited {
    text-decoration: none;
    color: #fff;
  }
`;

export default Navbar
