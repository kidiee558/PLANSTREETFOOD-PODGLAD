import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { src: "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/jedzenie1.webp", alt: "Nasze jedzenie 1", rotate: "-rotate-2" },
    { src: "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/jedzenie2.webp", alt: "Nasze jedzenie 2", rotate: "rotate-3" },
    { src: "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/jedzenie3.webp", alt: "Nasze jedzenie 3", rotate: "-rotate-1" },
    { src: "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/jedzenie4.jpg", alt: "Nasze jedzenie 4", rotate: "rotate-2" },
  ];

  const teamImages = [
    { src: "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/dziewczyny1.jpg", alt: "Nasza ekipa 1", rotate: "rotate-2" },
    { src: "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/napoje1.jpg", alt: "Pyszne napoje", rotate: "-rotate-3" },
    { src: "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/dziewczyny2.jpg", alt: "Nasza ekipa 2", rotate: "rotate-1" },
  ];

  return (
    <section id="o-nas" className="py-20 bg-plan-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display text-plan-purple mb-4"
            style={{ textShadow: '3px 3px 0 #f48120' }}
          >
            JAK TO ROBIMY?
          </motion.h2>
          <p className="text-xl font-bold text-plan-dark max-w-2xl mx-auto">
            Świeże składniki, autorskie sosy i mięso przygotowywane z pasją. Zobacz nasz PLAN na idealny street food!
          </p>
        </div>

        {/* Video Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-fit mx-auto cartoon-border bg-plan-orange p-2 md:p-4 transform rotate-1"
          >
            <div className="rounded-xl flex items-center justify-center border-4 border-plan-dark relative overflow-hidden bg-black">
              <video 
                className="h-[60vh] md:h-[70vh] w-auto object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="https://github.com/kidiee558/PLAN-street-food/raw/refs/heads/main/Wideo%20Kurczak.mp4" type="video/mp4" />
                Twoja przeglądarka nie obsługuje odtwarzacza wideo.
              </video>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-fit mx-auto cartoon-border bg-plan-orange p-2 md:p-4 transform -rotate-1"
          >
            <div className="rounded-xl flex items-center justify-center border-4 border-plan-dark relative overflow-hidden bg-black">
              <video 
                className="h-[60vh] md:h-[70vh] w-auto object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="https://github.com/kidiee558/PLAN-street-food/raw/refs/heads/main/Wideo%20Mi%C4%99sko.mp4" type="video/mp4" />
                Twoja przeglądarka nie obsługuje odtwarzacza wideo.
              </video>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-fit mx-auto cartoon-border bg-plan-orange p-2 md:p-4 transform rotate-2"
          >
            <div className="rounded-xl flex items-center justify-center border-4 border-plan-dark relative overflow-hidden bg-black">
              <video 
                className="h-[60vh] md:h-[70vh] w-auto object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="https://github.com/kidiee558/PLAN-street-food/raw/refs/heads/main/Wideo%20Pity.mp4" type="video/mp4" />
                Twoja przeglądarka nie obsługuje odtwarzacza wideo.
              </video>
            </div>
          </motion.div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center mb-16">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className={`cartoon-border bg-white p-2 transform ${img.rotate} ${idx % 2 === 1 ? 'sm:-mt-8 lg:-mt-12' : ''}`}
            >
              {idx === 1 ? (
                <>
                  <img 
                    src="https://github.com/kidiee558/PLAN-street-food/blob/main/jedzenie5.jpg?raw=true" 
                    alt={img.alt} 
                    className="md:hidden w-full h-64 md:h-72 object-cover rounded-lg border-2 border-plan-dark"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="hidden md:block w-full h-64 md:h-72 object-cover rounded-lg border-2 border-plan-dark"
                    referrerPolicy="no-referrer"
                  />
                </>
              ) : (
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-64 md:h-72 object-cover rounded-lg border-2 border-plan-dark"
                  referrerPolicy="no-referrer"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-12 mt-20">
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display text-plan-purple mb-4 inline-block bg-plan-light px-6 py-2 cartoon-border transform -rotate-2"
          >
            ZAWSZE Z UŚMIECHEM!
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {teamImages.map((img, idx) => (
            <motion.div
              key={`team-${idx}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className={`cartoon-border bg-plan-orange p-2 transform ${img.rotate} ${idx === 1 ? 'md:-mt-8' : ''}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-72 md:h-96 object-cover rounded-lg border-2 border-plan-dark"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        {/* More Button */}
        <div className="mt-16 text-center">
          <motion.a
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block cartoon-border bg-plan-purple text-plan-light font-display text-xl md:text-3xl px-6 py-4 shadow-[6px_6px_0_#f48120]"
          >
            ZOBACZ WIĘCEJ PYSZNOŚCI 📸
          </motion.a>
        </div>
      </div>
    </section>
  );
}
