import FriendListItem from './FriendListItem';
import { StyledFriendList } from './FriendList.styled';

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
