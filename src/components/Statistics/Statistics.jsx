import StatisticsList from './StatisticsList';
import { StyledStatistics, StyledStatisticsTitle } from './Statistics.styled';
import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <StyledStatistics>
      {title && <StyledStatisticsTitle>Upload stats</StyledStatisticsTitle>}
      <StatisticsList stats={stats} />
    </StyledStatistics>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
