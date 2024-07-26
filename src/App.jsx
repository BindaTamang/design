import './App.scss';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Dashboard/>
    </div>
  );
}

export default App;
