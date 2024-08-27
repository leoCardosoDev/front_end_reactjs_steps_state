import { useState } from 'react';

const messages = [
  'Aprenda React ⚛️',
  'Candidate-se a empregos 💼',
  'Invista sua nova renda 🤑',
];

export default function App() {
  let [step, setStep] = useState(1);
  const styleBg = { backgroundColor: '#7950f2', color: '#fff' };

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < messages.length) setStep(step + 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
      </div>
      <p className="message">
        Passo {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button style={styleBg} onClick={handlePrevious}>
          Anterior
        </button>
        <button style={styleBg} onClick={handleNext}>
          Próximo
        </button>
      </div>
    </div>
  );
}
