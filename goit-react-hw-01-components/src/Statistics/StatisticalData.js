import React from "react";
import { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./StatisticalData.module.css";

function getRandomColorRgb() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

const Statistics = ({ title, stats }) => (
  <Fragment>
    <section className={styles.statistics}>
      {{ title } && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={styles.item}
            style={{
              backgroundColor: getRandomColorRgb()
            }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  </Fragment>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  )
};

export default Statistics;
