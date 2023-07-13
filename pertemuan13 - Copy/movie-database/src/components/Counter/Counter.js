// Import useState untuk menggunakan State.
import { useEffect, useState } from "react";

function Counter() {
  const [angka, setAngka] = useState(0);

  function addAngka() {
    // update state angka menggunakan setAngka
    setAngka(angka + 1);
  }

  function manipulateDOM() {
    document.title = `Result: ${angka}`;
  }

  useEffect(manipulateDOM, [angka]);

  return (
    <div>
      <p>Result: {angka}</p>
      <button onClick={addAngka}>Add</button>
    </div>
  );
}

export default Counter;
