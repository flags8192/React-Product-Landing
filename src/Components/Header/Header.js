import React from 'react'
import {Link} from 'react-scroll'

const Header = () => {

  return <React.Fragment>
    <header className="offer_section offer_top">
      <ul className="triggers">
        <li>100% гарантия качества</li>
        <li>Лучший товар года</li>
      </ul>
      <p className="subtitle"><span>Теплое немецкое термобелье</span></p>
      <h1 className="main_title">COLUMBIA</h1>
      <p className="description">Термобелье согревает и сохраняет тепло естественным образом до<br />-35°C</p>
      <div className="discount">
        <div className="value">-53%</div>
        <div className="text">sale</div>
      </div>
      <ul className="benefits">
        <li>Натуральная ткань</li>
        <li>Высокое качество</li>
        <li>Анатомический крой</li>
        <li>Натуральный бактериосептик</li>
      </ul>
      <div className="price_wrapper">
        <div className="price_block">
          <div className="price_old">
            <div className="text">Обычная цена:</div>
            <div className="value">980грн</div>
          </div>
          <div className="price_new">499грн</div>
        </div>
        <Link
          className="button"
          activeClass="active"
          to="order_form"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >Сделать заказ</Link>
        <div className="products_count">Осталось <span>6</span> упаковок по акции</div>
      </div>
    </header>
  </React.Fragment>
}

export default Header
