import React from "react"
import { Helmet } from "react-helmet"

const SEO = () => {
  const SiteTitle = "Sandbox"
  return (
    <>
      <Helmet>
        <title>{SiteTitle}</title>
      </Helmet>
    </>
  )
}

export default SEO
