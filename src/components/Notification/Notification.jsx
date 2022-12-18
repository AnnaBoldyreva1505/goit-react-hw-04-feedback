import PropTypes from 'prop-types';
import css from './Notification.module.css'

export const Notification = ({ message }) => {
  return <p className={css.p}>{message}</p>;
};


Notification.prototype = {
  message: PropTypes.isRequired,
};

export default Notification;
