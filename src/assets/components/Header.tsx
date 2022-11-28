import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Header() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 2000,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    return (
        <>
            <header style={{ height: '100vh', backgroundImage: `url(https://i.imgur.com/9JxM6Wo.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='headerLine'>
                    <h1>Conheça o método pdz que te faz faturar pelo menos R$1.000,00 por dia com plr apenas usando a <br /> internet sem precisar aparecer e conquiste sua liberdade financeira nos próximos 3 meses</h1>
                </div>
                <Container fluid="sm">
                    <Row>
                        <Col sm={12}>
                            <h1 className="titulo2">
                                VOU TE <span>REVELAR</span> TUDO QUE EU SEI E <span>TE ENSINAR PLR DO ZERO</span> PARA VOCÊ
                                SAIR DO <span>ZERO ABSOLUTO</span> ATÉ O <span>PRIMEIRO MILHÃO</span>
                            </h1>
                            <div style={{ width: '100%', margin: '3rem auto' }}>
                                <iframe style={{ margin: '3rem auto', display: 'block' }} width="780" height="460" src="https://www.youtube.com/embed/8D3giJhahmM" title="MONARK IMPRESSIONA CARIANI COM PERGUNTA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>

                            <a>SIM! QUERO FAZER PARTE DA PRIMEIRA TURMA AGORA!</a>

                        </Col>
                    </Row>
                </Container>
            </header>

            <div className='depoimentos'>
                <h1 className="titulo2">
                    Esses são as aprovações que <span>nós recebemos.</span>
                    <br />
                    <a>DA PRÓXIMA VEZ O SEU PODE ESTAR AQUI!</a>



                    <div style={{ marginTop: '5rem', overflow: 'hidden' }}>
                        <video width="540" height="100%" controls>
                            <source src="https://i.imgur.com/33njvw2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <Slider style={{ marginTop: '4rem', marginLeft: '-5rem' }} {...settings}>
                            <div>
                                <img
                                    alt='depoimento 1'
                                    src='https://i.imgur.com/32dJP98.png'
                                    width={380}
                                    height={550}
                                />
                            </div>
                            <div>
                                <img
                                    alt='depoimento 2'
                                    src='https://i.imgur.com/28WN8uu.png'
                                    width={380}
                                    height={550}
                                />
                            </div>
                            <div>
                                <img
                                    alt='depoimento 3'
                                    src='https://i.imgur.com/EYRv5wL.png'
                                    width={380}
                                    height={550}
                                />
                            </div>
                            <div>
                                <img
                                    alt='depoimento 4'
                                    src='https://i.imgur.com/9bAsOra.png'
                                    width={380}
                                    height={550}
                                />
                            </div>
                            <div>
                                <img
                                    alt='depoimento 5'
                                    src='https://i.imgur.com/z5NIYfh.png'
                                    width={380}
                                    height={550}
                                />
                            </div>
                            <div>
                                <img
                                    alt='depoimento 6'
                                    src='https://i.imgur.com/aDnsGpE.png'
                                    width={380}
                                    height={550}
                                />
                            </div>
                            <div>
                                <img
                                    alt='depoimento 7'
                                    src='https://i.imgur.com/o9SmQR5.png'
                                    width={380}
                                    height={550}
                                />
                            </div>
                        </Slider>
                    </div>
                </h1>
            </div>

        </>
    )

}