/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const ScrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      className="btn btn-outline-primary btn-floating btn-lg"
      id="btn-back-to-top"
      onClick={ScrollToTop}
      style={isVisible ? { display: 'block' } : { display: 'none' }}
    >
      <i className="fa fa-arrow-up" />
    </button>
  );
};
