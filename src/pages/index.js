import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"

import Landing from '../components/Landing/landing'
import Service from '../components/Service/service'
import globalStyle from '../global/global.scss'

import flatImgG from '../images/graphics/GroomingM.png'
import flatImgGZ from '../images/graphics/GroomingZ.png'
import flatImgC from '../images/graphics/CourseM.png'

import Recommendation from '../components/Recommendation/Recommendation'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Landing/>
    <Service 
      pageIndx={1} 
      isGrooming={true}
      flatImg={flatImgGZ}
      bouble1c="#4B738B"
      bouble2c="#88ACBC"
      boubleSVG="M748.48,569.35C710.61,755.77,611,756.53,520.81,765.17S407.19,709.6,324.08,686.75s-117-3.09-204.66-68.55S62.19,468.39,105.83,428c90.16-83.37,38.29-138.91,29-219.87S185.49,27.23,346.63,23.53,527,129.74,558.55,192.11,641,298.7,679.51,323.28,786.35,382.93,748.48,569.35Z"
      boubleSVGTransform="translate(-63.18 -63.44)"
    />
    <Service 
      pageIndx={2} 
      isGrooming={false}
      flatImg={flatImgC}
      bouble1c="#F29F8D"
      bouble2c="#F27D72"
      boubleSVG="M669.82,618.77c-10.9,76.5-59.73,100.48-112.92,95.68s-115-44-167.79-43.59S251.29,656.25,216,609.49c-25.65-34-32.26-67.25-2.18-119.56s24.85-121.7,10-209.3,64.09-143.4,115.1-149.5S486.27,125,498.92,193,512,343,569.54,414.94,680.72,542.26,669.82,618.77Z"
      boubleSVGTransform="translate(-83.18 -103.44)"
    />
    <Recommendation/>
  </Layout>
)

export default IndexPage
