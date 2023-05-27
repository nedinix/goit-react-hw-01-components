import TransactionItem from './TransactionItem';

const TransactionHistory = ({ items }) => {
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
};

export default TransactionHistory;
