import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"

import Landing from '../components/Landing/landing'
import Service from '../components/Service/service'
import globalStyle from '../global/global.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Landing/>
    <Service pageIndx={1} isGrooming={true}/>
    <Service pageIndx={2} isGrooming={false}/>
  </Layout>
)

export default IndexPage
