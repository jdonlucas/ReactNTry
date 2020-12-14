import './App.css';

function Tabs({ tabName }) {
  return (
    <li>
      <a>
        {tabName}
      </a>
    </li>
  )
}

function Content() {
  return (
    <div className="content">

    </div>
  )
}

function App() {
  let tabs = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'];
  return (
    <div className="App">
      <ul className="navbar-tabs group">
        {tabs.map((el,index) => (
            <Tabs key={index} tabName={el} />
          )
        )}
      </ul>
      <Content />
    </div>
  );
}

export default App;
