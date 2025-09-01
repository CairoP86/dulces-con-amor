export default function Home() {
  type Opciones = "Porción" | "Completo";

  const precios: Record<Opciones, number> = {
    Porción: 2500,
    Completo: 4500,
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-rosado via-turquesa to-verde flex flex-col items-center justify-center text-white p-8">
      {/* Encabezado */}
      <h1 className="text-5xl font-extrabold drop-shadow-lg mb-4 text-center">
        Dulces con Amor 🍰💕
      </h1>
      <p className="text-lg md:text-xl mb-10 text-center max-w-2xl">
        Endulzamos tus momentos especiales con <br />
        <span className="font-semibold">postres artesanales hechos con amor en Guanacaste</span>.
      </p>

      {/* Tarjeta de bienvenida */}
      <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-6 max-w-md w-full text-center transform hover:scale-105 transition duration-300">
        <h2 className="text-2xl font-bold mb-4">🍮 Nuestros precios</h2>
        <div className="space-y-3">
          <p className="flex justify-between border-b border-gray-200 pb-2">
            <span className="font-medium">Porción</span>
            <span className="font-bold text-verde">₡{precios["Porción"]}</span>
          </p>
          <p className="flex justify-between">
            <span className="font-medium">Completo</span>
            <span className="font-bold text-rosado">₡{precios["Completo"]}</span>
          </p>
        </div>
      </div>

      {/* Botón menú */}
      <a
        href="#menu"
        className="mt-8 bg-verde hover:bg-green-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition"
      >
        Ver Menú 📖
      </a>
    </main>
  );
}
