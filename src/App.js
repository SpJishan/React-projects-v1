import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/2-Random_Color';
import StarRating from './components/3-Star_Rating';

function App() {
  return (
    <div className="App">
      <Accordian />
      <RandomColor />
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
