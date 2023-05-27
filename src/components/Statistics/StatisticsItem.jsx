import { StyledStatisticsItem } from './Statistics.styled';

export default function StatisticsItem({ label, percentage }) {
  return (
    <StyledStatisticsItem>
      <span>{label}</span>
      <span>{percentage}%</span>
    </StyledStatisticsItem>
  );
}
