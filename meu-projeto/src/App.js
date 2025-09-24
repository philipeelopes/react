import './App.css';
import HelloWord from './components/HelloWord'

function App() {

  const name ='philipe'

  const newName = name.toLocaleUpperCase()

  function soma (a, b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
    <h2>alterando jxs</h2>
    <p>app</p>
    <p>ola {newName}</p>
    <p>soma {soma(1,7)} </p>
    <img src={url} alt="minha imagem" />
    < HelloWord />
    </div>
  );
}

export default App;
