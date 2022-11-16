import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import phoneOne from '../imgs/CELULAR1.gif'
import phoneTwo from '../imgs/CELULAR2.gif'
import OutboundIcon from '@mui/icons-material/Outbound';
import BookmarksRoundedIcon from '@mui/icons-material/BookmarksRounded';
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import EventRepeatRoundedIcon from '@mui/icons-material/EventRepeatRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import styles from '../../styles/Caracteristicas.module.css'

export function Caracteristicas() {

    return (

        <div className="plataforma">
            <Container fluid="sm">
                <Row>
                    <Col sm={12}>

                        <h1 className={'titulo'} style={{ margin: '50px auto 10px', width: '90%', textAlign: 'center' }}>
                            Ao que você vai <span>ter acesso.</span>
                        </h1>

                        <p style={{ textAlign: 'center', width: '50%' }}>
                            Além de todo conteúdo salvo que você poderá assistir imediatamente, também vai ter acesso a uma área de membro única, direito a promover produtos premium, arquivos exclusivos e muito mais...
                        </p>

                        <a href='https://pay.kiwify.com.br/S240YLh'>
                            QUERO MEU ACESSO
                        </a>
                    </Col>
                    <Col
                        sm={12}
                        className={styles.caracteristicas}
                        style={{ height: '60rem', backgroundImage: `url(https://i.imgur.com/0BgTT8Q.png)`, backgroundPosition: '350px', backgroundRepeat: 'no-repeat' }}
                    >
                        <div
                            className={styles.box}
                            style={{
                                margin: '250px 130px',
                                position: 'absolute',
                                zIndex: '5'
                            }}
                        >
                            <Row>
                                <Col sm={9}>
                                    <p
                                        className='reduxParagraph3'
                                        style={{
                                            textAlign: 'left',
                                            fontSize: '16px',
                                            lineHeight: '1.3',
                                            width: '32ch',
                                            marginTop: '11%',
                                        }}>
                                        Área de membros - Além do livro digital, você será liberado a nossa área de membros premium
                                    </p>
                                </Col>
                                <Col sm={3}>
                                    <BookmarksRoundedIcon
                                        style={{
                                            color: '#8D37FC',
                                            fontSize: '54px',
                                            width: '100%',
                                            margin: '34px auto'
                                        }}
                                        className="reduxIcon"
                                    />

                                    <p
                                        className='reduxParagraph reduxParagraph2'
                                        style={{
                                            textAlign: 'left',
                                            fontSize: '16px',
                                            lineHeight: '1.3',
                                            width: '32ch',
                                            marginTop: '11%',
                                        }}>
                                        Área de membros - Além do livro digital, você será liberado a nossa área de membros premium
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <div
                            className={styles.box}
                            style={{
                                margin: '480px 50px',
                                position: 'absolute',
                                zIndex: '5'
                            }}
                        >
                            <Row>
                                <Col sm={9}>
                                    <p
                                        className='reduxParagraph3'
                                        style={{
                                            textAlign: 'left',
                                            fontSize: '16px',
                                            lineHeight: '1.3',
                                            width: '32ch',
                                            marginTop: '11%',
                                        }}>
                                        Acesso vitalício - Mesmo se o preço subir, você terá o acesso para vitalício em nossa plataforma
                                    </p>
                                </Col>
                                <Col sm={3}>

                                    <UpdateRoundedIcon
                                        style={{
                                            color: '#8D37FC',
                                            fontSize: '54px',
                                            width: '100%',
                                            margin: '34px auto'
                                        }}
                                        className="reduxIcon"
                                    />

                                    <p
                                        className='reduxParagraph reduxParagraph2'
                                        style={{
                                            textAlign: 'left',
                                            fontSize: '16px',
                                            lineHeight: '1.3',
                                            width: '32ch',
                                            marginTop: '11%',
                                        }}>
                                        Acesso vitalício - Mesmo se o preço subir, você terá o acesso para vitalício em nossa plataforma
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <div
                            className={styles.box}
                            style={{
                                margin: '710px 200px',
                                position: 'absolute',
                                zIndex: '5'
                            }}
                        >
                            <Row>
                                <Col sm={9}>
                                    <p
                                        className='reduxParagraph3'
                                        style={{
                                            textAlign: 'left',
                                            fontSize: '16px',
                                            lineHeight: '1.3',
                                            width: '32ch',
                                            marginTop: '15%',
                                        }}>
                                        Suporte - Suporte e auxílio da nossa equipe 24 horas
                                    </p>
                                </Col>
                                <Col sm={3}>
                                    <HelpRoundedIcon
                                        style={{
                                            color: '#8D37FC',
                                            fontSize: '54px',
                                            width: '100%',
                                            margin: '34px auto'
                                        }}
                                        className="reduxIcon"
                                    />

                                    <p
                                        className='reduxParagraph reduxParagraph2'
                                        style={{
                                            textAlign: 'left',
                                            fontSize: '16px',
                                            lineHeight: '1.3',
                                            width: '32ch',
                                            marginTop: '15%',
                                        }}>
                                        Suporte - Suporte e auxílio da nossa equipe 24 horas
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <div
                            className={styles.box2}
                            style={{
                                margin: '370px 54%',
                                position: 'absolute',
                                zIndex: '5'
                            }}
                        >
                            <Row>
                                <Col sm={3}>
                                    <EventRepeatRoundedIcon
                                        style={{
                                            color: '#8D37FC',
                                            fontSize: '54px',
                                            width: '100%',
                                            margin: '34px auto'
                                        }}
                                        className='reduxIcon'
                                    />

                                    <p
                                        className='reduxParagraph reduxParagraph2'
                                        style={{
                                            textAlign: 'left',
                                            fontSize: '16px',
                                            lineHeight: '1.3',
                                            width: '32ch',
                                            marginTop: '15%',
                                        }}>
                                        Conteúdo mensal - Pague apenas uma vez pra ter conteúdos mensais infinitos
                                    </p>
                                </Col>
                                <Col sm={9}>
                                    <p
                                        className='reduxParagraph3'
                                        style={{
                                            textAlign: 'left',
                                            fontSize: '16px',
                                            lineHeight: '1.3',
                                            width: '32ch',
                                            marginTop: '15%',
                                        }}>
                                        Conteúdo mensal - Pague apenas uma vez pra ter conteúdos mensais infinitos
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <div
                            className={styles.box2}
                            style={{
                                margin: '600px 58%',
                                position: 'absolute',
                                zIndex: '5'
                            }}
                        >
                            <Row>
                                <Col sm={3}>
                                    <LanguageRoundedIcon
                                        style={{
                                            color: '#8D37FC',
                                            fontSize: '54px',
                                            width: '100%',
                                            margin: '34px auto'
                                        }}
                                        className='reduxIcon'
                                    />

                                    <p
                                        className='reduxParagraph reduxParagraph2'
                                        style={{
                                            textAlign: 'left',
                                            fontSize: '16px',
                                            lineHeight: '1.3',
                                            width: '32ch',
                                            marginTop: '15%',
                                        }}>
                                        Rede de networking - Acesso ao nosso grupo vip de alunos
                                    </p>
                                </Col>
                                <Col sm={9}>
                                    <p
                                        className='reduxParagraph3'
                                        style={{
                                            textAlign: 'left',
                                            fontSize: '16px',
                                            lineHeight: '1.3',
                                            width: '32ch',
                                            marginTop: '15%',
                                        }}>
                                        Rede de networking - Acesso ao nosso grupo vip de alunos
                                    </p>
                                </Col>
                            </Row>
                        </div>

                        <Image
                            src={phoneTwo}
                            style={{
                                width: '560px',
                                height: '560px',
                                objectFit: 'cover',
                                marginLeft: '15%',
                                marginTop: '30px',
                                position: 'absolute'
                            }}
                            className={styles.imagem1}
                            alt="Celular 2" />
                        <Image
                            src={phoneOne}
                            style={{
                                width: '560px',
                                height: '560px',
                                objectFit: 'cover',
                                marginLeft: '33%',
                                marginTop: '315px',
                                position: 'absolute'
                            }}
                            className={styles.imagem1}
                            alt="phone1" />
                    </Col>
                </Row>
            </Container>
        </div>

    )
}