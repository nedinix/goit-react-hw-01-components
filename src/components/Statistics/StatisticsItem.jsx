import { StyledStatisticsItem } from './Statistics.styled';

export default function StatisticsItem({ label, percentage }) {
  return (
    <StyledStatisticsItem>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </StyledStatisticsItem>
  );
}
