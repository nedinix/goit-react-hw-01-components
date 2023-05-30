import { StyledStatisticsList } from './Statistics.styled';
import StatisticsItem from './StatisticsItem';
import PropTypes from 'prop-types';

export default function StatisticsList({ stats }) {
  return (
    <StyledStatisticsList>
      {stats.map(({ id, label, percentage }) => (
        <StatisticsItem key={id} label={label} percentage={percentage} />
      ))}
    </StyledStatisticsList>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
