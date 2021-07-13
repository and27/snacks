import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Title from "./components/Title/Title"
import SnacksContainer from './components/SnacksContainer/SnacksContainer';


function App() {
  const title = "Consejos sobre Marketing Digital"
  return (
    <div className="App" style={{ minHeight: "100vh!important"}}>
<NavBar/>
<header className="App-header">
    <Title title={title}/>
       <SnacksContainer/>
      </header>
    </div>
  );
}

export default App;
