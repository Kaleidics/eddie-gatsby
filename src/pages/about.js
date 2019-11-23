import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"

import Head from "../components/head"

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About Me</h1>
            <p>I like dogs.</p>
            <p>Go to <Link to="/contact">Contact Page</Link></p>
        </Layout>
           
    )
}

export default AboutPage;