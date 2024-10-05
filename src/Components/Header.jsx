import { NavLink } from "react-router-dom";


function Header(){
    return(
        <div className="container-header">
            <h1 className="logo">{'Cadastro de Usuario Protheus'}</h1>
            <nav className="nav-bar">
            {
                localStorage.getItem('@Usuario_Protheus/displayname') === null
                ? 
                <>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                </>
                :
                <>
                <NavLink to="/">Users</NavLink>
                <NavLink to="/logout">Logout</NavLink>
                </>
            }
            </nav>
        </div>

    )
}
export default Header;