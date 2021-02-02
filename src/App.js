import React from 'react'
// import { Switch, Route } from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import './App.css'
// import Header from './Components/Header'
// import About from './Components/About'
// import Benefits from './Components/Benefits'
// import Catalog from './Components/Catalog'
// import Sizes from './Components/Sizes'
// import OrderStep from './Components/OrderStep'
// import Reviews from './Components/Reviews'
// import Offer from './Components/Offer'
// import Footer from './Components/Footer'
import Confidential from './Components/Confidential'
import Agreement from './Components/Agreement'
import Home from './Components/Home'

function App() {
  return (
    // <div className="main_wrapper">
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route path='/confidential' render={() => <Confidential />} />
        <Route path='/agreement' render={() => <Agreement />} />
      </Switch>
      // <Header />
      // <About />
      // <Benefits />
      // <Catalog />
      // <Sizes />
      // <OrderStep />
      // <Reviews />
      // <Offer />
      // <Footer />
    // </div>
  )
}

export default App
