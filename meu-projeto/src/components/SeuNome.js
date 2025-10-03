function SeuNome({setNome}) {


    return(
        <div>
            <p>DIGITE O SEU NOME</p>
            <input type="text" 
            placeholder="Qual e o seu nome:?" 
            onChange={(e) => setNome(e.target.value)}/>
        </div>
    )
}



export default SeuNome;