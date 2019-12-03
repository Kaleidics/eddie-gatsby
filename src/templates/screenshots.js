import React from "react"

import styled from "styled-components"

const Screenshots = props => {

  let images = props.images.map((image, index) => {
    return <img src={image.file.url} alt="screenshot" />
  });
  console.log("ss", images)
  return (
    <StyledScreenshots>
      {images}
    </StyledScreenshots>
  )
}

const StyledScreenshots = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  

  @media screen and (min-width: 1280px) {
    padding: 0;
    max-width: 1280px;
    margin: 0 auto;
    justify-content: space-between;
  }

  img {
    width: 100%;
    border-radius: 2px;
    height: 180px;
    max-height: 180px;
    max-width: 335px;
    margin: 20px;

    @media screen and (min-width: 1280px) {
      width: 400px;
      max-width: 400px;
      margin: 20px 0;
    }
  }
`

export default Screenshots
