const messages = [
  'Aprenda React ⚛️',
  'Candidate-se a empregos 💼',
  'Invista sua nova renda 🤑',
];

export default function App() {
  const step = 1;
  const styleBg = { backgroundColor: '#7950f2', color: '#fff' };
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
        <button style={styleBg}>Previous</button>
        <button style={styleBg}>Next</button>
      </div>
    </div>
  );
}
