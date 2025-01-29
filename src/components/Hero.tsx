import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CirclePlay, ChevronLeft, ChevronRight } from "lucide-react";
import ReactPlayer from 'react-player';
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState, useEffect } from "react";
import posterMain from '@/assets/poster-main.png';
import posterdemo2 from '@/assets/poster-demo-2.png';
import posterdemo3 from '@/assets/poster-demo-3.png';

const images = [
  {
    src: posterMain,
    alt: "Интерфейс Poster"
  },
  {
  src: posterdemo2,
  alt: "Интерфейс Poster"
  },
  {
    src: posterdemo3,
    alt: "Интерфейс Poster"
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const INTERVAL = 7000;
  const [autoPlay, setAutoPlay] = useState(true);
  const [autoPlayTimer, setAutoPlayTimer] = useState<NodeJS.Timeout | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = images.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image.src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
  
      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };
  
    loadImages();
  }, []);

  const ImageSkeleton = () => (
    <div className="w-full h-full animate-pulse bg-gray-200 rounded-lg aspect-[16/9]" />
  );

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    let progressInterval: NodeJS.Timeout | undefined;
    
    if (autoPlay) {
      // Основной интервал для смены слайдов
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setProgress(0);
      }, INTERVAL);
  
      // Интервал для прогресс-бара
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + (100 / (INTERVAL / 100));
        });
      }, 100);
    }
  
    // Очистка интервалов
    return () => {
      if (interval) clearInterval(interval);
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [autoPlay, images.length, INTERVAL]); 

 // Обновите функции handlePrevious и handleNext
const handlePrevious = () => {
  // Очищаем предыдущий таймер если он есть
  if (autoPlayTimer) clearTimeout(autoPlayTimer);
  
  setAutoPlay(false);
  setProgress(0);
  setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  
  // Устанавливаем новый таймер для возобновления автопроигрывания
  const timer = setTimeout(() => {
    setAutoPlay(true);
  }, 3000); // Возобновляем через 3 секунды после последнего ручного переключения
  
  setAutoPlayTimer(timer);
};

const handleNext = () => {
  if (autoPlayTimer) clearTimeout(autoPlayTimer);
  
  setAutoPlay(false);
  setProgress(0);
  setCurrentIndex((prev) => (prev + 1) % images.length);
  
  const timer = setTimeout(() => {
    setAutoPlay(true);
  }, 3000);
  
  setAutoPlayTimer(timer);
};

// Добавьте очистку таймера при размонтировании компонента
useEffect(() => {
  return () => {
    if (autoPlayTimer) clearTimeout(autoPlayTimer);
  };
}, [autoPlayTimer]);

  return (
    <section className="section pt-24 pb-12 md:pt-32 md:pb-0">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 mt-6 lg:mt-0"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-left"
            >
              {Array.from("Управляйте своим бизнесом легко и эффективно с Poster").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: index * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-muted-foreground text-lg md:text-xl text-left mb-8"
            >
              {Array.from("От POS-терминала до финансового учета — всё, что нужно вашему бизнесу в одной системе").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.6 + index * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
              >
                Попробовать бесплатно
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="group w-full sm:w-auto">
                    <CirclePlay className="mr-2" /> Смотреть демо
                  </Button>
                </DialogTrigger>
                <DialogContent className='p-0 overflow-hidden max-w-[640px] xl:max-w-[1000px]'> 
                  <AspectRatio ratio={16 / 9}>
                    <ReactPlayer 
                      url='https://www.youtube.com/watch?v=qMLx2XNWn3I' 
                      width="100%"
                      height="100%"
                    />
                  </AspectRatio>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2 relative">
  <AnimatePresence mode="wait">
    {!imagesLoaded ? (
      <motion.div
        key="skeleton"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="mt-8 lg:mt-0 rounded-lg overflow-hidden shadow-xl"
      >
        <ImageSkeleton />
      </motion.div>
    ) : (
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="mt-8 lg:mt-0 rounded-lg overflow-hidden shadow-xl"
      >
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-auto"
          loading="eager"
          fetchPriority="high"
          style={{ opacity: imagesLoaded ? 1 : 0 }}
        />
      </motion.div>
    )}
  </AnimatePresence>

  {/* Кнопки навигации показываем только когда изображения загружены */}
  {imagesLoaded && (
    <>
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </>
  )}

  {/* Progress indicator показываем только когда изображения загружены */}
  {imagesLoaded && (
    <div className="absolute -bottom-8 left-0 right-0 flex gap-4 justify-center">
      {images.map((_, index) => (
        <div key={index} className="h-1 w-16 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: index === currentIndex ? `${progress}%` : "0%" }}
            transition={{ duration: 0.1 }}
          />
        </div>
      ))}
    </div>
  )}
</div>
        </div>
      </div>
    </section>
  );
}