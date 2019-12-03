import React from "react"


import Head from '../components/head'

import Layout from "../components/layout"
import Header from "../components/Header"
import BodyContent from "../components/bodyContent"
import pplace from "../images/pplace.png"
const IndexPage = () => {
  return (
    <Layout hero={pplace} herovert={pplace} color1="rgba(0, 192, 255, 0.8)" color2="rgba(0, 158, 126, 0.9)">
      <Head title="Eddie Chu" />
      <Header />
      <BodyContent />
    </Layout>
  )
}

export default IndexPage
