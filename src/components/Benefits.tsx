// src/components/Benefits.tsx
import { Settings, Smartphone, Zap, Clock } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
 {
   icon: <Settings className="w-8 h-8" />,
   title: "Простота интеграции",
   description: "Быстрое подключение и настройка без сложных технических знаний"
 },
 {
   icon: <Smartphone className="w-8 h-8" />,
   title: "Удобный интерфейс",
   description: "Интуитивно понятный дизайн для комфортной работы"
 },
 {
   icon: <Zap className="w-8 h-8" />,
   title: "Высокая скорость работы",
   description: "Мгновенная обработка операций и актуализация данных"
 },
 {
   icon: <Clock className="w-8 h-8" />,
   title: "Экономия времени и ресурсов",
   description: "Автоматизация рутинных процессов и оптимизация работы"
 }
];

export function Benefits() {
 return (
   <section className="section">
     <div className="container">
       <div className="section-head">
         <h2 className="section-title">Почему выбирают Poster?</h2>
       </div>

       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
         {benefits.map((benefit, index) => (
           <motion.div
             key={index}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: index * 0.1 }}
             className="text-center p-6"
           >
             <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
               {benefit.icon}
             </div>
             <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
             <p className="text-muted-foreground">{benefit.description}</p>
           </motion.div>
         ))}
       </div>
     </div>
   </section>
 );
}