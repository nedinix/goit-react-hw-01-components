import {
  StyledFriendListItem,
  StyledFriendStatus,
  StyledFriendAvatar,
} from './FriendList.styled';
import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <StyledFriendListItem>
      <StyledFriendStatus color={isOnline ? 'yellowgreen' : 'red'}>
        {isOnline}
      </StyledFriendStatus>
      <StyledFriendAvatar src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </StyledFriendListItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
