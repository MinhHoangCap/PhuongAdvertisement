import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMessage} from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import "../css/Footer.css"
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
            <Row>
                <Col>Contact Us
                  <div className="contact-us__content">Contact us through email, phone or social media. We value your feedback and look forward to hearing from you!</div>
                </Col>
                <Col>
                  <p>
                  <FontAwesomeIcon icon={faPhone} beat/>
                    Phone: 0123456789
                  </p>
                  <p>
                  <FontAwesomeIcon icon={faEnvelope} beat/>
                  Email: abc@gmail.com

                  </p>
                  <p>
                  {/* <FontAwesomeIcon icon={faRegular, fa-message} flip="horizontal" /> */}
                  <FontAwesomeIcon icon={faMessage} beat flip="horizontal" />

                  Zalo: 0123456789
                  </p>
                </Col>
                

            </Row>
        </Container>
      </footer>
    )
  }
}
