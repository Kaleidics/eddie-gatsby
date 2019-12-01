import React from 'react'

import Header from "../components/header"
import Footer from "../components/footer"
import '../styles/index.scss'
import BodyContent from "../components/bodyContent"

import styled from 'styled-components'
import pplace_mini from '../images/pplace_mini.png'
import pplace from '../images/pplace.png'
import pplace_vert from '../images/pplace_vert.png'

const Layout = (props) => {
    return (
        <StyledLayout>
            <StyledContent>
                
                
                {props.children}
            </StyledContent>
            <Footer />
        </StyledLayout>
    )
}

const StyledLayout = styled.div`
  margin: 0 auto;
  
  @media screen and (min-width: 1024px) {
    background-repeat: no-repeat;
    background-position: 100% 50%;
    background-size: cover;
    background-image: linear-gradient(
        to bottom right,
        rgba(0, 192, 255, 0.8),
        rgba(0, 158, 126, 0.9)
      ),
      url(${pplace});
      max-height: 800px;
  }

  display: flex;
  flex-direction: column;
  
`

const StyledContent = styled.div`
  flex-grow: 1;
`

export default Layout