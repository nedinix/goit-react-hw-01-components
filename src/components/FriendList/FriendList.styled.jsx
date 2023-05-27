import styled from 'styled-components';
import friends from 'data/friends.json';

export const StyledFriendList = styled.ul`
  max-width: 300px;
  display: block;
  margin-right: auto;
  margin-left: auto;
`;

export const StyledFriendListItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;

  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 12px;
  padding-right: 12px;

  font-size: 16px;
  font-weight: 600;
  color: #383838a1;

  background-color: #f4fbfd;
  border-radius: 4px;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const StyledFriendStatus = styled.span`
  width: 12px;
  height: 12px;
  display: block;
  border-radius: 50%;

  background-color: green;
`;
