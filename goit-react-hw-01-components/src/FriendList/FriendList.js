import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={styles.friendList}>
        {friends.map(friend => (
          <li key={friend.id} className={styles.item}>
            <span className={friend.isOnline ? styles.online : styles.offline}>
              {friend.isOnline}
            </span>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt=""
              width="58"
            />
            <p className={styles.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};

export default FriendList;
