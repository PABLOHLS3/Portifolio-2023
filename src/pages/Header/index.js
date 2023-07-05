import { Container } from "react-bootstrap"
import logo from "../../svg/LOGO.svg"


const Header = () => {
    return (
        <>
                <div className="nav-bar ">
                    <div className=" menu-home container-fluid ">
                        
                        <div className="logo">
                            <img src={logo}></img>
                        </div>

                    <ul>
                        <li ><a className="home" href="">Home</a></li>
                        <li><a href="">Sobre mim</a></li>
                        <li><a href="">Qualificações</a></li>
                        <li><a href="">Projetos</a></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                    </div>
                        
                        
                    
                    
                </div>
        </>
    )
}

export default Header