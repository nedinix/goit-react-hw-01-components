import { StyledStatisticsItem } from './Statistics.styled';
import PropTypes from 'prop-types';

export default function StatisticsItem({ label, percentage }) {
  return (
    <StyledStatisticsItem>
      <span>{label}</span>
      <span>{percentage}%</span>
    </StyledStatisticsItem>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
