import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import {getRandomHexColor} from 'helpers/getRandomColor';

export const Statistics = ({title, stats}) => {
 
    return (
      <section className={css.statisticsBox}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statsticsList}>
          {stats.map(({id, label, percentage}) =>
          <li key={id} className={css.statisticsItem} 
          style={{
            backgroundColor: getRandomHexColor()
          }}> 
           <span>{label}</span>
           <span className={css.itemPercent}>{percentage}%</span>
          </li>
          )}
        </ul>
      </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats:  PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
    )
}
