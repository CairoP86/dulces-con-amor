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
    </main>
  );
}
