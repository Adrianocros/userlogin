function Login(){
    return(
    <div className="container-login">
        <form  className="form-login">
            <h1 className="tituloLogin">{'Acesso ao cadastro'}</h1>
            <label htmlFor="">Usuario</label>
            <input type="text" name="userName"  placeholder="Usuario Protheus"/>
            <label htmlFor="">Senha</label>
            <input type="password" name="password" className="placeSenha" placeholder="Senha Protheus"/>
            <div className="buttons">
                <button className="button-confirmar">Acessar</button>
              

            </div>
        </form>
    </div>
    )
}

export default Login;