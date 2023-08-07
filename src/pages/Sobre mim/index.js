import { Button, Col } from "react-bootstrap"
import {Image} from "react-bootstrap"

import image from "../../imagem/Group 6.png"

const Sobremim = () => {
        return (
            <>
                <section className="container-fluid section-sobre border">

                <div className="row row-sbre">

                    <Col className="sobre" xs={1}> <h1>SOBRE</h1></Col>
                    <Col className="mim" xs={1}> <h1>MIM</h1></Col>
                    <Col className= "my-image" xs={5}> 
                          
                            <div className="block-image">
                                <Image className="minha-imagem" src={image}></Image>
                            </div>
                    
                    </Col>
                    <Col className="informações" xs={5}>
                        <h5>QUEM SOU EU </h5>
                        <h2 className="meu-nome">PABLO HENRIQUE</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy tex
                            t ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                        

                        <div className="dados">
                            <h6>Nome: Pablo Henrique</h6>
                            <h6>Telefone: (11) 95717 0874 </h6>
                            <h6>Email: pablo.shenrrique@gmail.com</h6>
                            <h6>Cidade/Estado: São Paulo/SP</h6>
                            <div className="social-media">
                                <h6>Social media: </h6>
                            
                            </div>

                            


                        </div>
                        <Button>Baixar CV</Button>
                    </Col>
                </div>



                </section>
            
            </>
        )

}

export default Sobremim