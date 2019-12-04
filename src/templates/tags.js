import React from 'react'
import styled from 'styled-components'

const Tags = props => {
  let tags = props.tags.split(", ").map(tag => {
    return <li>{tag}</li>
  });
  
  return (
    <StyledTags>
      {tags}
    </StyledTags>
  );
}

const StyledTags = styled.ul`
  padding: 0 20px;
  list-style-type: none;

  @media screen and (min-width: 1280px) {
    padding: 0;
    max-width: 1280px;
    margin: 0 auto;
  }
`

export default Tags