import { textAlign } from "@mui/system";
import { Col, Container, Row } from "react-bootstrap";
import TelasFlutuandosImg from '../imgs/CAPASFLUTUANDO.svg';
import Image from 'next/image';
import InfoIcon from '@mui/icons-material/Info';

export function Apendizagem() {
    return (
        <div className="estudo">
            <Container fluid="sm">
                <Row>
                    <Col sm={6}>
                        <Image
                            alt="Telas Flutuando"
                            src={TelasFlutuandosImg}
                            style={{
                                width: '100%',
                                marginTop: '-30px',
                                height: '550px',
                                objectFit: 'cover'
                            }} />
                    </Col>
                    <Col sm={6}>
                        <h1 className="titulo">O que é <span>método PDZ?</span></h1>
                        <p className="p2" style={{ textAlign: 'left', marginLeft: '70px' }}>O método PDZ consiste em um guia digital com os pontos principais para se fazer um PLR do Zero. Afinal, <b>O QUE É PLR?</b></p>

                        <div className="metodos">
                            <Row>
                                <Col sm={2}>
                                    <InfoIcon
                                        style={{
                                            fontSize: '54px',
                                            width: '100%',
                                            margin: '40px auto'
                                        }}
                                        className="reduxIcon"
                                    />

                                    <p className="reduxParagraph reduxParagraph2" style={{ textAlign: 'left', marginLeft: '0px', fontSize: '16px', marginTop: '23px' }}>PLR Siginifica Private Label Rights, que em português podemos definir como: DIREITOS AUTORIAIS. Qualquer produto registrado pode ter o seu PLR (o seu direito de revenda). Logo, um produto PLR é aquele que temos o direito de revender.</p>

                                </Col>
                                <Col sm={9} style={{ padding: '0' }}>
                                    <p className="reduxParagraph3" style={{ textAlign: 'left', marginLeft: '0px', fontSize: '16px', marginTop: '23px' }}>PLR Siginifica Private Label Rights, que em português podemos definir como: DIREITOS AUTORIAIS. Qualquer produto registrado pode ter o seu PLR (o seu direito de revenda). Logo, um produto PLR é aquele que temos o direito de revender.</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="metodos-2">
                            <Row>
                                <Col sm={9}>
                                    <p className="reduxParagraph3" style={{ textAlign: 'left', marginLeft: '25px', fontSize: '16px', marginTop: '23px' }}>O método PDZ consiste em um guia digital com os principais “secredos” que todo o time da Encompass e principalmente eu, Enzo Bournet, realiza para termos múltiplos dígitos de faturamento em um tempo curto.</p>
                                </Col>
                                <Col sm={2}>
                                    <InfoIcon
                                        style={{
                                            fontSize: '54px',
                                            width: '100%',
                                            margin: '40px 50px'
                                        }}
                                        className="reduxIcon"
                                    />
                                    <p className="reduxParagraph reduxParagraph2" style={{ textAlign: 'left', marginLeft: '25px', fontSize: '16px', marginTop: '23px' }}>O método PDZ consiste em um guia digital com os principais “secredos” que todo o time da Encompass e principalmente eu, Enzo Bournet, realiza para termos múltiplos dígitos de faturamento em um tempo curto.</p>

                                </Col>
                            </Row>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}