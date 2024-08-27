import { useState } from 'react';

const messages = [
  'Aprenda React ⚛️',
  'Candidate-se a empregos 💼',
  'Invista sua nova renda 🤑',
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const styleBg = { backgroundColor: '#7950f2', color: '#fff' };

  function handlePrevious() {
    if (step > 1) setStep((currentStep) => currentStep - 1);
  }

  function handleNext() {
    if (step < messages.length) setStep((currentStep) => currentStep + 1);
  }

  return (
    <>
      <button
        className="close"
        onClick={() => setIsOpen((currentState) => !currentState)}
      >
        <span
          dangerouslySetInnerHTML={{ __html: isOpen ? '&times;' : '&#9654;' }}
        />
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
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
      )}
    </>
  );
}
