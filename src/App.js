import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/2-Random_Color';
import StarRating from './components/3-Star_Rating';
import ImageSlider from './components/4-Image_Slider';
import LoadMoreData from './components/5-Load_More_Data';
import TreeView from './components/6-Nested_Menu_UI_v1';
import menus from './components/6-Nested_Menu_UI_v1/data';

function App() {
  return (
    <div className="App">
      {/* <Accordian />
      <RandomColor />
      <StarRating noOfStars={10}/>
      <ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}/>
      <LoadMoreData /> */}
      {/* Tree view component/menu UI component / recursive navigation menu */}
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
