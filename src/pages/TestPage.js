import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"

import globalStyle from '../global/global.scss'

const TestPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Test Page</h1>
  </Layout>
)

export default TestPage
