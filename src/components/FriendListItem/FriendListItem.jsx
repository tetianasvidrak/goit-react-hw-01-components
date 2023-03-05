import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ key, avatar, name, isOnline }) => {
  return (
    <li key={key} className={css.item}>
      <span className={isOnline ? css.online : css.offline}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
