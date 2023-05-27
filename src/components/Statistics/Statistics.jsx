import StatisticsItem from './StatisticsItem';
import {
  StyledStatistics,
  StyledStatisticsList,
  StyledStatisticsTitle,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StyledStatistics>
      {title && <StyledStatisticsTitle>Upload stats</StyledStatisticsTitle>}
      <StyledStatisticsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem key={id} label={label} percentage={percentage} />
          );
        })}
      </StyledStatisticsList>
    </StyledStatistics>
  );
};

export default Statistics;
