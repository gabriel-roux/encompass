
import styles from '../../styles/FAQ.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function FAQ() {
    return (
        <div className={styles.faq}>
            <h1 className='titulo' style={{ textAlign: 'center', width: '50%', margin: '0px auto 40px' }}>Precisa de <span>Ajuda?</span></h1>

            <Accordion
                sx={{
                    width: '50%',
                }}>
                <AccordionSummary
                    sx={{
                        background: 'linear-gradient(90deg, #2b113d, #050507)',
                        borderRadius: '4px'
                    }}
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography
                        sx={{
                            fontWeight: '700',
                            color: '#fff'
                        }}>
                        O PLR Do Zero é recomendado para pessoas avançadas?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        background: 'transparent'
                    }}
                >
                    <Typography
                        sx={{
                            width: '100%',
                            color: '#999'
                        }}>
                        O conteúdo do PLR Do Zero é mais para inciantes ou quem não obteve resultados com o digital. Porém, oferecemos uma rede de networking especialmente para todos os nossos clientes
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                sx={{
                    width: '50%',
                    marginTop: '10px'
                }}>
                <AccordionSummary
                    sx={{
                        background: 'linear-gradient(90deg, #2b113d, #050507)',
                        borderRadius: '4px'
                    }}
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography
                        sx={{
                            fontWeight: '700',
                            color: '#fff'
                        }}>
                        Sobre o que é falado dentro do “PLR Do Zero”?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        background: 'transparent'
                    }}
                >
                    <Typography
                        sx={{
                            width: '100%',
                            color: '#999'
                        }}>
                        100% sobre PLR e Marketing Digital, do absoluto 0 até o necessário para destravar seus primeiros 5 dígitos.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                sx={{
                    width: '50%',
                    marginTop: '10px'
                }}>
                <AccordionSummary
                    sx={{
                        background: 'linear-gradient(90deg, #2b113d, #050507)',
                        borderRadius: '4px'
                    }}
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography
                        sx={{
                            fontWeight: '700',
                            color: '#fff'
                        }}>
                        Por quanto tempo terei acesso?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        background: 'transparent'
                    }}
                >
                    <Typography
                        sx={{
                            width: '100%',
                            color: '#999'
                        }}>
                        O periodo é vitalício, ou seja: pra sempre. Isso pode mudar, por isso aproveitem
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                sx={{
                    width: '50%',
                    marginTop: '10px'
                }}>
                <AccordionSummary
                    sx={{
                        background: 'linear-gradient(90deg, #2b113d, #050507)',
                        borderRadius: '4px'
                    }}
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography
                        sx={{
                            fontWeight: '700',
                            color: '#fff'
                        }}>
                        Preciso pagar mensalmente?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        background: 'transparent'
                    }}
                >
                    <Typography
                        sx={{
                            width: '100%',
                            color: '#999'
                        }}>
                        Não. apenas pagar 1 vez que terá o acesso vitalicio
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                sx={{
                    width: '50%',
                    marginTop: '10px'
                }}>
                <AccordionSummary
                    sx={{
                        background: 'linear-gradient(90deg, #2b113d, #050507)',
                        borderRadius: '4px'
                    }}
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography
                        sx={{
                            fontWeight: '700',
                            color: '#fff'
                        }}>
                        Por que devo adquirir o método “PLR Do Zero”?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        background: 'transparent'
                    }}
                >
                    <Typography
                        sx={{
                            width: '100%',
                            color: '#999'
                        }}>
                        O Método PDZ. diferentemente de muitos conteúdos que gratúitos por ai (que falam que entrega conteudos de cursos pagos) é extramente sincero, direto e funcional. Não queremos te enrolar para que você vire apenas mais um no mercado. Tudo que é falado dentro dele é utilizado e comprovado por todos os funcionários, CEO e até Founders da Encompass
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}