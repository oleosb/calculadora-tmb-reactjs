import { useEffect, useState } from 'react';
import styles from './Calculator.module.css';
import { calculateIMC } from '../helpers/imc';
import { calculateTMB } from '../helpers/tmb';

const Calculator = () => {
  const [TMB, setTMB] = useState();
  const [NDC, setNDC] = useState();
  const [IMC, setIMC] = useState('');
  const [data, setData] = useState({
    method: 'Mifflin-St Jeor',
    gender: '',
    age: '',
    weight: '',
    height: '',
    activity: 1.2,
  });

  const handleMethod = ({ target }) => {
    setData({ ...data, method: target.value });
  };
  const handleGender = ({ target }) => {
    setData({ ...data, gender: target.value });
  };
  const handleAge = ({ target }) => {
    setData({ ...data, age: target.value });
  };
  const handleWeight = ({ target }) => {
    setData({ ...data, weight: target.value });
  };
  const handleHeight = ({ target }) => {
    setData({ ...data, height: target.value });
  };
  const handleActivity = ({ target }) => {
    setData({ ...data, activity: target.value });
  };

  useEffect(() => {
    setIMC(calculateIMC(data.height / 100, data.weight));
    setTMB(
      calculateTMB(
        data.method,
        data.gender,
        data.age,
        data.height,
        data.weight,
      ),
    );
    setNDC(
      calculateTMB(
        data.method,
        data.gender,
        data.age,
        data.height,
        data.weight,
      ) * data.activity,
    );
  }, [data]);

  return (
    <>
      <div className={styles.calculator}>
        <div className={styles.method}>
          <label htmlFor="method" className={styles.subtitle}>
            Método:
          </label>
          <select name="method" id="method" onChange={handleMethod}>
            <option value="Mifflin-St Jeor">Mifflin-St Jeor</option>
            <option value="Harris-Benedict">Harris-Benedict</option>
          </select>
        </div>
        <div className={styles.gender}>
          <label className={styles.subtitle}>Gênero:</label>
          <div className={styles.radios}>
            <div>
              <label htmlFor="genderM">
                <input
                  type="radio"
                  name="gender"
                  id="genderM"
                  value="m"
                  onChange={handleGender}
                />
                <span>Masculino</span>
              </label>
            </div>
            <div>
              <label htmlFor="genderW">
                <input
                  type="radio"
                  name="gender"
                  id="genderW"
                  value="w"
                  onChange={handleGender}
                />
                <span>Feminino</span>
              </label>
            </div>
          </div>
        </div>
        <div className={styles.age}>
          <label htmlFor="age" className={styles.subtitle}>
            Idade {'('}anos{')'}:
          </label>
          <input type="number" id="age" value={data.age} onChange={handleAge} />
        </div>
        <div className={styles.weight}>
          <label htmlFor="weight" className={styles.subtitle}>
            Peso {'('}kg{')'}:
          </label>
          <input
            type="number"
            id="weight"
            value={data.weight}
            onChange={handleWeight}
          />
        </div>
        <div className={styles.height}>
          <label htmlFor="height" className={styles.subtitle}>
            Altura {'('}cm{')'}:
          </label>
          <input
            type="number"
            id="height"
            value={data.height}
            onChange={handleHeight}
          />
        </div>
        <div className={styles.activity}>
          <label htmlFor="activity" className={styles.subtitle}>
            Atividade:
          </label>
          <select name="activity" id="activity" onChange={handleActivity}>
            <option value="1.2">Sedentário</option>
            <option value="1.375">Levemente ativo</option>
            <option value="1.55">Moderadamente ativo</option>
            <option value="1.725">Altamente ativo</option>
            <option value="1.9">Extremamente ativo</option>
          </select>
        </div>
      </div>
      <div className={styles.results}>
        <p className={styles.result} style={{color: '#76B947'}}>
          <span>TMB =</span>{' '}
          {data.age && data.weight && data.height ? TMB.toFixed(0) : '0000'}
          <span>kcal/dia</span>{' '}
        </p>
        <p className={styles.result}>
          <span>NDC* =</span>{' '}
          {data.age && data.weight && data.height ? NDC.toFixed(0) : '0000'}
          <span>kcal/dia</span>{' '}
        </p>
        <p className={styles.result}>
          <span>IMC** =</span> {IMC ? IMC.userIMC : '0000'}
          <div className={styles.imc_unit}>
            <span>kg/m²</span>
            <span className={styles.imc_title}>{IMC ? `(${IMC.title})` : ''}</span>
          </div>
        </p>
        <p className={styles.desc}>*NDC: quantidade máxima de calorias que pode ser ingerida diariamente.</p>
        <p className={styles.desc}>**IMC: índice de massa corpórea.</p>
      </div>
    </>
  );
};

export default Calculator;
