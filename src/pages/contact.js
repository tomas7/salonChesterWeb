import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"

import ContentWrapper from '../HOC/BodyWrapper/bodyWrapper'
import ContactContent from '../components/ContactContent/contactContent'
import flatImgC_1 from '../images/graphics/Contact.png'

const Contact = () => (
  <Layout>
    <SEO title="contact" />
    <ContentWrapper>
        <ContactContent
              pageIndx={7}
              bouble1c="#F29F8D"
              bouble2c="#F27D72"
              boubleSVG="M673.51,543.82C635.44,596.9,550.25,635,475.16,626.68s-178-20.94-219.44-8.29-134.32-6.75-178.8-63.78-34.59-171-2.88-227S143.85,237,210.8,233s96.92,7.6,135.24,33.38,76.56,32.33,165.82,2.23S702.61,278.07,716.63,358,711.58,490.73,673.51,543.82Z"
              // boubleSVGTransform="translate(-06.84 -502.27)"
              boubleSVGTransform="translate(246.84 -532.27)"
            
              />
    </ContentWrapper>

  </Layout>
)

export default Contact
