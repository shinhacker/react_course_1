import './App.css';

function App() {

  //Creating variables
  const title = "Welcome to new blog";
  //Javascript also allowed

  const link = "https://google.com";
  return (
    <div className="App">
        <div className="content">
          <h1>{ Math.random()*10}</h1>
        </div>

      <a href={link}>Google Site</a>
    </div>
  );
}

export default App;
