import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, InputGroup } from "react-bootstrap"
import imagem1 from "../../imagem/image 3.png"


const Contato = () => {
    return (

             <div className="container-fluid container-contato">
                <div className="row ">

                    <Col xs={6} className="col-6-esquerda" >
                        <img className="col-image" src={imagem1}></img>
                    </Col>


                    <Col xs= {6} className="contact">
                        <h2 className="fale-comigo"> FALE COMIGO</h2>
                        <p>Entre em contato comigo, será um prazer poder falar com você!</p>

                        
                        <div class="mb-3">
                    
                            <Form>
                                <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
                                    <FormLabel>Nome</FormLabel>
                                    <FormControl type="text" placeholder="Digite seu nome..." />
                                </FormGroup>
                           

                            
                                <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl type="email" placeholder="Digite seu email..." />
                                </FormGroup>
                           

                        
                                <FormGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <FormLabel>Mensagem</FormLabel>
                                    <FormControl as="textarea" rows={8} placeholder="Digite sua mensagem aqui..." />
                                </FormGroup>
                            </Form>
                        </div>

                        <Button className="button-enviar">

                            Enviar

                        </Button>


                    </Col>
                </div>

             </div>
    )
}


export default Contato