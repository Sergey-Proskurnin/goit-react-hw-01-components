import Profile from "./components/Profile";
import {name, tag, location, avatar, stats} from "./user.json";


const App = () => (
  <Profile
    name={name}
    tag={tag}
    location={location}
    avatar={avatar} 
    stats={stats}
  />
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
