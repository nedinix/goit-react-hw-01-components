import styled from 'styled-components';
import getRandomHexColor from 'helpers/getRandomHex';

export const StyledStatistics = styled.div`
  max-width: 400px;
  margin: 0 auto;

  background-color: #f4fbfd;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 4px;
  transform: scale(0.99);
  transition: background-color 250ms cubic-bezier(0.13, 0.62, 0.66, 0.26),
    box-shadow 100ms cubic-bezier(0.13, 0.62, 0.66, 0.26),
    transform 100ms cubic-bezier(0.13, 0.62, 0.66, 0.26);
  overflow: hidden;

  &:hover,
  &:focus {
    transform: scale(1);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    background-color: #fbfeff;
  }
`;

export const StyledStatisticsList = styled.ul`
  display: flex;
`;

export const StyledStatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-basis: calc(100% / 5);

  padding-top: 20px;
  padding-bottom: 20px;

  font-size: 16px;
  font-weight: 600;
  color: #fff;

  background-color: ${getRandomHexColor};

  &:hover,
  &:focus {
    background-color: color: rgb(36, 36, 36);
  }
`;

export const StyledStatisticsTitle = styled.h2`
  padding-top: 20px;
  padding-bottom: 20px;

  font-size: 24px;
  font-weight: 600;
  color: rgb(36, 36, 36);
  text-align: center;
`;
