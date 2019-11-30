import React from "react"
import { Link } from "gatsby"

import Head from '../components/head'

import Layout from "../components/layout"
import Header from "../components/Header"
import BodyContent from "../components/bodyContent"
const IndexPage = () => {
  return (
    <Layout>
      <Head title="Eddie Chu" />
      <Header />
      <BodyContent />
    </Layout>
  )
}

export default IndexPage
