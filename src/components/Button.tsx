interface ButtonProbs {
  children: string;
  onClick: () => void;
}
const Button = (probs: ButtonProbs) => {
  return (
    <button className="btn btn-primary" onClick={probs.onClick}>
      {probs.children}
    </button>
  );
};

export default Button;
