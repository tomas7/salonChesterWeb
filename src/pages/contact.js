import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"

import ContentWrapper from '../HOC/BodyWrapper/bodyWrapper'
import ContactContent from '../components/ContactContent/contactContent'

const Contact = () => (
  <Layout>
    <SEO title="Home" />
    <ContentWrapper>
        <ContactContent/>
    </ContentWrapper>

  </Layout>
)

export default Contact
