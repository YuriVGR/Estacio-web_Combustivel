export default function Nav() {
  return (
    <header className="top-5 absolute w-screen flex justify-center items-center h-12 pointer-events-none">
      <nav className="bg-gradient-to-b from-orange-400 to-orange-500 px-4 py-2 rounded-lg pointer-events-auto hover:scale-105 transition-transform">
        <h1 className="text-white font-semibold text-2xl select-none">
          Calculadora de Combustivel
        </h1>
      </nav>
    </header>
  );
}
