import './App.css';
import HelloWord from './components/HelloWord'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {

  const nome = 'maria'

  return (
    <div className="App">
 
   
   <SayMyName nome="philipe" />
     <SayMyName nome="lopes" />
       <SayMyName nome="ana" />
         <SayMyName nome="canacan" />
           <SayMyName nome={nome} />
           <Pessoa 
           nome="philipe"
           idade="28"
           profissao="programador"
           foto="https://via.placeholder.com/150"
           />

    </div>
  )
}

export default App;
