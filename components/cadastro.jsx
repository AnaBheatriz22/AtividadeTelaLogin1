import { useState } from "react"

function Form() {

    function cadastrarUsuario(event) {
        event.preventDefault()
        console.log(`O Usuário ${name} foi cadastrado com a senha: ${password}`)
        console.log("Cadastro realizado com sucesso!!")
    }

    const [name, setName] = useState ()
    const [password, setPassword] = useState ()

    return(
        <>
            <h2>Meu Cadastro:</h2>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome" 
                    onChange={(event) => setName(event.target.value)}/>
                    
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" 
                    onChange={(event) => setPassword(event.target.value)}/>

                </div>
                <div>
                    <input type="submit" placeholder="Cadastrar"/>
                </div>
            </form>
        </>
    )
}

export default Form