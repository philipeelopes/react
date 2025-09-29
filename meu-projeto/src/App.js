import './App.css';
import HelloWord from './components/HelloWord'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase';

function App() {

  const nome = 'maria'

  return (
    <div className="App">
      <h1>
        testando o csss 
      </h1>
 
  <Frase/>
  <Frase/>
   <SayMyName nome="philipe" />
     <SayMyName nome="lopes" />
       <SayMyName nome="ana" />
         <SayMyName nome="canacan" />
           <SayMyName nome={nome} />
           <Pessoa 
           nome="philipe"
           idade="20"
           profissao="programador"
           foto="https://via.placeholder.com/150"
           />

    </div>
  )
}

export default App;
