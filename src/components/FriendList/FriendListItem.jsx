import { StyledFriendListItem, StyledFriendStatus } from './FriendList.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <StyledFriendListItem>
      <StyledFriendStatus>{isOnline}</StyledFriendStatus>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </StyledFriendListItem>
  );
}
