import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  { src: "/gallery/1.jpeg", alt: "Team collaboration", span: "col-span-2 row-span-2" },
  { src: "/gallery/2.jpeg", alt: "Coding session", span: "col-span-1 row-span-1" },
  { src: "/gallery/3.jpeg", alt: "Team meeting", span: "col-span-1 row-span-1" },
  { src: "/gallery/4.jpeg", alt: "Workshop", span: "col-span-1 row-span-1" },
  { src: "/gallery/5.jpeg", alt: "Team celebration", span: "col-span-1 row-span-1" },
  { src: "/gallery/6.jpg", alt: "Team celebration", span: "col-span-1 row-span-1" },
  { src: "/gallery/7.jpeg", alt: "Team celebration", span: "col-span-1 row-span-1" },
  { src: "/gallery/8.jpeg", alt: "Team celebration", span: "col-span-1 row-span-1" },
  { src: "/gallery/9.jpeg", alt: "Team celebration", span: "col-span-1 row-span-1" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="section-label mb-4">Moments</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Beyond the code.
          </h2>
          <p className="text-muted-foreground text-lg">
            Glimpses of the team's journey — sprints, workshops, and celebrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto auto-rows-[140px] md:auto-rows-[180px]">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl border border-border card-surface ${image.span}`}
              onClick={() => setSelectedImage(image.src)}
              aria-label={`View image: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-xl p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2.5 bg-card rounded-full text-foreground hover:text-primary transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              alt=""
              className="max-w-full max-h-[80vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
