import React from "react";
import { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css";

const Profile = ({ user }) => {
  return (
    <Fragment>
      {user.map(user => (
        <div key={user.id} className={styles.profile}>
          <div className={styles.description}>
            <img
              src={user.avatar}
              alt="user avatar"
              width="120"
              className={styles.avatar}
            />
            <p className={styles.name}>{user.name}</p>
            <p className={styles.tag}>@{user.tag}</p>
            <p className={styles.location}>{user.location}</p>
          </div>

          <ul className={styles.stats}>
            <li>
              <span className={styles.label}>Followers</span>
              <span className={styles.quantity}>{user.stats.followers}</span>
            </li>
            <li>
              <span className={styles.label}>Views</span>
              <span className={styles.quantity}>{user.stats.views}</span>
            </li>
            <li>
              <span className={styles.label}>Likes</span>
              <span className={styles.quantity}>{user.stats.likes}</span>
            </li>
          </ul>
        </div>
      ))}
    </Fragment>
  );
};

Profile.defaultProps = {
  alt: "user avatar"
};

Profile.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      tag: PropTypes.string,
      location: PropTypes.string
    })
  )
};

export default Profile;
