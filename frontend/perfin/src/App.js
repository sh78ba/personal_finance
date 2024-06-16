
import './App.css';
import MainPage from './components/Body/MainPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App flex">
      <div className='w-1/6 '><Navbar/></div>
      <div className='w-5/6'><MainPage/></div>

    </div>
  );
}

export default App;
