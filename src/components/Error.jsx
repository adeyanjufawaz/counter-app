import React from 'react'
import {Helmet} from "react-helmet-async"

function Error404() {
  return (
    <>
      <Helmet>
        <title>Errr</title>
        <meta name="description" content="Erorr 404" />
        <link rel="canonical" href="*" />
      </Helmet>
      <div className='danger'>Errror404</div>
    </>
    
  )
}

export default Error404