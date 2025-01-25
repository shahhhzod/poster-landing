import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import { useState, useEffect } from "react";
import posterQR from '@/assets/poster-qr.png';
import posterBOSS from '@/assets/poster-boss.png';
import posterMobile from '@/assets/poster-mobile.png';
import posterKitchen from '@/assets/poster-kitchen.png';

const allFeatures = [
  {
    title: "Poster QR",
    subtitle: "Настройте онлайн-меню и отзывы по одному QR-коду",
    features: [
      {
        title: "Мгновенный QR-код с готовым меню",
        description: "Быстрый доступ к вашему меню для клиентов"
      },
      {
        title: "Сбор отзывов клиентов",
        description: "Автоматический сбор и анализ обратной связи"
      },
      {
        title: "Меню и цены автоматически синхронизируются с Poster",
        description: "Актуальные данные без ручного обновления"
      }
    ],
    image: posterQR
  },
  {
    title: "Poster BOSS",
    subtitle: "Управляйте бизнесом из любой точки мира",
    features: [
      {
        title: "Мониторинг показателей в реальном времени",
        description: "Отслеживайте выручку, средний чек и другие метрики"
      },
      {
        title: "Управление несколькими точками",
        description: "Единый центр управления всей сетью заведений"
      },
      {
        title: "Детальная аналитика",
        description: "Отчеты по продажам, персоналу и финансам"
      }
    ],
    image: posterBOSS
  },
  {
    title: "Мобильный официант",
    subtitle: "Комплексный POS-регистратор на смартфоне официанта",
    features: [
      {
        title: "Прием заказов на смартфоне не отходя от клиента",
        description: "Ускорьте обслуживание, принимая заказы прямо за столиком."
      },
      {
        title: "Доступно на IOS и Android",
        description: "Используйте наше приложение на любом устройстве, независимо от платформы."
      },
      {
        title: "Отправка бегунков с заказа сразу на кухню",
        description: "Оптимизируйте процесс: заказы мгновенно попадают на кухню."
      }
    ],    
    image: posterMobile
  },
  {
    title: "Kitchen Kit",
    subtitle: "Электронные бегунки для быстрой связи кухни с официантами",
    features: [
      {
        title: "Очередность приготовления блюд в приложении",
        description: "Удобное отображение порядка готовки для повышения эффективности."
      },
      {
        title: "Отказ от бумажных бегунков",
        description: "Экономьте ресурсы и ускоряйте работу с цифровыми заказами."
      },
      {
        title: "Уведомление для официантов",
        description: "Оперативные оповещения для своевременной подачи блюд."
      }
    ],    
    image: posterKitchen 
  }
];

export function PosterFeatures() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const INTERVAL = 7000; // 7 секунд на каждый блок

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allFeatures.length);
      setProgress(0);
    }, INTERVAL);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (100 / (INTERVAL / 100));
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  const currentFeature = allFeatures[currentIndex];

  return (
    <section className="section overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-left">{currentFeature.title}</h2>
              <p className="text-xl text-muted-foreground mb-8 text-left">
                {currentFeature.subtitle}
              </p>

              <div className="space-y-6 mb-8">
                {currentFeature.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex gap-4"
                  >
                    <div className="bg-primary/10 p-4 rounded-full flex items-center justify-center w-14 h-14 shadow-md">
                      <ArrowDownRight size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 text-left">{feature.title}</h3>
                      <p className="text-muted-foreground text-left">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button className="group">
                Узнать больше
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute -right-20 top-20 w-72 h-72 rounded-full blur-3xl" />
            <img 
              src={currentFeature.image} 
              alt={currentFeature.title}
              className="relative z-10 w-full max-w-md mx-auto rounded-lg"
            />
          </motion.div>
        </div>

        {/* Progress indicator */}
        <div className="mt-12 flex gap-4 justify-center">
          {allFeatures.map((_, index) => (
            <div key={index} className="relative h-1 w-24 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-primary rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: index === currentIndex ? `${progress}%` : "0%" }}
                transition={{ duration: 0.1 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}