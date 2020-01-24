import React from "react";
import Profile from "./Profile/Profile";
import user from "./Profile/user.json";
import Statistics from "./Statistics/StatisticalData";
import statisticalData from "./Statistics/statistical-data.json";
import FriendList from "./FriendList/FriendList";
import friends from "./FriendList/friends.json";
import TransactionHistory from "./Transactions/TransactionHistory";
import transactions from "./Transactions/transactions.json";

const App = () => (
  <div>
    <Profile user={user} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
