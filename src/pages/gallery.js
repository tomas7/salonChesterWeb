import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"

import ContentWrapper from '../HOC/BodyWrapper/bodyWrapper'
import GalleryContent from '../components/GalleryContent/galleryContent'
import { Gallery } from "gatsby-theme-gallery";

const GalleryMy = () => (
  <Layout>
    <SEO title="Home" />

    <ContentWrapper>
    <div className="galleryWrappe">
      <h1>Gellery</h1>
  
    <Gallery />
    </div>
  
    </ContentWrapper>

  </Layout>
)

export default GalleryMy
