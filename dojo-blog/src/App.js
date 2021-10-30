import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {

  //Creating variables
  const title = "Welcome to new blog";
  //Javascript also allowed

  const link = "https://google.com";
  return (
    <div className="App">
        <Navbar/>
        <div className="content">
          <Home/>
        </div>

    </div>
  );
}

export default App;
