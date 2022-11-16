import Image from 'next/image';
import { Row, Container, Col } from 'react-bootstrap';
import styles from '../../styles/Enzo.module.css'
import enzoImage from '../imgs/ENZO.png'

export function Enzo() {

    return (
        <div className={styles.enzo}>
            <Container>
                <Row>
                    <Col sm={6}>
                        <div style={{position: 'sticky', top: '0'}}>
                            <h1 className='titulo' style={{ textAlign: 'left', fontSize: '52px', margin: '0px auto 10px', width: '100%' }}>
                                Quem é Enzo <span>Bournet?</span>
                            </h1>
                            <br/>
                            <p style={{ textAlign: 'left', width: '80%', color: '#999' }}>
                                Meu nome é Enzo Bournet e sou internet marketer e Nômade Digital desde 2017. Descobri estratégias que me fizeram ganhar muito dinheiro em 2019, aos 17 anos, e de lá pra cá tenho aumentado cada vez mais meu patrimônio, ano a ano.
                            </p>

                            <p style={{ textAlign: 'left', width: '80%', color: '#999' }}>
                                Clique abaixo e garanta o seu acesso vitalício a um dos melhores Conteúdos que te faz faturar milhões apenas com a internet, em qualquer lugar do Brasil.
                            </p>

                            <a className={styles.garantirAcesso}>
                                GARANTIR MEU ACESSO
                            </a>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <Image
                            alt="Enzo"
                            src={enzoImage}
                            quality={100}
                            className={styles.image}
                            style={{
                                marginLeft: '80px',
                                width: '465px',
                                height: '815px',
                                objectFit: 'cover'
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );

}