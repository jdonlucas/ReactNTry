import './App.css';
import Counter from './Counter';
import Clickable from './Component2';


function App() {
  
  return (
    <div className="App">
      <Counter numbers={13} number2={67}/>
      <Clickable />
    </div>
  );
}

export default App;
