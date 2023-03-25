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
                <Col>
                  <div className="contact__heading">
                    Contact Us
                    </div>
                  <div className="contact__content">Contact us through email, phone or social media. We value your feedback and look forward to hearing from you!</div>
                </Col>
                <Col>
                  <p className='contact__infomation'>
                  <FontAwesomeIcon className='contact__icon'  icon={faPhone} beat/>
                    Phone: 0123456789
                  </p>
                  <p className='contact__infomation'>
                  <FontAwesomeIcon className='contact__icon' icon={faEnvelope} beat/>
                  Email: abc@gmail.com

                  </p>
                  <p className='contact__infomation'>
                  {/* <FontAwesomeIcon className='contact__icon' icon={faRegular, fa-message} flip="horizontal" /> */}
                  <FontAwesomeIcon className='contact__icon' icon={faMessage} beat />

                  Zalo: 0123456789
                  </p>
                </Col>
                

            </Row>
        </Container>
      </footer>
    )
  }
}
