import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import Transactions from './Transactions/Transactions';
import Section from './Section/Section';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <main>
      <div className="container">
        <Section title={'Profile'}>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics title="Upload stats" stats={data} />
        </Section>
        <Section title={'Friend list'}>
          <FriendList friends={friends} />
        </Section>
        <Section title={'Transactions'}>
          <Transactions items={transactions} />
        </Section>
      </div>
    </main>
  );
};
