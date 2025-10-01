import { useState} from 'react'



function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Casdatrou o usuario")
        console.log(`usuario ${name} foi cadastrado com a senha: ${password}`)
    }


    const [name, setName] = useState()
    const [password, setPassword] = useState()


    return(<div>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text"  id="name" name="name"   placeholder="Digite o seu nome" onChange={(e) => setName(e.target.value)}/>
            </div>
             <div>
                  <label htmlFor="password">Senha: </label>
                <input type="password"  id="password" name="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                  
                <input type="submit" placeholder="cadastrar"/>
            </div>
        </form>
    </div>)
}

export default Form