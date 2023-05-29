import { StyledStatisticsList } from './Statistics.styled';
import StatisticsItem from './StatisticsItem';

export default function StatisticsList({ data }) {
  return (
    <StyledStatisticsList>
      {data.map(({ id, label, percentage }) => (
        <StatisticsItem key={id} label={label} percentage={percentage} />
      ))}
    </StyledStatisticsList>
  );
}
