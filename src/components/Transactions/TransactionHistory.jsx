import TransactionItem from './TransactionItem';

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
