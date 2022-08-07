import styles from './App.module.css';
import Header from './components/Header';
import metabolic from './imgs/metabolism.png';
import Calculator from './components/Calculator';
import TMBForm from './components/TMBForm';

const App = () => {
  return (
    <>
      <Header />
      <section className={`${styles.container} ${styles.abt}`}>
        <h1 className={styles.title}>Taxa Metabólica Basal</h1>
        <div className={styles.content}>
          <p>
            Taxa metabólica basal é um método matemático, não exato, de calcular
            a quantidade calórica que o corpo necessita, em vinte e quatro
            horas, para manter as funções vitais. Este calculo não inclui o
            gasto calórico das atividades realizadas durante o dia.
          </p>
          <h2 className={styles.subtitle}>
            Gasto calórico diário
          </h2>
          <div className={styles.graph}>
          <img className={styles.met} src={metabolic} alt="Gráfico gasto calórico" />
          <div className={styles.gLegend}>
            <p><div className={styles.fir}></div>Taxa metabólica basal: 70%</p>
            <p><div></div>Atividade física: 20 - 25%</p>
            <p><div></div>Digestão: 5 - 10%</p>
            </div>          
          </div>
        </div>
      </section>
      <section className={`${styles.container} ${styles.calc}`}>
        <h2 className={styles.subtitle}>Calculadora</h2>
        <div className={styles.content}>
  
        <Calculator />
        </div>
      </section>
      <section className={`${styles.container} ${styles.ht}`}>
        <div className={styles.tmb}>
          <h2 className={styles.subtitle}>Como calcular a TMB</h2>
          <div className={styles.content}>
            <TMBForm />
          </div>
        </div>
        <div className={styles.ndcimc}>
          <div className={styles.ndc}>
            <h2 className={styles.subtitle}>Como calcular o NDC</h2>
            <ul>
              <li>Sedentários: 1,2 x TMB</li>
              <li>Levemente ativo: 1,375 x TMB</li>
              <li>Moderadamente ativo: 1,55 x TMB</li>
              <li>Altamente ativo: 1,725 x TMB</li>
              <li>Extremamente ativo: 1,9 x TMB</li>
            </ul>
          </div>
          <div className={styles.imc}>
            <h2 className={styles.subtitle}>Como calcular o IMC</h2>
            <ul>
              <li>IMC = Peso / (Altura x Altura)</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
