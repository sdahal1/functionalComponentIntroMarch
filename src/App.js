import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu itemName={"Calamari"} desc = "Its some fried squid but its good tho" price = {12.99} orders= {12}></Menu>
      <Menu itemName={"Al Pastor Tacos"} desc = "Its some fried squid but its good tho" price = {12.99} orders= {10}></Menu>
      <Menu itemName={"Salmon"} desc = "Its some fried squid but its good tho" price = {12.99} orders= {5}></Menu>

    </div>
  );
}

export default App;
