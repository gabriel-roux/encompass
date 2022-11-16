import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../imgs/logo.svg'


export function Header() {


    return (
        <header>
            <Container fluid="sm">
                <Row>
                    <Col sm={6}>

                        <Image src={Logo}
                            alt="Logo encompass"
                            style={{ marginLeft: '95px', marginTop: '-25px' }}
                            width={160}
                            height={140}
                            quality={100} />

                    </Col>
                    <Col>

                        <ul className="reduxParagraph3">
                            <li> <label style={{ fontWeight: 500 }}>PLR do ZERO</label></li>
                            <li> <label style={{ fontWeight: 300 }}>Como funciona</label></li>
                            <li> <label style={{ fontWeight: 300 }}>Ensino</label></li>
                            <li> <label style={{ fontWeight: 300 }}>Tire suas duvidas</label></li>
                            <li> <label style={{ fontWeight: 300 }}>Depoimentos</label></li>
                        </ul>

                    </Col>
                </Row>
            </Container>
        </header>

    )

}