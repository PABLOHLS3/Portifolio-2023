import { Col, Row } from "react-bootstrap"
import linkedin from "../../svg/Orion_linkedin 1.svg"
import whatsapp from "../../svg/Orion_whatsapp.svg"
import email from "../../svg/Orion_outgoing-email-server.svg"



const Footer = () => {
    return (
        <>

                <div className="container">
                    <Row>
        
                <Col xs ={4} className=""></Col>
                <Col xs ={4} className="">
                    <div className="icons">

                     <a href="#"><img  className = "linkedin" src={linkedin}></img></a>
                     <a href="#"><img className = "whatsapp" src={whatsapp}></img></a>
                     <a href="#"><img className = "email" src={email}></img></a>

                     <p className="title "> São Paulo. 2023</p>
                    </div>
                </Col>
                <Col xs ={4} className=""></Col>
                </Row>
                
                </div>

        </>
    )
}

export default Footer