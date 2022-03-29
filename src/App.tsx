import { useState } from 'react'
import styles from './App.module.css'
import poweredImage from './assets/powered.png'

import { levels, calculateImc } from './helpers/imc'

const App = () => {
 const [heightField, setHeightField] = useState<number>(0)
 const [weightField, setWeightField] = useState<number>(0)

 const handleCalculateButton = () => {
   if (heightField && weightField) {

   } else {
     alert('Digite todos os Campos')
   }
 }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt='' width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC.</h1>
          <p>IMC é a sigla paraa Índice de Massa Corporal, parâmetro adotado pela 
            Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
          </p>

        <input 
        type='number'
        placeholder='Digite a sua Altura. Ex: 1.6 (Em metros)'
        value={heightField > 0 ? heightField : ''}
        onChange={e => setHeightField(parseFloat(e.target.value))}
        />

        <input 
        type='number'
        placeholder='Digite o seu Peso. Ex: 75.3 (Em Kg)'
        value={weightField > 0 ? weightField : ''}
        onChange={e => setWeightField(parseFloat(e.target.value))}
        />

        <button onClick={handleCalculateButton}>Calcular</button>
        
        </div>
        <div className={styles.rightSide}>
          Grid Direita
        </div>
      </div>
    </div>
  )
}

export default App  