import React from 'react'

import Header from "../components/header"
import Footer from "../components/footer"
import '../styles/index.scss'
import BodyContent from "../components/bodyContent"

import styled from 'styled-components'
import pplace_mini from '../images/pplace_mini.png'
import pplace from '../images/pplace.png'

const Layout = (props) => {
    return (
        <StyledLayout>
            <StyledContent>
                <Header />
                <BodyContent />
                {props.children}
            </StyledContent>
            <Footer />
        </StyledLayout>
    )
}

const StyledLayout = styled.div`
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  background-image: linear-gradient(
      to bottom right,
      rgba(0, 192, 255, 0.8),
      rgba(0, 192, 126, 0.9)
    ),
    url(${pplace_mini});

  @media screen and (min-width: 1024px) {
    background-repeat: no-repeat;
    background-position: 50% 100%;
    background-size: cover;
    background-image: linear-gradient(
        to bottom right,
        rgba(0, 192, 255, 0.8),
        rgba(0, 158, 126, 0.9)
      ),
      url(${pplace});
  }

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const StyledContent = styled.div`
  flex-grow: 1;
`

export default Layout