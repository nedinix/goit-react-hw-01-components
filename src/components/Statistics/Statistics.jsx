import StatisticsList from './StatisticsList';
import { StyledStatistics, StyledStatisticsTitle } from './Statistics.styled';
import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <StyledStatistics>
      {title && <StyledStatisticsTitle>Upload stats</StyledStatisticsTitle>}
      <StatisticsList data={stats} />
    </StyledStatistics>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
};
