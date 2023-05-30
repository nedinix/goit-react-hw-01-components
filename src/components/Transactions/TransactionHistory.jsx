import TransactionItem from './TransactionItem';
import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
  return items.map(({ id, type, amount, currency }) => {
    return (
      <TransactionItem
        key={id}
        type={type}
        amount={amount}
        currency={currency}
      />
    );
  });
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
