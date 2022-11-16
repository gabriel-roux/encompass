import { Col, Container, Row } from 'react-bootstrap';
import VerifiedIcon from '@mui/icons-material/Verified';
import styles from '../../styles/Conteudo.module.css';
import Image from 'next/image';
import monitor from '../imgs/MONITOR.svg'

export function Conteudo() {
    return (
        <div className={styles.conteudo}>
            <Container>
                <Row>
                    <Col sm={7}>
                        <h1 className={'titulo'} style={{ textAlign: 'left', fontSize: '52px', margin: '50px auto 10px', width: '100%' }}>
                            Veja todos nossos Conteúdos e <span>muito mais!</span>
                        </h1>

                        <p style={{ textAlign: 'left', width: '50%', color: '#999' }}>
                            Algumas das coisas que nós apresentamos e dentro de toda nossa plataforma:
                        </p>
                        

                        <div>
                            <ul className={styles.ulContent}>
                                <li className={styles.li}>
                                    <div className={styles.liContent}>
                                        <ul style={{ listStyle: 'none', padding: '15px 15px' }}>
                                            <li style={{ color: '#fff', marginBottom: '5px' }}>
                                                <VerifiedIcon style={{ color: '#1fd655' }} />
                                                <span style={{ margin: '10px', position: 'relative', top: '3px' }}>Marketing Digital</span>
                                            </li>
                                            <li style={{ color: '#fff', marginBottom: '5px' }}>
                                                <VerifiedIcon style={{ color: '#1fd655' }} />
                                                <span style={{ margin: '10px', position: 'relative', top: '3px' }}>O'que é PLR</span>
                                            </li>
                                            <li style={{ color: '#fff', marginBottom: '5px' }}>
                                                <VerifiedIcon style={{ color: '#1fd655' }} />
                                                <span style={{ margin: '10px', position: 'relative', top: '3px' }}>Os <b>sete</b> pilares</span>
                                            </li>
                                            <li style={{ color: '#fff', marginBottom: '5px' }}>
                                                <VerifiedIcon style={{ color: '#1fd655' }} />
                                                <span style={{ margin: '10px', position: 'relative', top: '3px' }}>Estratégia & funíl</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.activedliContent} />

                                </li>
                                <li className={styles.li}>
                                    <div className={styles.liContent}>
                                        <ul style={{ listStyle: 'none', padding: '15px 15px' }}>
                                            <li style={{ color: '#fff', marginBottom: '5px' }}>
                                                <VerifiedIcon style={{ color: '#1fd655' }} />
                                                <span style={{ margin: '10px', position: 'relative', top: '3px' }}>Copy Writring</span>
                                            </li>
                                            <li style={{ color: '#fff', marginBottom: '5px' }}>
                                                <VerifiedIcon style={{ color: '#1fd655' }} />
                                                <span style={{ margin: '10px', position: 'relative', top: '3px' }}>Tráfego</span>
                                            </li>
                                            <li style={{ color: '#fff', marginBottom: '5px' }}>
                                                <VerifiedIcon style={{ color: '#1fd655' }} />
                                                <span style={{ margin: '10px', position: 'relative', top: '3px' }}>Pago & Orgânico</span>
                                            </li>
                                            <li style={{ color: '#fff', marginBottom: '5px' }}>
                                                <VerifiedIcon style={{ color: '#1fd655' }} />
                                                <span style={{ margin: '10px', position: 'relative', top: '3px' }}>Como criar caixa</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.activedliContent} />

                                </li>
                                <li className={styles.li}>
                                    <div className={styles.liContent}>
                                        <ul style={{ listStyle: 'none', padding: '15px 15px' }}>
                                            <li style={{ color: '#fff', marginBottom: '5px' }}>
                                                <VerifiedIcon style={{ color: '#1fd655' }} />
                                                <span style={{ margin: '10px', position: 'relative', top: '3px' }}>Ferramentas <b>VIP</b></span>
                                            </li>
                                            <li style={{ color: '#fff', marginBottom: '5px' }}>
                                                <VerifiedIcon style={{ color: '#1fd655' }} />
                                                <span style={{ margin: '10px', position: 'relative', top: '3px' }}>Contingência</span>
                                            </li>
                                            <li style={{ color: '#fff', marginBottom: '5px' }}>
                                                <VerifiedIcon style={{ color: '#1fd655' }} />
                                                <span style={{ margin: '10px', position: 'relative', top: '3px' }}>Campanhas</span>
                                            </li>
                                            <li style={{ color: '#fff', marginBottom: '5px' }}>
                                                <VerifiedIcon style={{ color: '#1fd655' }} />
                                                <span style={{ margin: '10px', position: 'relative', top: '3px' }}>& Muito mais</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.activedliContent} />

                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={5}>
                        <Image
                            src={monitor}
                            alt="Monitor com area de membro"
                            style={{
                                width: '100%',
                                position: 'relative',
                                bottom: '40px'
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}