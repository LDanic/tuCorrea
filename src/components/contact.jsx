import { motion } from "framer-motion"
import { MapPin, Phone, Clock } from "lucide-react"
import localKokorico from "../assets/local-kokorico.png"
import "../styles/contact.css"

export function Contact() {
  const stores = [
    {
      id: 1,
      name: "Tu Correa Iglesia la Valbanera",
      address: "Cra 24, Restrepo, Bogotá",
      directions:
        "Ubicada en el corazón de Restrepo, a pocos pasos de la Iglesia de La Valvanera.",
      hours: "Lun-Sáb: 9AM-7PM, Dom: 10AM-6PM",
      image: localKokorico,
    },
    {
      id: 2,
      name: "Tu Correa Kokorico",
      address: "Cra 24, Restrepo, Bogotá",
      directions: "En pleno Restrepo, justo al frente del Kokorico. Una ubicación central para que nos visites sin complicaciones.",
      hours: "Lun-Sáb: 9AM-7PM, Dom: 10AM-6PM",
      image: localKokorico,
    },
  ]

  return (
    <section id="contact" className="relative py-20 bg-black">
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-white">CONTACTANOS</h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Visítanos en cualquiera de nuestras dos tiendas o escríbenos por WhatsApp para ver diseños y tallas.
          </p>
        </div>

        {/* WhatsApp Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="bg-green-900/30 border-2 border-green-500 rounded-2xl p-8 max-w-md mx-auto">
            <Phone className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Escríbenos por WhatsApp</h3>
            <p className="text-gray-300 mb-4">Envianos un mensaje para obtener tu nueva correa!</p>
            <a
              href="https://wa.me/573165470166?text=¡Hola! Vi sus correas y me gustaría saber qué modelos tienen disponibles."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +57 316-547-0166
            </a>
          </div>
        </motion.div>

        {/* Store Locations */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {stores.map((store, index) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900 border-2 border-gray-700 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={store.image || "/placeholder.svg"}
                  alt={`${store.name} storefront`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{store.name}</h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">{store.address}</p>
                      <p className="text-gray-300 text-sm mt-1">{store.directions}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">{store.hours}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 border-2 border-gray-700 rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="p-6 border-b border-gray-700">
            <h3 className="text-2xl font-bold text-white text-center">Encuentranos en el mapa</h3>
            <p className="text-gray-300 text-center mt-2">Ambas ubicaciones de la tienda marcadas para su conveniencia</p>
          </div>

          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.903562084092!2d-74.10615492503158!3d4.582157643673516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99f54f7c3d25%3A0x9fdd25b9d5e8c7c2!2sRestrepo%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1724473456789"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa - Barrio Restrepo Bogotá"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
