import { Apendizagem } from "../assets/components/Apendizagem";
import { Caracteristicas } from "../assets/components/Caracteristicas";
import { Conteudo } from "../assets/components/Conteudos";
import { Depoimentos } from "../assets/components/Depoimentos";
import { Enzo } from "../assets/components/Enzo";
import { FAQ } from "../assets/components/FAQ";
import { Header } from "../assets/components/Header";
import { PLR } from "../assets/components/PLR";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Rodape } from "../assets/components/Rodape";

export default function Home() {
  return (
    <div style={{ width: '100%', height: 'auto', background: '#050507' }}>

      <Header />
      <PLR />
      <Apendizagem />
      <Caracteristicas />
      <Conteudo />
      <Enzo />
      <Depoimentos />
      <FAQ />

      <Rodape />

      <a
        target="_blank"

        href="https://api.whatsapp.com/send?phone=&text=" className="whatsapp-button">
        <WhatsAppIcon
          sx={{
            fontSize: '36px',
            color: '#fff'
          }} 
          />
      </a>
    </div>
  )
}
