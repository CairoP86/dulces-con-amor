return (
  <main id="inicio" className="bg-gray-50 text-gray-900">
    {/* BANNER DE BIENVENIDA */}
    <div className="bg-pink-600 text-white text-center py-3 font-semibold shadow-md">
      🎉 Bienvenido a Dulces con Amor 🍰💕 – Endulzamos tus momentos especiales
    </div>

    {/* HERO */}
    <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-green-400 via-teal-400 to-pink-400">
      <div className="absolute inset-0">
        <img src="/torta-chilena.jpg" alt="Postres caseros" className="w-full h-full object-cover opacity-30" />
      </div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">Postres que cuentan historias 💕</h1>
        <p className="mt-6 text-lg md:text-2xl font-medium max-w-2xl mx-auto">
          Dalu & Co. – Endulzamos tus momentos especiales con postres artesanales hechos con amor en Guanacaste 🍰
        </p>
        <a
          href="#menu"
          className="mt-8 inline-block bg-white text-pink-600 font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
        >
          Ver Menú 🍮
        </a>
      </div>
    </section>
