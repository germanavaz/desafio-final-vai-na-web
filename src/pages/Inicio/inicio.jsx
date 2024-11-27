import S from './inicio.module.scss';
import Icon1 from '../../assets/div1.png';
import Icon2 from '../../assets/div2.png';
import Icon3 from '../../assets/div3.png';
import Icon4 from '../../assets/div4.png';

export default function Inicio() {
    return (
      <main>
        <section className={S.bannerPrincipal}>
          <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </section>
        
        <article className={S.porque}>
        <h2>Por que devo doar?</h2>
          <section className={S.cards}>
            <div>
              <img src={Icon1} alt="" />
              <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
            </div>
            <div>
              <img src={Icon2} alt="" />
              <p> Estimula o hábito da leitura e o aprendizado contínuo.</p>
            </div>
            <div>
              <img src={Icon3} alt="" />
              <p> Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
            </div>
            <div>
              <img src={Icon4} alt="" />
              <p> Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
            </div>
          </section>
        </article>
        
      </main>
      

    );
  }
  