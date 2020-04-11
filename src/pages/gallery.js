import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"

import ContentWrapper from '../HOC/BodyWrapper/bodyWrapper'
import GalleryContent from '../components/GalleryContent/galleryContent'

const Gallery = () => (
  <Layout>
    <SEO title="Home" />

    <ContentWrapper>
        <GalleryContent/>
    </ContentWrapper>

  </Layout>
)

export default Gallery
