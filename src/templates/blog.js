import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

import Head from "../components/head"

import styled from "styled-components"

import Screenshots from "./screenshots"

import Tags from "./tags"

import BlogHeader from "./blogHeader"

import Projects from "../components/projects"
//previous grabbing using markdown
// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

//grab a specific post from contentful based on slug
export const query = graphql`
         query($slug: String!) {
           contentfulBlogPost(slug: { eq: $slug }) {
             screenshots {
               file {
                 url
               }
             }
             color1
             color2
             hero {
               file {
                 url
               }
             }
             herovert {
               file {
                 url
               }
             }

             title
             overview
             tags
             slug
             website
             code
             tags
             body {
               json
             }
           }
         }
       `

//dril into a specific node for images
const Blog = (props) => {

    const options = {
      renderNode: {
        "embedded-asset-block": (node) => {
          const alt = node.data.target.fields.title['en-US']
          const url = node.data.target.fields.file['en-US'].url
          return <img alt={alt} src={url} />
        }
      }
    }
console.log("templates", props.data.contentfulBlogPost.tags)
    return (
      <Layout
        color1={props.data.contentfulBlogPost.color1}
        color2={props.data.contentfulBlogPost.color2}
        hero={props.data.contentfulBlogPost.hero.file.url}
        herovert={props.data.contentfulBlogPost.herovert.file.url}
      >
        <Head title={props.data.contentfulBlogPost.title} />

        <BlogHeader
          title={props.data.contentfulBlogPost.title}
          overview={props.data.contentfulBlogPost.overview}
          website={props.data.contentfulBlogPost.website}
          code={props.data.contentfulBlogPost.code}
        />
        <StyledBlogContent title={props.data.contentfulBlogPost.title}>
          {documentToReactComponents(
            props.data.contentfulBlogPost.body.json,
            options
          )}
        </StyledBlogContent>
        <StyledHeading>Screenshots</StyledHeading>
        <Screenshots images={props.data.contentfulBlogPost.screenshots} />
        <StyledHr />
        {/* <Tags tags={props.data.contentfulBlogPost.tags} /> */}
        <Projects />
      </Layout>
    )
}

const StyledHr = styled.hr`
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
  height: 2px;
  border-radius: 5px;
  background: rgba(95, 95, 95, 0.3);

  @media screen and (min-width: 1280px) {
    margin: 40px auto 20px auto;
  }
`

const StyledHeading = styled.h3`
  padding: 0 20px;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;

  @media screen and (min-width: 1280px) {
    padding: 0;
    text-align: left;
  }
`

const StyledBlogContent = styled.main`
background: #fff;
padding: 30px 20px;


p {
  max-width: 1280px;
  margin: 20px auto;
}
`;

export default Blog