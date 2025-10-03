function Saudacao({nome}) {

    function boasVindas(algumNome) {
        return `Seja bem vindo(a) ${algumNome}, tudo bem?`
    }

    return
        <>{nome &&<p>{boasVindas(nome)}</p>}</>
}

export default Saudacao;