import * as React from "react";
import { Link } from "react-router-dom";

import "./footerStyles.scss";

export const Footer: React.FC = () => {
  return (
    <footer id='footer' className='footer'>
      <div className='container flex-center'>
        <Link to='https://github.com/heyitsanuar' className='footer__icon-social github'>
          <i className='fab fa-github'></i>
        </Link>
        <Link to='https://www.facebook.com/heyitsanuar' className='footer__icon-social facebook'>
          <i className='fab fa-facebook-f'></i>
        </Link>
        <Link
          to='https://www.linkedin.com/in/anuar-jim%C3%A9nez-5a87ba14a/'
          className='footer__icon-social linkedin'
        >
          <i className='fab fa-linkedin-in'></i>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
