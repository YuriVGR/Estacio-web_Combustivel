import Nav from "./components/navbar";
import logo from "./assets/logo.png";
import { useState } from "react";

export default function App() {
  const [alcool, setAlcool] = useState(0);
  const [gasolina, setGasolina] = useState(0);
  const [result, setResult] = useState(0);
  const [response, setResponse] = useState("");

  function calc() {
    const div = Number(alcool) / Number(gasolina);
    setResult(div);

    if (result < 0.7) {
      setResponse("Melhor: Alcool");
    } else if (gasolina === 0 || alcool === 0) {
      setResult(0);
      setResponse("Digite um valor válido");
    } else {
      setResponse("Melhor: Gasolina");
    }
  }

  return (
    <main className="bg-slate-800 h-screen w-screen flex flex-col items-center justify-center text-white">
      <div className="flex flex-col gap-2 items-center">
        <img src={logo} alt="" className="size-44" />
        <h1 className="text-4xl font-bold">Qual a melhor opção ?</h1>
        <div className="flex flex-col gap-2 w-3/4 ">
          <div className="flex flex-col gap-1">
            <label htmlFor="alcool" className="text-sm">
              Álcool (preço por litro)
            </label>
            <input
              type="number"
              nome="alcool"
              id="alcool"
              className="rounded-lg text-black px-2 py-1"
              value={alcool}
              onChange={(e) => setAlcool(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="gasolina" className="text-sm">
              Gasolina (preço por litro)
            </label>
            <input
              type="number"
              name="gasolina"
              id="gasolina"
              className="rounded-lg text-black px-2 py-1"
              onChange={(e) => setGasolina(e.target.value)}
            />
          </div>
          <button
            className="bg-gradient-to-b from-orange-300 to-orange-500 font-bold p-2 rounded-lg hover:from-orange-300 hover:to-orange-400 transition-all hover:scale-105 mt-2 active:to-orange-300"
            onClick={calc}
          >
            Confirmar
          </button>
        </div>
        <footer>
          <p>{response}</p>
        </footer>
      </div>
    </main>
  );
}
