import './App.css'
import Header from './components/Header/Header';
import SearchContainer from './components/SearchContainer/SearchContainer';
import ParkingCards from './components/ParkingCards/ParkingCards';

function App() {


  return (
    <div className='app-body'>
      <Header />
      <SearchContainer />
      <ParkingCards />
    </div>
  );
}

export default App;
