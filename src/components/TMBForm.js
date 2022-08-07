import styles from './TMBForm.module.css';

const TMB_form = () => {
  const forms = [
    {
      method: 'Mifflin-St Jeor',
      male: '(10 x P) + (6,25 x A) - (5,0 x I) + 5',
      fem: '(10 x P) + (6,25 x A) - (5,0 x I) - 161',
      desc: 'É a mais precisa para estimar o GEB tanto em individuos eutróficos, como em sobrepeso e obesos.',
    },
    {
      method: 'Harris-Benedict',
      male: '655 + (9,6 x P) + (1,9 x A) - (4,7 x I)',
      fem: '66 + (13,8 x P) + (5,0 x A) - (6,8 x I)',
      desc: 'Essa equação é mais indicada para praticantes de atividade fisicas, enfermos ou feridos.',
    },
  ];

  return (
    <>
      {forms.map((form, idx) => (
        <div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Sexo</th>
                <th>Fórmula de {form.method}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Masc.</td>
                <td>{form.male}</td>
              </tr>
              <tr>
                <td>Fem.</td>
                <td>{form.fem}</td>
              </tr>
            </tbody>
          </table>
          <p className={styles.desc}>
            <strong>P</strong> é peso, <strong>A</strong> é altura em
            centímetros e <strong>I</strong> idade em anos. {form.desc}
          </p>
        </div>
      ))}
    </>
  );
};

export default TMB_form;
