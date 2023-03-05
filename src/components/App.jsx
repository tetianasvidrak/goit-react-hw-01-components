import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactionHistory from '../transactions.json';
import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      className="app"
      // style={{
      //   // height: '100vh',
      //   display: 'flex',
      //   flexDirection: 'column',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Title" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactionHistory} />
    </div>
  );
};
