import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import tallasCorreas from "../assets/tallas-correa.jpg"
import cadaOcasion from "../assets/cada-ocasion.jpg"
import videoCuero from "../assets/video-cuero.mp4";

const timelineEntries = [
  {
    id: 1,
    video: videoCuero,
    alt: "video de correa de cuero",
    title: "Correas hechas en cuero de calidad",
    description:
      "Trabajamos con cuero resistente y duradero, seleccionado para ofrecerte un producto que combine estilo, comodidad y confianza. Cada correa está pensada para acompañarte por mucho tiempo sin perder su esencia.",
    layout: "left",
  },
  {
    id: 2,
    image: cadaOcasion,
    alt: "Correas animalprint dama",
    title: "Diseños para cada ocasión: casual, oficina y formal",
    description:
      "Ya sea para un look elegante, un día de trabajo o un estilo más relajado, contamos con diseños que se adaptan a ti. Aquí encontrarás la correa ideal para cada momento y para cada forma de vestir.",
    layout: "right",
  },
  {
    id: 3,
    image: tallasCorreas,
    alt: "Hombre arreglando correa",
    title: "Ajuste perfecto — talles y longitudes para todos",
    description:
      "En nuestra tienda no importa la talla: cortamos y adaptamos tu correa al instante para que quede perfecta y cómoda desde el primer uso.",
    layout: "left",
  },
];

export function Timeline({ className }) {
  const classNameString = `relative ${className ? className : ""}`.trim();

  return (
    <div className={classNameString}>
      {/* Central Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2 hidden md:block" />

      {timelineEntries.map((entry, index) => (
        <TimelineItem key={entry.id} entry={entry} index={index} />
      ))}
    </div>
  );
}

function TimelineItem({ entry, index }) {
  const itemRef = useRef(null);

  const { scrollYProgress: itemProgress } = useScroll({
    target: itemRef,
    offset: ["start center", "end center"],
  });

  const opacity = useTransform(itemProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(itemProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  const isLeft = entry.layout === "left";

  const gridClasses = `grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${isLeft ? "md:text-right" : ""}`.trim();
  const imageWrapperClasses = `relative ${isLeft ? "md:order-2" : "md:order-1"}`;
  const contentWrapperClasses = `relative ${isLeft ? "md:order-1" : "md:order-2"}`;

  return (
    <motion.div ref={itemRef} style={{ opacity, scale }} className="relative mb-20 md:mb-32 timeline-item">
      {/* Timeline Dot */}
      <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-gray-900 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block" />

      <div className="container mx-auto px-6">
        <div className={gridClasses}>
          {/* Image */}
          <div className={imageWrapperClasses}>
            <div className="sticky top-20">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-100">
                {entry.video ? (
                  <video
                    src={entry.video}
                    autoPlay
                    loop
                    muted
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={entry.image || "/placeholder.svg"}
                    alt={entry.alt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={contentWrapperClasses}>
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-wide text-gray-900">
                  {entry.title}
                </h3>
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-lg">{entry.description}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}