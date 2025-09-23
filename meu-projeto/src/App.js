import logo from './logo.svg';
import './App.css';

function App() {

  const name ='philipe'

  const newName = name.toLocaleUpperCase()

  function soma (a, b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
    <h1>Ola react</h1>
    <h2>alterando jsx</h2>
    <p>app</p>
    <p>ola {newName}</p>
    <p>soma {soma(1,7)} </p>
    <img src={url} alt="minha imagem" />
    </div>
  );
}

export default App;
