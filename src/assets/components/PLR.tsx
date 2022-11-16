import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Celular from '../imgs/celular.svg'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

export function PLR() {
    return (

        <section className="plr">

            <Container fluid="sm" >
                <Row>
                    <Col sm={6} md={6}>
                        <span className='offert-card'><HorizontalRuleIcon style={{ transform: 'rotate(90deg)', position: 'relative', bottom: '3px' }} />Oferta de pré-lançamento</span>
                        <h1 className="titulo">
                            Segredos que me fazem faturar <span>6 dígitos</span> mensais
                        </h1>
                        <p>
                            O método PDZ é considerado o guia digital mais recomendado do mercado: Alta qualidade, segurança e atendimento.
                        </p>

                        <a href='https://pay.kiwify.com.br/S240YLh'>CONHECER MAIS</a>
                    </Col>

                    <Col>

                        <Image src={Celular}
                            alt="Celular banner"
                            width={200}
                            style={{ marginTop: '25px', marginLeft: '20px' }}
                            height={200}
                        />
                    </Col>
                </Row>
            </Container>

        </section>

    )
}