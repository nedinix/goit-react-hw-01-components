import {
  StyledFriendListItem,
  StyledFriendStatus,
  StyledFriendAvatar,
} from './FriendList.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <StyledFriendListItem>
      <StyledFriendStatus color={isOnline ? 'green' : 'red'}>
        {isOnline}
      </StyledFriendStatus>
      <StyledFriendAvatar src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </StyledFriendListItem>
  );
}
