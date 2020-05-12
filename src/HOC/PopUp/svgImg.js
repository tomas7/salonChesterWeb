import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const SvgImg = (props) => {

  const data = useStaticQuery(graphql`
    query {
      svgimg1: file(relativePath: { eq: "graphics/GroomingZ.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      svgimg2: file(relativePath: { eq: "graphics/CourseM.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 1000, quality: 100) {
           
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      svgimg3: file(relativePath: { eq: "graphics/CoursesForm1.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 1000, quality: 100) {
           
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      svgimg4: file(relativePath: { eq: "graphics/Pen_1.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 1000, quality: 100) {
           
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      svgimg5: file(relativePath: { eq: "graphics/GroomingForm2.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 1000, quality: 100) {
           
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      } 
      svgimg6: file(relativePath: { eq: "graphics/Grad_sleeping_1.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 1000, quality: 100) {
           
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      svgimg7: file(relativePath: { eq: "graphics/Post.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 1000, quality: 100) {
           
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  console.log(props.idx)
  let imgTag =  <Img alt={props.alt}  fluid={data.svgimg1.childImageSharp.fluid} />
  switch (props.idx) {
    case 1:
    imgTag = <Img alt={props.alt} fluid={data.svgimg1.childImageSharp.fluid} />
      break;

    case 2:
    imgTag = <Img alt={props.alt} fluid={data.svgimg2.childImageSharp.fluid} />
      break;

    case 3:
    imgTag = <Img alt={props.alt} style={{top:"unset", bottom:"50px"}} fluid={data.svgimg3.childImageSharp.fluid} />
      break;

    case 4:
    imgTag = <Img alt={props.alt} style={{top:"50px"}} fluid={data.svgimg4.childImageSharp.fluid} />
      break;

    case 5:
    imgTag = <Img alt={props.alt} fluid={data.svgimg5.childImageSharp.fluid} />
      break;

    case 6:
    imgTag = <Img alt={props.alt} fluid={data.svgimg6.childImageSharp.fluid} />
      break;

    case 7:
    imgTag = <Img alt={props.alt} style={{top:"unset", bottom:"50px", left: "50px"}} fluid={data.svgimg7.childImageSharp.fluid} />
      break;

    default:
      break;
  }


    console.log(data)
  return imgTag
}

export default SvgImg
