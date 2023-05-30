import TransactionHistory from './TransactionHistory';
import css from './Transaction.module.css';
import PropTypes from 'prop-types';

export default function Transactions({ items }) {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <TransactionHistory items={items} />
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
