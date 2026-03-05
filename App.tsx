import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Star, 
  Hammer, 
  Droplets, 
  Zap, 
  PaintBucket, 
  Truck, 
  Home, 
  ChevronRight, 
  Menu, 
  X,
  CheckCircle2,
  ArrowRight,
  Instagram,
  Facebook
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <span className={`text-2xl font-bold font-display ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
            Ferrecentro<span className="text-brand-orange">Rodriguez</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-medium hover:text-brand-orange transition-colors ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:8095947943"
            className="bg-brand-orange text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition-all shadow-lg flex items-center gap-2"
          >
            <Phone size={18} />
            (809) 594-7943
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={isScrolled ? 'text-brand-blue' : 'text-white'}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-800 text-lg font-medium py-2 border-b border-slate-50"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:8095947943"
                className="bg-brand-blue text-white w-full py-4 rounded-xl font-bold text-center flex items-center justify-center gap-3"
              >
                <Phone size={20} />
                Llamar Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2000&auto=format&fit=crop" 
          alt="Hardware Store Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-blue/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 px-4 py-1.5 rounded-full mb-6">
            <Star className="text-brand-yellow fill-brand-yellow" size={16} />
            <span className="text-sm font-semibold text-brand-yellow uppercase tracking-wider">4.5 Estrellas en Google</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
            Tu Ferretería de Confianza en <span className="text-brand-orange">Santo Domingo Este</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed">
            Materiales de construcción, herramientas profesionales y soluciones completas para tu hogar o proyecto.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:8095947943"
              className="bg-brand-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-3 shadow-xl hover:scale-105"
            >
              <Phone size={22} />
              Llamar Ahora
            </a>
            <a 
              href="#contacto"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3"
            >
              Solicitar Cotización
              <ArrowRight size={22} />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 opacity-80">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">100+</span>
              <span className="text-xs uppercase tracking-widest">Opiniones</span>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">20+</span>
              <span className="text-xs uppercase tracking-widest">Años de Exp.</span>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">100%</span>
              <span className="text-xs uppercase tracking-widest">Calidad</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Materiales de Construcción',
      desc: 'Cemento, varillas, arena, bloques y todo lo necesario para tu obra.',
      icon: <Hammer className="text-brand-orange" size={32} />,
    },
    {
      title: 'Herramientas Profesionales',
      desc: 'Taladros, sierras, herramientas manuales y eléctricas de las mejores marcas.',
      icon: <Zap className="text-brand-orange" size={32} />,
    },
    {
      title: 'Plomería y Electricidad',
      desc: 'Tuberías, accesorios, cables, interruptores y soluciones hidráulicas.',
      icon: <Droplets className="text-brand-orange" size={32} />,
    },
    {
      title: 'Pintura y Acabados',
      desc: 'Amplia gama de colores y tipos de pintura para interiores y exteriores.',
      icon: <PaintBucket className="text-brand-orange" size={32} />,
    },
    {
      title: 'Productos para el Hogar',
      desc: 'Artículos de ferretería general, limpieza y mantenimiento del hogar.',
      icon: <Home className="text-brand-orange" size={32} />,
    },
    {
      title: 'Entrega a Domicilio',
      desc: 'Llevamos tus materiales directamente a tu proyecto con rapidez.',
      icon: <Truck className="text-brand-orange" size={32} />,
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-3">Nuestros Servicios</h2>
          <p className="text-4xl font-bold font-display text-brand-blue mb-6">Todo lo que necesitas en un solo lugar</p>
          <p className="text-slate-600 text-lg">Ofrecemos una amplia variedad de productos y servicios para satisfacer las necesidades de constructores, contratistas y dueños de casa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const benefits = [
    "Más de 100 clientes satisfechos",
    "Excelente servicio personalizado",
    "Amplio inventario siempre disponible",
    "Ubicación estratégica en SDE",
    "Entrega a domicilio rápida y segura",
    "Precios competitivos en el mercado"
  ];

  return (
    <section id="nosotros" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?q=80&w=1000&auto=format&fit=crop" 
                alt="Hardware Store Team"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-orange rounded-3xl -z-0 hidden md:block"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 border-8 border-brand-blue/10 rounded-full -z-0"></div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-3">¿Por qué elegirnos?</h2>
            <h3 className="text-4xl font-bold font-display text-brand-blue mb-8">Compromiso con la Calidad y el Servicio</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              En Ferrecentro Rodriguez, no solo vendemos materiales; brindamos soluciones. Nuestra experiencia nos permite asesorarte en cada paso de tu proyecto, asegurando que obtengas los mejores resultados con los mejores productos.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                    alt="User" 
                    className="w-12 h-12 rounded-full border-2 border-white"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-brand-yellow">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-sm font-bold text-brand-blue">4.5/5 basado en 100+ reseñas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Juan Pérez",
      text: "Buen servicio y siempre encuentro lo que necesito para mis trabajos de construcción. Los precios son muy justos.",
      role: "Contratista"
    },
    {
      name: "María García",
      text: "Excelente atención y buenos precios. Me ayudaron a elegir la pintura perfecta para mi sala. ¡Muy recomendados!",
      role: "Cliente Particular"
    },
    {
      name: "Ricardo Santos",
      text: "La entrega a domicilio es súper rápida. Me ahorraron mucho tiempo en mi última remodelación. Gran equipo.",
      role: "Ingeniero Civil"
    }
  ];

  return (
    <section className="py-24 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-bold uppercase tracking-widest mb-4">Testimonios</h2>
          <h3 className="text-4xl font-bold font-display">Lo que dicen nuestros clientes</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="flex text-brand-yellow mb-6">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill={i <= 4 ? "currentColor" : "none"} />)}
              </div>
              <p className="text-slate-300 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center font-bold text-xl">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-bold">{review.name}</p>
                  <p className="text-sm text-slate-400">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="ubicacion" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <h2 className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-3">Ubicación</h2>
            <h3 className="text-4xl font-bold font-display text-brand-blue mb-8">Visítanos hoy mismo</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-orange-50 p-3 rounded-lg h-fit">
                  <MapPin className="text-brand-orange" size={24} />
                </div>
                <div>
                  <p className="font-bold text-brand-blue text-lg">Dirección</p>
                  <p className="text-slate-600">C. Pdte. Vásquez, Santo Domingo Este, República Dominicana</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-orange-50 p-3 rounded-lg h-fit">
                  <Clock className="text-brand-orange" size={24} />
                </div>
                <div>
                  <p className="font-bold text-brand-blue text-lg">Horario</p>
                  <p className="text-slate-600">Lunes a Sábado: 8:00 AM - 6:00 PM</p>
                  <p className="text-slate-600">Domingos: Cerrado</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-orange-50 p-3 rounded-lg h-fit">
                  <Phone className="text-brand-orange" size={24} />
                </div>
                <div>
                  <p className="font-bold text-brand-blue text-lg">Teléfono</p>
                  <p className="text-slate-600">(809) 594-7943</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Ferrecentro+Rodriguez+Santo+Domingo+Este"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg"
              >
                <MapPin size={20} />
                Cómo llegar
              </a>
            </div>
          </div>

          <div className="lg:w-2/3 h-[450px] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.340242131934!2d-69.855675!3d18.4861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf880000000000%3A0x0!2zMTjCsDI5JzA5LjkiTiA2OcKwNTEnMjAuNCJX!5e0!3m2!1ses!2sdo!4v1620000000000!5m2!1ses!2sdo" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Mapa de ubicación"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-brand-orange p-12 text-white flex flex-col justify-center">
            <h3 className="text-4xl font-bold font-display mb-6">Solicita tu Cotización</h3>
            <p className="text-white/80 text-lg mb-10">
              ¿Tienes un proyecto en mente? Cuéntanos qué necesitas y nuestro equipo te enviará un presupuesto detallado lo antes posible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-medium">Respuesta en menos de 24h</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-medium">Asesoría técnica incluida</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-medium">Los mejores precios de SDE</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-12">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-bold text-brand-blue mb-2">¡Mensaje Enviado!</h4>
                <p className="text-slate-600 mb-8">Gracias por contactarnos. Te responderemos muy pronto.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-brand-orange font-bold hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nombre Completo</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Teléfono / WhatsApp</label>
                  <input 
                    type="tel" 
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                    placeholder="Ej. (809) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">¿Qué materiales necesitas?</label>
                  <textarea 
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                    placeholder="Describe brevemente tu pedido..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar Cotización'}
                  {!isSubmitting && <ChevronRight size={20} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-20 bg-brand-orange relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-8">
          ¿Necesitas materiales o herramientas hoy?
        </h2>
        <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto">
          No detengas tu obra. Llámanos ahora mismo y consulta disponibilidad o solicita tu entrega a domicilio.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="tel:8095947943"
            className="bg-brand-blue text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all shadow-2xl flex items-center justify-center gap-3"
          >
            <Phone size={24} />
            Llamar Ahora
          </a>
          <a 
            href="#contacto"
            className="bg-white text-brand-orange px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all shadow-2xl flex items-center justify-center gap-3"
          >
            Pedir Cotización
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold font-display text-white mb-6 block">
              Ferrecentro<span className="text-brand-orange">Rodriguez</span>
            </span>
            <p className="max-w-md mb-8 leading-relaxed">
              Tu ferretería de confianza en Santo Domingo Este. Proveemos materiales de construcción y herramientas de alta calidad desde hace más de 20 años.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/5 p-3 rounded-lg hover:bg-brand-orange hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-lg hover:bg-brand-orange hover:text-white transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Enlaces</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="hover:text-brand-orange transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-brand-orange transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="hover:text-brand-orange transition-colors">Nosotros</a></li>
              <li><a href="#ubicacion" className="hover:text-brand-orange transition-colors">Ubicación</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-orange" />
                (809) 594-7943
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-orange shrink-0 mt-1" />
                C. Pdte. Vásquez, SDE, RD
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-brand-orange" />
                Lun - Sáb: 8am - 6pm
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ferrecentro Rodriguez. Todos los derechos reservados.</p>
          <p className="mt-2 text-slate-600">Diseñado para máxima conversión en Santo Domingo Este.</p>
        </div>
      </div>
    </footer>
  );
};

const StickyButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/18095947943" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center"
        title="Escríbenos por WhatsApp"
      >
        <MessageSquare size={28} fill="currentColor" />
      </a>
      
      {/* Call Button (Mobile Only) */}
      <a 
        href="tel:8095947943" 
        className="md:hidden bg-brand-orange text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center"
        title="Llámanos"
      >
        <Phone size={28} fill="currentColor" />
      </a>
    </div>
  );
};

export default function App() {
  return (
    <div className="font-sans text-slate-900 bg-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Location />
      <ContactForm />
      <FinalCTA />
      <Footer />
      <StickyButtons />
    </div>
  );
}
