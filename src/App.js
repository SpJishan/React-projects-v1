import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/2-Random_Color';
import StarRating from './components/3-Star_Rating';
import ImageSlider from './components/4-Image_Slider';

function App() {
  return (
    <div className="App">
      <Accordian />
      <RandomColor />
      <StarRating noOfStars={10}/>
      <ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}/>
    </div>
  );
}

export default App;
