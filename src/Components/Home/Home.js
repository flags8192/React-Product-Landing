import React, {Suspense} from 'react'
import '../../App.css'
import Header from '../Header'
// import About from '../About'
// import Benefits from '../Benefits'
// import Catalog from '../Catalog'
// import Sizes from '../Sizes'
// import OrderStep from '../OrderStep'
// import Reviews from '../Reviews'
// import Offer from '../Offer'
// import Footer from '../Footer'
const About = React.lazy(() => import('../About'))
const Benefits = React.lazy(() => import('../Benefits'))
const Catalog = React.lazy(() => import('../Catalog'))
const Sizes = React.lazy(() => import('../Sizes'))
const OrderStep = React.lazy(() => import('../OrderStep'))
const Reviews = React.lazy(() => import('../Reviews'))
const Offer = React.lazy(() => import('../Offer'))
const Footer = React.lazy(() => import('../Footer'))


const Home = () => {
  return (
    <div className="main_wrapper">
      <Suspense fallback={<div>Загрузка...</div>}>
        <Header />
        <About />
        <Benefits />
        <Catalog />
        <Sizes />
        <OrderStep />
        <Reviews />
        <Offer />
        <Footer />
      </Suspense>
    </div>
  )
}

export default Home
