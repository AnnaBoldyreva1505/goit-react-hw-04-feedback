import PropTypes from 'prop-types';
import css from './Section.module.css'

export const Section = ({ title, children }) => {
  return (
    <section>
      {<h2 className={css.title}>{title}</h2>}
      {children}
    </section>
  );
};

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Section;
