import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

import Head from "../components/head"
import Navbar from "../components/navbar"
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
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
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

    return (
        <Layout>
          <Head title={props.data.contentfulBlogPost.title}/>
          <Navbar />
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.publishedDate}</p>
          {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </Layout>
    )
}

export default Blog