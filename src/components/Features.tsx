import { Monitor, Menu, Package, FileSpreadsheet, ClipboardCheck, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ReactPlayer from 'react-player/youtube';

const features = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Отчеты и аналитика",
    description: "Подробная аналитика продаж и финансовых показателей",
    videoUrl: "https://youtu.be/14hijUgosMo"
  },
  {
    icon: <Menu className="w-6 h-6" />,
    title: "Управление меню",
    description: "Удобное создание и редактирование меню",
    videoUrl: "https://youtu.be/U6eGgYozhHk"
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Управление складом",
    description: "Контроль остатков и движения товаров",
    videoUrl: "https://youtu.be/sZt9jkDeTQk"
  },
  {
    icon: <FileSpreadsheet className="w-6 h-6" />,
    title: "Финансовый учет",
    description: "Полный контроль над финансами бизнеса",
    videoUrl: "https://youtu.be/YbIuxyaW314"
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: "Инвентаризация",
    description: "Простой учет товаров и материалов",
    videoUrl: "https://youtu.be/VRPoPevYjro"
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Управление доставкой",
    description: "Организация службы доставки",
    videoUrl: "https://youtu.be/jydnVJgAei4"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const VideoDialog = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <DialogContent className="sm:max-w-4xl">
      <div className="aspect-video">
        <ReactPlayer 
          url={videoUrl}
          width="100%"
          height="100%"
          controls
          playing
        />
      </div>
    </DialogContent>
  );
};

export function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">
            Все возможности для управления вашим бизнесом
          </h2>
          <p className="section-text">
            Poster помогает автоматизировать процессы и оптимизировать бизнес-операции
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-lg border bg-card hover:border-primary/50 transition-colors flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <div className="mt-auto">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors">
                      Посмотреть демо
                    </button>
                  </DialogTrigger>
                  <VideoDialog videoUrl={feature.videoUrl} />
                </Dialog>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Features;