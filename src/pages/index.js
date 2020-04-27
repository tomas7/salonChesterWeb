import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"

import Landing from '../components/Landing/landing'
import Service from '../components/Service/service'
import globalStyle from '../global/global.scss'

import Recommendation from '../components/Recommendation/Recommendation'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Landing/>
    <Service pageIndx={1} isGrooming={true}/>
    <Service pageIndx={2} isGrooming={false}/>
    <Recommendation/>
  </Layout>
)

export default IndexPage
