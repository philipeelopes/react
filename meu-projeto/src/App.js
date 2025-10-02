import './App.css';
import OutraLista from './components/OutraLista';


function App() {

  const meusItens = ['react', 'value', 'angular']

  return (
    <div className="App">
      <h1>
        Rederização de listas
      </h1>
      <OutraLista itens={meusItens} />
     
      
       

    </div>
  )
}

export default App;
