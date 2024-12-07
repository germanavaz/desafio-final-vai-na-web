import Facebook from '../../assets/facebook.png';
import Twitter from '../../assets/twitter.png';
import Youtube from '../../assets/youtube.png';
import Linkedin from '../../assets/linkedin.png';
import Instagram from '../../assets/instagram.png';
import S from './footer.module.scss';

export default function Footer() {
    return (
      <footer>
        <section className={S.rodape}>
          <p>4002-8922</p>
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="Ícone Facebook" /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="Ícone Twitter" /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Youtube} alt="Ícone Youtube" /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="Ícone LinkedIn" /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Ícone Instagram" /></a>
          </div>
        </section>
        <section className={S.rodape2}>
            <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
        </section>
      </footer>
    );
  }
  