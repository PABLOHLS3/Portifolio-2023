import { Button, Col } from "react-bootstrap"
import bg from "../../imagem/christopher-gower-m_HRfLhgABo-unsplash 1.png"


const Home = () => {
    return (
        <>

            <section className="container-fluid home "> 

            <div className="bg"><img src={bg}></img></div>
            <div className=" row row=home "> 

            <Col xs={12}>
                <h1 className="h0">Olá, sou o <span className="nome">Pablo<span className="ponto">.</span></span>   </h1>
                <h2>DESENVOLVEDOR FULLSTACK</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>

                <div className="buttons-home">
                    <Button>Contate-me</Button>
                    <Button className="vazio">Conhecer-me mais</Button>

                </div>
                



            </Col>
            
            
            </div>


            </section>
        
        
        </>
    )
}

export default Home