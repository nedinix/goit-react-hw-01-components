import FriendListItem from './FriendListItem';
import { StyledFriendList } from './FriendList.styled';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <StyledFriendList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </StyledFriendList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
