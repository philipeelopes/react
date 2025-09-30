function Evento({numero}){

    function meuEvento(){
        console.log(`voce me ativou ${numero}`)
    }


    return(
        <div>
            <p>clique para disparar um evento</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento