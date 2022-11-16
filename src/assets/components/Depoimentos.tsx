import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import styles from '../../styles/Depoimentos.module.css'
import depoimento1 from '../imgs/depoimento1.jpeg'
import depoimento2 from '../imgs/depoimento2.jpg'
import depoimento3 from '../imgs/depoimento3.jpg'
import depoimento4 from '../imgs/depoimento4.jpg'

export function Depoimentos() {

    return (
        <div className={styles.depoimentos}>
            <h1 className='titulo' style={{ textAlign: 'center', width: '15ch' }}>O que falam sobre <span>nossos cursos?</span></h1>

            <div className={styles.depoimento}>
                <Row>
                    <Col sm={3} className="reduxParagraph3">
                        <Image
                            src={depoimento1}
                            alt="Depoimento 1"
                            quality={100}
                            style={{
                                width: '115px',
                                height: '115px',
                                objectFit: 'cover',
                                borderRadius: '100%',
                                marginTop: '30px'
                            }}
                        />
                    </Col>
                    <Col sm={9}>
                        <p
                            style={{
                                textAlign: 'left',
                                marginLeft: '0px',
                                fontSize: '16px',
                                color: '#991fec',
                                width: '90%',
                                fontWeight: '700',
                                marginTop: '15px'
                            }}
                        >
                            @gabrieelroux
                        </p>
                        <p
                            style={{
                                textAlign: 'left',
                                marginLeft: '0px',
                                fontSize: '16px',
                                color: '#999',
                                width: '90%',
                                marginTop: '-10px'
                            }}
                        >
                            Foi um dos melhores custo beneficio da minha vida kkkkk. Além de fazer parte das primeiras 200 pessoas que receberá treinamentos exclusivos, eu consegui fazer meus primeiros 4 dígitos e to super ansioso pra avançar ainda mais!
                        </p>
                    </Col>
                </Row>
            </div>
            <div className={styles.depoimento2}>
                <Row>
                    <Col sm={9}>
                        <p
                            style={{
                                textAlign: 'left',
                                fontSize: '16px',
                                color: '#991fec',
                                width: '90%',
                                marginLeft: '35px',
                                fontWeight: '700',
                                marginTop: '15px'
                            }}
                        >
                            @larisahikary
                        </p>
                        <p
                            style={{
                                textAlign: 'left',
                                fontSize: '16px',
                                color: '#999',
                                width: '90%',
                                marginLeft: '35px',
                                marginTop: '-10px'
                            }}
                        >
                            Antes de conhecer esse método, eu não fazia ideia do que era PLR. Eu ainda trabalho como afiliada e consegui destravar e ter diversos insights que impulsionaram minhas vendas no mercado. Comecei a rodar plr com o suporte de toda equipe do Enzo e isso esta sendo incrivel!
                        </p>
                    </Col>
                    <Col sm={3} className="reduxParagraph3">
                        <Image
                            src={depoimento2}
                            alt="Depoimento 2"
                            quality={100}
                            style={{
                                width: '115px',
                                height: '115px',
                                objectFit: 'cover',
                                borderRadius: '100%',
                                marginTop: '45px'
                            }}
                        />
                    </Col>
                </Row>
            </div>
            <div
                className={styles.depoimento}
                style={{ marginTop: '40px' }}>
                <Row>
                    <Col sm={3} className="reduxParagraph3">
                        <Image
                            src={depoimento3}
                            alt="Depoimento 3"
                            quality={100}
                            style={{
                                width: '115px',
                                height: '115px',
                                objectFit: 'cover',
                                borderRadius: '100%',
                                marginTop: '30px'
                            }}
                        />
                    </Col>
                    <Col sm={9}>
                        <p
                            style={{
                                textAlign: 'left',
                                marginLeft: '0px',
                                fontSize: '16px',
                                color: '#991fec',
                                width: '90%',
                                fontWeight: '700',
                                marginTop: '15px'
                            }}
                        >
                            @marcelotheooficial
                        </p>
                        <p
                            style={{
                                textAlign: 'left',
                                marginLeft: '0px',
                                fontSize: '16px',
                                color: '#999',
                                width: '90%',
                                marginTop: '-10px'
                            }}
                        >
                            Entrei no PDZ do Enzo Bournet só por causa do grupo de network que eles oferecem. Vale muito a pena entrar nestes grupos para conehcerem pessoas que estão no mesmo barco que você! Super recomendo.
                        </p>
                    </Col>
                </Row>
            </div>
            <div
                className={styles.depoimento2}
                style={{ height: '140px' }}
            >
                <Row>
                    <Col sm={9}>
                    <p
                            style={{
                                textAlign: 'left',
                                marginLeft: '35px',
                                fontSize: '16px',
                                color: '#991fec',
                                width: '90%',
                                fontWeight: '700',
                                marginTop: '20px'
                            }}
                        >
                            @botconlow
                        </p>
                        <p
                            style={{
                                textAlign: 'left',
                                marginLeft: '35px',
                                fontSize: '16px',
                                color: '#999',
                                width: '90%',
                                marginTop: '-10px'
                            }}
                        >
                            Incrivel mesmo. Graças a esse ebook eu consegui fazer minhas primeiras vendas como afiliado. Ainda não comecei com PLR, mas penso em migrar jaja.                        </p>
                    </Col>
                    <Col sm={3} className="reduxParagraph3">
                        <Image
                            src={depoimento4}
                            alt="Depoimento 4"
                            quality={100}
                            style={{
                                width: '115px',
                                height: '115px',
                                objectFit: 'cover',
                                borderRadius: '100%',
                                marginTop: '15px'
                            }}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )

}