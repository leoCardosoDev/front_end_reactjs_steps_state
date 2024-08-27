const messages = [
  'Aprenda React ⚛️',
  'Candidate-se a empregos 💼',
  'Invista sua nova renda 🤑',
];

export default function App() {
  let step = 1;
  const styleBg = { backgroundColor: '#7950f2', color: '#fff' };

  function handlePrevious() {
    step--;
    console.log(step);
  }

  function handleNext() {
    step++;
    console.log(step);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button style={styleBg} onClick={handlePrevious}>
          Previous
        </button>
        <button style={styleBg} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
