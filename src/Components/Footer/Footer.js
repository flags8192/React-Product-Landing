import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return <React.Fragment>
    <footer className="footer_section">
      <Link to='/confidential'>Политика конфиденциальности</Link><br/>
      <Link to='/agreement'>Пользовательское соглашение</Link>
      {/*<a target="_blank" href="">Политика конфиденциальности</a><br />*/}
      {/*<a target="_blank" href="">Пользовательское соглашение</a>*/}
    </footer>
  </React.Fragment>
}

export default Footer
