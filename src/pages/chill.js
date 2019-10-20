import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

const Button = styled.button`
  font-family: sans-serif;
  font-size: 35px;
  border: none;
  border-radius: 20px;
  padding: 7px 10px;
  background: ${props => (props.primary ? "red" : "green")};
  &:hover {
    color: blueviolet;
  }
`

export default ({ data }) => (
  <div>
    <h1>Cool level: {data.site.siteMetadata.cool}</h1>
    <Button primary>Kush Da Button</Button>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        cool
      }
    }
  }
`
