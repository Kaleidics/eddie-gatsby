import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

import Head from "../components/head"

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
            
          }
        }
      }
    }
  `)

    return (
      <Layout>
        <Head title="Blog"/>
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {
            data.allContentfulBlogPost.edges.map((edge) => {
              return (
                <li className={blogStyles.post}>
                  <Link to={`/blog/${edge.node.slug}`}>
                    <h2>{edge.node.title}</h2>
                    
                  </Link>
                </li>
              )
            })
          }
        </ol>
      </Layout>
    )
}

export default BlogPage;