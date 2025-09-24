import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import CarrucelDama from "../assets/carrucel-dama.jpg"
import CarrucelVarias from "../assets/carrucel-varias.jpg"
import CarrucelCafe from "../assets/carrucel-cafe.jpg"

const slides = [
  {
    image: CarrucelDama,
    alt: "Correas de dama",
  },
  {
    image: CarrucelVarias,
    alt: "Correas de varias",
  },
  {
    image: CarrucelCafe,
    alt: "Correas de café",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div id="hero" className="relative h-screen w-full bg-black">
      {/* Navbar */}
      <Navbar scrollToSection={scrollToSection} />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${slides[currentSlide].image}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 pt-20">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-4 leading-none">
            TU CORREA
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide mb-8 text-gray-200">
            Correas con estilo y durabilidad, hechas para acompañarte todos los días.
          </p>
          <button
            className="bg-yellow-400 px-6 py-3 rounded-lg font-semibold text-black text-lg tracking-wide hover:bg-yellow-300 transition"
            onClick={() =>
              window.open(
                "https://wa.me/573165470166?text=¡Hola! Vi sus correas y me gustaría saber qué modelos tienen disponibles.",
                "_blank"
              )
            }
          >
            Comprar por WhatsApp
          </button>
        </div>
      </div>

      {/* Slider Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white" : "bg-white/40 hover:bg-white/60"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}
