import TransactionHistory from './TransactionHistory';

const Transactions = ({ items }) => {
  return (
    <table class="transaction-history">
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
};

export default Transactions;
