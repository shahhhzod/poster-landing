// src/components/PosterQR.tsx
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import posterQR from '@/assets/poster-qr.png';

const features = [
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
];

export function PosterQR() {
 return (
   <section className="section overflow-hidden">
     <div className="container">
       <div className="grid lg:grid-cols-2 gap-12 items-center">
         <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
         >
           <h2 className="text-3xl font-bold mb-6 text-left">Poster QR</h2>
           <p className="text-xl text-muted-foreground mb-8">
             настройте онлайн-меню и отзывы по одному QR-коду
           </p>

           <div className="space-y-6 mb-8">
             {features.map((feature, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
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
             Узнать больше о Poster QR
             <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
           </Button>
         </motion.div>

         <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           className="relative"
         >
           <div className="absolute -right-20 top-20 w-72 h-72 rounded-full blur-3xl" />
           <img 
             src={posterQR} 
             alt="Poster QR Menu"
             className="relative z-10 w-full max-w-md mx-auto rounded-lg"
           />
         </motion.div>
       </div>
     </div>
   </section>
 );
}