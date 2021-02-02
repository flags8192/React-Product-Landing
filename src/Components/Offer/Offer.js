import React, {useEffect, useState} from 'react'
import {Field, Formik} from 'formik'
import * as Yup from 'yup'
import {declOfNumber} from '../../Utils'
import {post} from '../../api/request'

const Offer = () => {
  const [timeUp, setTimeUp] = useState('')
  const [showResults, setShowResults] = React.useState(false)
  const [submitting, setSubmitting] = useState(false)

  const onClick = () => setShowResults(true)

  const productQty = process.env.REACT_APP_PRODUCT_QTY
  const productPrice = process.env.REACT_APP_PRODUCT_PRICE
  const productSalePrice = process.env.REACT_APP_PRODUCT_SALE_PRICE

  let deadline = new Date(process.env.REACT_APP_OFFER_TIME).getTime()

  const validationFormSchema = Yup.object()
    .shape({
      user_name: Yup.string()
        .required('Введите Ваше имя'),
      user_phone: Yup.string()
        .required('Введите Ваш номер телефона')
    })

  const Form = () => {
    const handleSubmit = async (values) => {
      try {
        setSubmitting(true)
        console.log(values)
        await post('/api/auth/login', values)
          .then((response) => {
            if (response.data.result === 'success') {
              setSubmitting(false)
              localStorage.setItem('TOKEN_KEY', response.data.token)
              // history.push('/dashboard');
            } else if (response.data.result === 'error') {
              setSubmitting(false)
              // swal('Ошибка!', response.data.message, 'error');
            }
          })
      } catch (error) {
        setSubmitting(false)
        // await swal('Ошибка!', error.message, 'error');
      }
    }

    return <Formik
      initialValues={{
        user_name: '',
        user_phone: ''
      }}
      onSubmit={async (values) => {
        await handleSubmit(values)
      }}
      validationSchema={validationFormSchema}
    >
      {(properties) => SubmitForm(properties)}
    </Formik>
  }

  useEffect(() => {
    const countDownDate = new Date(deadline).getTime()
    const x = setInterval(function () {
      const now = new Date().getTime()
      const distance = countDownDate - now
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      document.getElementById('days').innerHTML = days + ''
      document.getElementById('hours').innerHTML = hours + ''
      document.getElementById('minutes').innerHTML = minutes + ''
      document.getElementById('seconds').innerHTML = seconds + ''

      document.getElementById('daysText').innerHTML = declOfNumber(days, ['день', 'дня', 'дней']) + ''
      document.getElementById('hoursText').innerHTML = declOfNumber(hours, ['час', 'часа', 'часов']) + ''
      document.getElementById('minutesText').innerHTML = declOfNumber(minutes, ['минута', 'минуты', 'минут']) + ''
      document.getElementById('secondsText').innerHTML = declOfNumber(seconds, ['секунда', 'секунды', 'секунд']) + ''

      if (distance < 0) {
        clearInterval(x)
        setTimeUp('Время акции истекло !')
        document.getElementById('demo').innerHTML = 'EXPIRED'
      }
    }, 1000)
    return () => clearInterval(x)
  })

  const SubmitForm = (properties) => {
    const {
      values: {
        user_name,
        user_phone
      },
      handleSubmit,
      handleChange
    } = properties

    return (
      <form onSubmit={handleSubmit} className="order_form">
        <Field
          name="user_name"
          type="text"
          placeholder="Введите Ваше имя"
          value={user_name}
          onChange={handleChange}
          className="input"
          required
        />
        <Field
          name="user_phone"
          type="text"
          placeholder="Введите Ваш телефон"
          value={user_phone}
          onChange={handleChange}
          className="input"
          required
        />
        <button
          type="submit"
          className="button"
        >
          Сделать заказ
        </button>
      </form>
    )
  }

  return <React.Fragment>
    <section className="offer_section offer_bottom">
      <h4>Закажите прямо сейчас</h4>
      <p className="subtitle"><span>Теплое немецкое термобелье</span></p>
      <h3 className="main_title">COLUMBIA</h3>
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
      <div className="form_wrapper" id="order_form">
        <div className="timer_block clearfix">
          <p>До конца <span>акции осталось:</span></p>
          <div className="timer clearfix">
            {!timeUp ? <>
                <div className="timer_item">
                  <div className="text" id="daysText" />
                  <div className="count hours" id="days" />
                </div>
                <div className="timer_item">
                  <div className="text" id="hoursText" />
                  <div className="count hours" id="hours" />
                </div>
                <div className="timer_item">
                  <div className="text" id="minutesText" />
                  <div className="count minutes" id="minutes" />
                </div>
                <div className="timer_item">
                  <div className="text" id="secondsText" />
                  <div className="count seconds" id="seconds" />
                </div>
              </>
              : <div className="timeUp">{timeUp}</div>}
          </div>
        </div>
        <div className="price_block">
          {!timeUp ? <>
              <div className="price_old">
                <div className="text">Обычная цена:</div>
                <div className="value">{productPrice}грн</div>
              </div>
              <div className="price_new">{productSalePrice}грн</div>
            </>
            : <div className="price_new">{productPrice}грн</div>
          }
        </div>
        {!showResults ?
          <button id="writeForm" className="button" type="submit" disabled={submitting} onClick={onClick}>Сделать
            заказ</button>
          : null}
        {showResults ? <Form /> : null}

        <div
          className="products_count">Осталось <span>{productQty}</span> {declOfNumber(productQty, ['упаковка', 'упаковки', 'упаковок'])} по
          акции
        </div>
      </div>
    </section>
  </React.Fragment>
}

export default Offer
