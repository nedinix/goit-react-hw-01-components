import styled from 'styled-components';

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
  padding-left: 20px;
  padding-right: 20px;

  font-size: 16px;
  font-weight: 600;
  color: #383838a1;

  background-color: #f4fbfd;
  border-radius: 4px;

  transform: scale(0.99);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  transition: background-color 250ms cubic-bezier(0.13, 0.62, 0.66, 0.26),
    box-shadow 100ms cubic-bezier(0.13, 0.62, 0.66, 0.26),
    transform 100ms cubic-bezier(0.13, 0.62, 0.66, 0.26);

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &:hover,
  &:focus {
    transform: scale(1);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;

export const StyledFriendStatus = styled.span`
  width: 18px;
  height: 18px;
  display: block;
  margin-right: 14px;

  border-radius: 50%;
  background-color: ${props => props.color};
`;

export const StyledFriendAvatar = styled.img`
  wwidth: 46px;
  height: 46px;
  margin-right: 10px;

  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
