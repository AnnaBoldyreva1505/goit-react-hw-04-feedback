import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.div}>
      <p className={css.p}>Good: {good} </p>
      <p className={css.p}>Neutral: {neutral}</p>
      <p className={css.p}>Bad: {bad}</p>
      <p className={css.p}>Total: {total} </p>
      <p className={css.p}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
