import React from 'react'
import Navbar from '../components/Navbar'
import Error from '../components/404'

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title:
          'Netflix Party - obejrzyjmy razem | Zainstaluj rozszerzenie teraz',
        description:
          'Netflix Party umożliwia oglądanie serwisu Netflix z przyjaciółmi online. Zainstaluj rozszerzenie, aby zsynchronizować odtwarzanie wideo.',
        keywords:
          'Netflix Party, Netflix Watch Party, Netflix Party Extension, Netflix Party Chrome Extension, Watch Party Netflix, How to do Netflix Party, How to use Netflix Party, How to do a Netflix Party, Netflix Watch Party Extension',
        pageUrl: 'https://www.netflixparty.pl/',
        featuredImage: '/logo.png',
      },
    },
  }
}
function error() {
  return (
    <div className="error_404 ">
      <div>
        <Navbar />
      </div>
      <Error />
    </div>
  )
}

export default error
