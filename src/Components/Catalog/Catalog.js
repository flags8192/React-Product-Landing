import React from 'react'
import {Link} from 'react-scroll'

const Catalog = () => {
  return <React.Fragment>
    <section className="catalog_section">
      <div className="product men_model">
        <h2>Мужское термобелье <span>COLUMBIA</span></h2>
        <ul>
          <li><b>Материал:</b><br />50% полиэстер, 50% хлопок</li>
          <li><b>Цвет:</b> Черный</li>
          <li><b>Размер:</b> M, L, XL, XXL</li>
          <li><b>Сезон:</b> ОСЕНЬ / ЗИМА / ВЕСНА</li>
        </ul>
        <div className="temperature_block">
          <div className="t_item">-5°C</div>
          <div className="t_item">-35°C</div>
        </div>
        <div className="price_block">
          <div className="price_old">
            <div className="text">Обычная цена:</div>
            <div className="value">980грн</div>
          </div>
          <div className="discount">-53%</div>
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
      </div>
      <div className="product women_model">
        <h2>Женское термобелье <span>COLUMBIA</span></h2>
        <ul>
          <li><b>Материал:</b><br />50% полиэстер, 50% хлопок</li>
          <li><b>Цвет:</b> Черный</li>
          <li><b>Размер:</b> XS, S, M, L</li>
          <li><b>Сезон:</b> ОСЕНЬ / ЗИМА / ВЕСНА</li>
        </ul>
        <div className="temperature_block">
          <div className="t_item">-5°C</div>
          <div className="t_item">-35°C</div>
        </div>
        <div className="price_block">
          <div className="price_old">
            <div className="text">Обычная цена:</div>
            <div className="value">980грн</div>
          </div>
          <div className="discount">-53%</div>
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
      </div>
    </section>
  </React.Fragment>
}

export default Catalog
