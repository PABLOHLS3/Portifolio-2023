import { Button, Col } from "react-bootstrap"
import imagehero from "../../imagem/home.jpg"



const Hero = () => {
   return (
    <>
            <div className="coontainer-fluid hero ">
                
            <div className="row hero-row">

                
                <Col xs={12} className=" flex">
                    <div className="conteudo">
                        
               
                    <h1>Olá, meu nome é Pablo!</h1>
                    <h3>Desenvolvedor Front-end</h3>
                    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                        type and scrambled it to make a type specimen book. It has survived not only five 
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>

                        <div className="buttons">
                        <Button className="curriculo">Baixar CV</Button>
                        <Button className="vazio">Quero te conhecer mais</Button>
                        </div>

                        </div>

                        <div className="image-hero"></div>
                </Col>

                

                </div>
                
                
            </div>   
                
           
    </>
   ) 
}

export default Hero