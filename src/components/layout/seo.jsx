import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            facebookImage
            twitterImage
            siteUrl
            siteName
          }
        }
      }
    `
  )

  console.log(site.siteMetadata.twitterImage)
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `robots`,
          content: "follow, index",
        },
        {
          property: "og:url",
          content: site.siteMetadata.siteUrl,
        },
        {
          property: "og:site_name",
          content: site.siteMetadata.siteName,
        },
        {
          name: "image",
          property: "og:image",
          content: site.siteMetadata.facebookImage,
        },
        { property: "og:image:width", content: "1200" },
        {
          property: "og:image:height",
          content: "630",
        },

        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "twitter:image",
          content: site.siteMetadata.twitterImage,
        },
        {
          property: "twitter:image:alt",
          content: site.siteMetadata.siteName,
        },
        {
          property: "twitter:site",
          content: "@SimonBlurton",
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
