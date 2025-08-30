"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaShoppingCart, FaTrash, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Home() {
  const listaPostres = [
    { name: "Flan de Coco", desc: "Suave, delicado y con el sabor tropical del coco 🥥", img: "/flan-coco.jpg" },
    { name: "Pie de Manzana", desc: "Dulce y casero, con trozos de manzana fresca 🍎", img: "/pie-manzana.jpg" },
    { name: "Pie de Maracuyá", desc: "El sabor tropical más refrescante y cremoso 🥭", img: "/pie-maracuya.jpg" },
    { name: "Pie de Limón", desc: "Refrescante y cremoso, el clásico favorito 💛", img: "/pie-limon.jpg" },
    { name: "Pie de Fresa", desc: "Frutal, fresco y lleno de dulzura 🍓", img: "/pie-fresa.jpg" },
    { name: "Carlota", desc: "Un postre suave y ligero, con capas de galleta y crema ✨", img: "/carlota.jpg" },
    { name: "Torta Chilena", desc: "Capas de masa y dulce de leche, una delicia tradicional 🇨🇱", img: "/torta-chilena.jpg" },
    { name: "Tiramisú", desc: "El clásico italiano con café y mascarpone ☕", img: "/tiramisu.jpg" },
  ];

  const testimonios = [
    { texto: "El pie de maracuyá es simplemente espectacular, se siente fresco y lleno de sabor.", autor: "– Sofía R." },
    { texto: "Pedimos la torta chilena para un cumpleaños y fue un éxito total. ¡Todos quedaron encantados!", autor: "– Daniel M." },
    { texto: "Me encantó la presentación y el sabor del tiramisú. 100% recomendado.", autor: "– Mariana G." },
  ];

  const precios = { Porción: 1500, Completo: 7000 };

  const [open, setOpen] = useState(false);
  const [productoActivo, setProductoActivo] = useState<any>(null);
  const [cantidad, setCantidad] = useState(1);
  const [opcion, setOpcion] = useState("Porción");

  const [carrito, setCarrito] = useState<any[]>([]);
  const [openCarrito, setOpenCarrito] = useState(false);

  const [indexTestimonio, setIndexTestimonio] = useState(0);

  // Rotación automática de testimonios cada 7s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexTestimonio((prev) => (prev + 1) % testimonios.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [testimonios.length]);

  const siguienteTestimonio = () => {
    setIndexTestimonio((prev) => (prev + 1) % testimonios.length);
  };

  const anteriorTestimonio = () => {
    setIndexTestimonio((prev) => (prev - 1 + testimonios.length) % testimonios.length);
  };

  const formatPrice = (price: number) => "₡ " + price.toLocaleString("es-CR");

  const agregarAlCarrito = () => {
    const item = {
      id: Date.now(),
      name: productoActivo.name,
      opcion,
      cantidad,
      precioUnitario: precios[opcion],
      total: precios[opcion] * cantidad,
    };
    setCarrito([...carrito, item]);
    setOpen(false);
  };

  const eliminarDelCarrito = (id: number) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const totalCarrito = carrito.reduce((acc, item) => acc + item.total, 0);
  const cantidadCarrito = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const generarMensajeWhatsApp = () => {
    let mensaje = "Hola, quiero hacer un pedido:\n";
    carrito.forEach((item) => {
      mensaje += `- ${item.cantidad} ${item.opcion} de ${item.name} (${formatPrice(item.total)})\n`;
    });
    mensaje += `\nTotal: ${formatPrice(totalCarrito)}\nEntrega sábado 🙌`;
    return encodeURIComponent(mensaje);
  };

  return (
    <main id="inicio" className="bg-gray-50 text-gray-900">
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

      {/* MENÚ */}
      <section id="menu" className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-12">Nuestros Postres</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {listaPostres.map((p, i) => (
            <div
              key={i}
              onClick={() => {
                setProductoActivo(p);
                setCantidad(1);
                setOpcion("Porción");
                setOpen(true);
              }}
              className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <img src={p.img} alt={p.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-600">{p.name}</h3>
                <p className="text-gray-600 mt-2">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HORARIOS */}
      <section id="horarios" className="bg-pink-50 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Horarios</h2>
        <p className="text-lg text-gray-600">📦 Pedidos: <span className="font-semibold">Lunes a Jueves</span></p>
        <p className="text-lg text-gray-600">🚚 Entregas: <span className="font-semibold">Sábados</span></p>
      </section>

      {/* TESTIMONIOS - CARRUSEL */}
      <section id="testimonios" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <h2 className="text-3xl font-bold mb-10 text-pink-600">Lo que dicen nuestros clientes</h2>

          {/* Botón anterior */}
          <button
            onClick={anteriorTestimonio}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-pink-500 text-white p-3 rounded-full shadow hover:bg-pink-600 transition"
          >
            <FaChevronLeft />
          </button>

          {/* Botón siguiente */}
          <button
            onClick={siguienteTestimonio}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-pink-500 text-white p-3 rounded-full shadow hover:bg-pink-600 transition"
          >
            <FaChevronRight />
          </button>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={indexTestimonio}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
                className="bg-pink-100 rounded-2xl p-8 shadow-md"
              >
                <p className="text-gray-700 italic text-lg">“{testimonios[indexTestimonio].texto}”</p>
                <h4 className="mt-4 font-semibold text-pink-600">{testimonios[indexTestimonio].autor}</h4>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Puntos indicadores */}
          <div className="flex justify-center gap-3 mt-6">
            {testimonios.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndexTestimonio(i)}
                className={`w-3 h-3 rounded-full ${i === indexTestimonio ? "bg-pink-600" : "bg-pink-300"}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL PRODUCTO */}
      <AnimatePresence>
        {open && productoActivo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 max-w-md shadow-lg relative"
            >
              <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
                ✖
              </button>
              <img src={productoActivo.img} alt={productoActivo.name} className="w-full h-56 object-cover rounded-xl" />
              <h2 className="text-2xl font-bold mt-4">{productoActivo.name}</h2>
              <p className="text-gray-700 mt-2">{productoActivo.desc}</p>

              {/* Selector porción/completo */}
              <div className="mt-4 flex justify-center gap-4">
                {["Porción", "Completo"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setOpcion(opt)}
                    className={`px-4 py-2 rounded-lg font-semibold ${
                      opcion === opt ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {opt} {formatPrice(precios[opt as "Porción" | "Completo"])}
                  </button>
                ))}
              </div>

              {/* Selector cantidad */}
              <div className="flex items-center gap-4 mt-4 justify-center">
                <button onClick={() => setCantidad(Math.max(1, cantidad - 1))} className="px-3 py-1 bg-gray-200 rounded-lg">
                  ➖
                </button>
                <span className="font-semibold">{cantidad}</span>
                <button onClick={() => setCantidad(cantidad + 1)} className="px-3 py-1 bg-gray-200 rounded-lg">
                  ➕
                </button>
              </div>

              <p className="text-pink-500 font-semibold mt-4 text-lg text-center">
                Total: {formatPrice(precios[opcion as "Porción" | "Completo"] * cantidad)}
              </p>

              <button
                onClick={agregarAlCarrito}
                className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
              >
                Agregar al Carrito 🛒
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL CARRITO */}
      <AnimatePresence>
        {openCarrito && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 max-w-md shadow-lg relative"
            >
              <button onClick={() => setOpenCarrito(false)} className="absolute top-3 right-3">✖</button>
              <h2 className="text-2xl font-bold mb-4">🛒 Carrito de pedidos</h2>

              {carrito.length === 0 ? (
                <p className="text-gray-600">Tu carrito está vacío.</p>
              ) : (
                <>
                  <ul className="space-y-3">
                    {carrito.map((item) => (
                      <li key={item.id} className="flex justify-between items-center text-gray-700">
                        <span>
                          {item.cantidad} {item.opcion} de {item.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span>{formatPrice(item.total)}</span>
                          <button
                            onClick={() => eliminarDelCarrito(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-lg font-bold text-pink-600">Total: {formatPrice(totalCarrito)}</p>

                  <a
                    href={`https://wa.me/50683421619?text=${generarMensajeWhatsApp()}`}
                    target="_blank"
                    className="mt-6 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
                  >
                    <FaWhatsapp size={20} /> Enviar pedido por WhatsApp
                  </a>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOTÓN CARRITO FLOTANTE ARRIBA DERECHA */}
      <button
        onClick={() => setOpenCarrito(true)}
        className="fixed top-6 right-6 bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
      >
        <FaShoppingCart size={24} />
        {carrito.length > 0 && (
          <span className="ml-2 bg-white text-pink-600 px-3 py-1 rounded-full text-sm font-bold">
            {cantidadCarrito} ítems – {formatPrice(totalCarrito)}
          </span>
        )}
      </button>

      {/* BOTÓN WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/50683421619"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        <FaWhatsapp size={28} />
      </a>
    </main>
  );
}
