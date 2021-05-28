import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";
import TransactionHistory from './components/TransactionHistory';

import {name, tag, location, avatar, stats} from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";


const App = () => (
  <div>
    <Profile name={name}
    tag={tag}
    location={location}
    avatar={avatar}
    stats={stats}
    />
  
  <Statistics
   title="Upload stats"
    stats={statisticalData}
    />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
  
  
)
 
export default App;
























// =========================================================================================================================
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
