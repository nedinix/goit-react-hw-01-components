import StatisticsItem from './StatisticsItem';

const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      {title && <h2 class="title">Upload stats</h2>}
      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem key={id} label={label} percentage={percentage} />
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
