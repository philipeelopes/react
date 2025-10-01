
import Button from "./eventos/Button"   


function Evento(){

    function meuEvento(){
        console.log('ativando primeiro evento')
    }

    function segundoEvento(){
        console.log('Ativando o segundo Evento')
    }


    return(
        <div>
             
            <p>clique para disparar um evento</p>
            <Button event ={meuEvento} text="primeiro evento"/>
              <Button event ={segundoEvento} text="segundo evento"/>
            <h2>Meu Cadastro</h2>
        </div>
    )
}

export default Evento