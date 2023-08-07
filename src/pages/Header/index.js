import linkedin from "../../svg/linkedin-svgrepo-com (1) 1.svg"


const Header = () => {
    return(
        <nav>


         <div className="logo"> <h2>LOGO</h2></div>

            <div className="links">

                <ul>
                    <div className="all-home">
                        <li > <a className="nav" href="#">Home</a>  </li>
                        <div className="line"></div>
                    </div>
                        <li> <a href="#">Sobre mim</a>  </li>
                        <li> <a href="#">Qualificações </a>  </li>
                        <li> <a href="#">Educação</a>  </li>
                        <li> <a href="#">Contato</a>  </li>

                </ul>

            </div>

            <div className="icon-linkedin">
                <a href="#"><img src={linkedin}></img></a>
            </div>

        </nav>
    )

}

export default Header