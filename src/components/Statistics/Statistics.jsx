import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title = undefined, stats }) => {
  const getRandomColor = () =>
    Math.floor(Math.random() * 16777215).toString(16) === 'ffffff'
      ? '000000'
      : Math.floor(Math.random() * 16777215).toString(16);
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css['stat-list']}>
        {stats.map((item, index) => (
          <li
            key={item.id}
            className={css.item}
            style={{ backgroundColor: `#${getRandomColor()}` }}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
