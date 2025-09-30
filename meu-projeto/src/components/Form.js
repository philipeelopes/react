function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Casdatrou o usuario")
    }
    return(<div>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <input type="texto" placeholder="Digite o seu nome"/>
            </div>
            <div>
                <input type="submit" placeholder="cadastrar"/>
            </div>
        </form>
    </div>)
}

export default Form