import S from './livrosDoados.module.scss';
import livro from '../../assets/livro1.png'

export default function LivrosDoados() {
    return (
      <section className={S.secao1}>
        <h2>Livros Doados</h2>
        <div className={S.livro}>
          <img src={livro} alt="" />
          <div>
          <p>O protagonista</p>
          <p>Susanne Andrade</p>
          <p>Ficção</p>
          </div>
        </div>
      </section>
    );
  }