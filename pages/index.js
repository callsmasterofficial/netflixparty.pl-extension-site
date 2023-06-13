import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Text from '../components/Text'
import Text2 from '../components/Text2'
import Fask_ques from '../components/Fask_ques'
import Footer from '../components/Footer'
import Script from 'next/script'

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title:
          'Netflix Party Extension - Enjoy stream & chat in real-time sync    ',
        description:
          'Netflix Party, a perfect plugin enlightening with video playback, chatting & more in real-time sync feature to enlighten your boring empty time by gathering friends.  ',
        keywords:
          'Netflix Party, Netflix Watch Party, Netflix Party Extension, Netflix Party Chrome Extension, Watch Party Netflix, How to do Netflix Party, How to use Netflix Party, How to do a Netflix Party, Netflix Watch Party Extension',
        pageUrl: 'https://www.netflixpartys.pl/',
        featuredImage: '/logo.png',
      },
    },
  }
}

const Home = () => {
  return (
    <div>
      <Script src="https://cdn.tailwindcss.com" />

      <Navbar />
      <Banner />
      <Text />
      <Text2 />
      <Fask_ques />
      <Footer />

      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
    </div>
  )
}

export default Home
