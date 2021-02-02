import React from 'react'
import image1 from '../../images/benefits__benefit1_image.png'
import image2 from '../../images/benefits__benefit2_image.png'
import image3 from '../../images/benefits__benefit3_image.png'
import image4 from '../../images/benefits__benefit4_image.png'
import image5 from '../../images/benefits__benefit5_image.png'
import image6 from '../../images/benefits__benefit6_image.png'

const Benefits = () => {
  return <React.Fragment>
    <section className="benefits_section">
      <div className="benefits_wrapper">
        <h2>Преимущества термобелья</h2>
        <div className="benefits_list">
          <div className="benefit_item">
            <img src={image1} alt="COLUMBIA" title="COLUMBIA" />
            <p>Термобельё справится сразу с двумя задачами: предотвратит переохлаждение и не допустит перегрева</p>
          </div>
          <div className="benefit_item">
            <img src={image2} alt="COLUMBIA" title="COLUMBIA" />
            <p>Безопасность, гигиеничность и удобство ношения термобелья (не раздражает кожу и «не колется»)</p>
          </div>
          <div className="benefit_item">
            <img src={image3} alt="COLUMBIA" title="COLUMBIA" />
            <p>Гибридный двухслойный материал представляет собой сплетённые особым образом натуральные и
              синтетические
              волокна</p>
          </div>
          <div className="benefit_item">
            <img src={image4} alt="COLUMBIA" title="COLUMBIA" />
            <p>Полая структура ткани обеспечивает эффективную теплоизоляцию и быстрый отвод влаги с кожи</p>
          </div>
          <div className="benefit_item">
            <img src={image5} alt="COLUMBIA" title="COLUMBIA" />
            <p>Двухслойное плетение волокон создаёт своеобразную воздушную прослойку, отводящую влагу и сохраняющую
              тепло тела</p>
          </div>
          <div className="benefit_item">
            <img src={image6} alt="COLUMBIA" title="COLUMBIA" />
            <p>Идеальный комфорт и посадка по фигуре, натуральный гиппоаллергенный материал</p>
          </div>
        </div>
      </div>
      <div className="text_block">
        <p>Термобельё рекомендуется надевать на голое тело. Материал – «Thermolite» – не вызывает аллергии, не
          раздражает кожу, быстро отводит влагу с поверхности кожи, оставляя ее сухой, предохраняет от переохлаждения
          и перегрева. Состав материала гигиеничен, гипоаллергенен и безопасен для здоровья. Широкие анатомические
          резинки не перетягивают сосуды в области шеи и кистей, а технология «плоский шов» не натирает кожу.</p>
      </div>
    </section>
  </React.Fragment>
}

export default Benefits
