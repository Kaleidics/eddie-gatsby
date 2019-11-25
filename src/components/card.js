import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Card = (props) => {


  return (
    <StyledCard>
      <div className="icon-container">
        <img src={props.icon} alt={props.alt} />
      </div>
      <h3 className="title">{props.title}</h3>
      <p className="overview">{props.overview}</p>
      <p className="desc">{props.desc}</p>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  padding: 30px;
  border-radius: 3px;
  background: #fff;
  max-width: 400px;
  margin-bottom: 20px;
  box-shadow: 0px 10px 20px 0px rgba(0, 25, 50, 0.05);
  max-height: 355px;

  @media screen and (min-width: 1024px) {
    margin-left: 12px;
    margin-right: 12px;
  }

  img {
    margin: 0;
    margin-left: -10px;
  }

  p {
    margin-bottom: 15px;
  }

  .title {
    font-family: "Assistant", sans-serif;
    color: rgb(26, 28, 29);
    font-size: 24px;
  }

  .overview {
    font-family: "Open Sans", sans-serif;
    color: rgb(39, 39, 39);
    font-size: 16px;
  }

  .desc {
    font-family: "Open Sans", sans-serif;
    color: rgba(39, 39, 39, 0.7);
    font-size: 13px;
  }
`

export default Card;