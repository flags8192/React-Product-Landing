import React from 'react'
import image1 from '../../images/order_steps__step1_icon.png'
import image2 from '../../images/order_steps__step2_icon.png'
import image3 from '../../images/order_steps__step3_icon.png'
import image4 from '../../images/order_steps__step4_icon.png'

const OrderStep = () => {
  return <React.Fragment>
    <section className="order_steps_section">
      <h2>Как заказать?</h2>
      <div className="steps_list">
        <div className="step_item">
          <img src={image1} alt="COLUMBIA" title="COLUMBIA" />
          <div className="number">01</div>
          <p>Оставляете заявку на сайте</p>
        </div>
        <div className="step_item">
          <img src={image2} alt="COLUMBIA" title="COLUMBIA" />
          <div className="number">02</div>
          <p>Наш менеджер уточняет детали заказа</p>
        </div>
        <div className="step_item">
          <img src={image3} alt="COLUMBIA" title="COLUMBIA" />
          <div className="number">03</div>
          <p>Доставляем ваш товар в течение 1-10 дней</p>
        </div>
        <div className="step_item">
          <img src={image4} alt="COLUMBIA" title="COLUMBIA" />
          <div className="number">04</div>
          <p>Оплачиваете при получении</p>
        </div>
      </div>
    </section>
  </React.Fragment>
}

export default OrderStep
