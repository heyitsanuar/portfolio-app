import React from 'react';

import './footer.styles.css';

export const FooterComponent = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container flex-center">
        <a href="https://github.com/heyitsanuar" className="footer__icon-social fab fa-github" />
        <a
          href="https://www.facebook.com/heyitsanuar"
          className="footer__icon-social fab fa-facebook-f"
        />
        <a
          href="https://www.linkedin.com/in/anuar-jim%C3%A9nez-5a87ba14a/"
          className="footer__icon-social fab fa-linkedin-in"
        />
      </div>
    </footer>
  );
};
