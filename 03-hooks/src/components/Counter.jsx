import { useCounter } from "../hooks/useCounter";

export const Counter = () => {
  const { handleIncrement, handleDecrement, handleReset, contador } =
    useCounter(5);

  return (
    <>
      <h1>Mi contador</h1>
      <p>valor: {contador}</p>

      <button onClick={() => handleDecrement()}>-</button>
      <button onClick={() => handleIncrement()}>+</button>
      <button onClick={() => handleReset()}>Reset</button>
    </>
  );
};
