import React from 'react'

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import slide1 from '../../images/mnenie1.png'
import slide2 from '../../images/mnenie2.png'
import slide3 from '../../images/mnenie3.png'

const Reviews = () => {
  const state = {
    slideArray: [
      {
        id: 1,
        image: slide1,
        alt_img: 'СОLUМВІА',
        title_img: 'СОLUМВІА',
        author: 'Андрей Гриневич, 30 лет',
        review: 'Качество на высоте. Довольно давно пользуюсь термо-бельем, правда, до этого покупал в Японии. Этот товар нисколько не хуже. Оцениваю данный продукт, а также продавца на 5+'
      },
      {
        id: 2,
        image: slide2,
        alt_img: 'СОLUМВІА',
        title_img: 'СОLUМВІА',
        author: 'Ольга Рудина, 28 лет',
        review: 'Обожаю этот костюм. Уже тестировала его в носке по городу и на склоне. Супер-мега-экстра! Влагу отводит отлично, на склоне нареканий вообще не возникло, можно даже позволить себе в них и горнолыжных штанцах посидеть пару минут на склоне и ничем не заболеть. И внешний вид крутой.'
      },
      {
        id: 3,
        image: slide3,
        alt_img: 'СОLUМВІА',
        title_img: 'СОLUМВІА',
        author: 'Александр Тимонин, 32 года',
        review: 'Очень хорошего качества, плотно прилегает к телу, размер в размер совпадает. Приятно ощущается на теле, швы не мешают, через одежду не выделяется так как тонкое и хорошо тянется. Покупкой я более чем доволен'
      }
    ]
  }

  return <React.Fragment>
    <section className="reviews_section">
      <h2>Отзывы <span>покупателей</span></h2>

      <OwlCarousel className='reviews_list owl-carousel' autoplay loop margin={10} nav items={1}>
        {state.slideArray.map(({id, image, alt_img, title_img, author, review}) => (
          <div key={id} className='review_item'>
            <img src={image} alt={alt_img} title={title_img} />
            <div className="author_info">{author}</div>
            <p>{review}</p>
          </div>
        ))}
      </OwlCarousel>

    </section>
  </React.Fragment>
}

export default Reviews
