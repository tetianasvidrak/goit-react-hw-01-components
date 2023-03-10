import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) =>
  friends.map(friend => (
    <FriendListItem
      key={friend.id}
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
    />
  ));

FriendList.propTypes = {
  friends: PropTypes.array,
};
