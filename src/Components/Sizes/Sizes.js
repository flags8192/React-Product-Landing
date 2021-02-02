import React from 'react'
import image1 from '../../images/sizes__image.png'

const Sizes = () => {
  return <React.Fragment>
    <section className="sizes_section">
      <div className="sizes_wrapper">
        <h2>Таблица размеров термобелья</h2>
        <div className="measuring_list clearfix">
          <div className="measuring_item">
            <div className="number_wrapper">
              <div className="number">1</div>
            </div>
            <h4>Обхват груди</h4>
            <p>Измеряем горизонтально по выпуклым точкам груди вокруг тела</p>
          </div>
          <div className="measuring_item">
            <div className="number_wrapper">
              <div className="number">2</div>
            </div>
            <h4>Обхват талии</h4>
            <p>Измеряем горизонтально в наиболее узком месте туловища</p>
          </div>
          <div className="measuring_item">
            <div className="number_wrapper">
              <div className="number">3</div>
            </div>
            <h4>Обхват бедер</h4>
            <p>Измеряем горизонтально по самым выступающим местам ягодиц</p>
          </div>
        </div>
      </div>
      <img src={image1} alt="COLUMBIA" title="COLUMBIA" />
      <div className="table table_men">
        <div className="table_title">Мужчины</div>
        <div className="row">
          <div className="column"/>
          <div className="column">
            <div className="alphabetic_size">M</div>
            <div className="digital_size">(40-44)</div>
          </div>
          <div className="column">
            <div className="alphabetic_size">L</div>
            <div className="digital_size">(44-48)</div>
          </div>
          <div className="column">
            <div className="alphabetic_size">XL</div>
            <div className="digital_size">(48-52)</div>
          </div>
          <div className="column">
            <div className="alphabetic_size">XXL</div>
            <div className="digital_size">(52-56)</div>
          </div>
        </div>
        <div className="row">
          <div className="column">1)</div>
          <div className="column">70-88</div>
          <div className="column">88-100</div>
          <div className="column">100-112</div>
          <div className="column">112-120</div>
        </div>
        <div className="row">
          <div className="column">2)</div>
          <div className="column">70-76-80</div>
          <div className="column">80-92</div>
          <div className="column">92-100</div>
          <div className="column">100-110</div>
        </div>
        <div className="row">
          <div className="column">3)</div>
          <div className="column">80-90</div>
          <div className="column">90-94-98</div>
          <div className="column">98-106</div>
          <div className="column">106-112</div>
        </div>
      </div>
      <div className="table table_women">
        <div className="table_title">Женщины</div>
        <div className="row">
          <div className="column">
            <div className="alphabetic_size">XS</div>
            <div className="digital_size">(38-40)</div>
          </div>
          <div className="column">
            <div className="alphabetic_size">S</div>
            <div className="digital_size">(40-44)</div>
          </div>
          <div className="column">
            <div className="alphabetic_size">M</div>
            <div className="digital_size">(44-48)</div>
          </div>
          <div className="column">
            <div className="alphabetic_size">L</div>
            <div className="digital_size">(48-50)</div>
          </div>
          <div className="column">
            <div className="alphabetic_size">XL</div>
            <div className="digital_size">(50-54)</div>
          </div>
        </div>
        <div className="row">
          <div className="column">82-86</div>
          <div className="column">86-90</div>
          <div className="column">90-94</div>
          <div className="column">94-98</div>
          <div className="column">98-102</div>
        </div>
        <div className="row">
          <div className="column">66-70</div>
          <div className="column">70-74</div>
          <div className="column">74-78</div>
          <div className="column">78-82</div>
          <div className="column">82-86</div>
        </div>
        <div className="row">
          <div className="column">90-94</div>
          <div className="column">94-98</div>
          <div className="column">98-102</div>
          <div className="column">102-106</div>
          <div className="column">106-110</div>
        </div>
      </div>
    </section>
  </React.Fragment>
}

export default Sizes
