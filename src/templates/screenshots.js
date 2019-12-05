import React from "react"

import styled from "styled-components"

const Screenshots = props => {

  let images = props.images.map((image, index) => {
    return <img class="screenshots" src={image.file.url} alt="screenshot" />
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

  img.screenshots {
    width: 100%;
    border-radius: 3px;
    height: 180px;
    max-height: 180px;
    max-width: 335px;
    margin: 20px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 6px rgba(0, 0, 0, 0.2);

    @media screen and (min-width: 1280px) {
      width: 400px;
      max-width: 400px;
      margin: 20px 0;
    }
  }
`

export default Screenshots
