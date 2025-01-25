// components/CTASection.tsx
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { CheckCircle2 } from "lucide-react";

export function CTASection() {
 return (
   <section className="section bg-primary/5">
     <div className="container">
       <motion.div 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         className="max-w-3xl mx-auto text-center"
       >
         <h2 className="text-2xl md:text-4xl font-bold mb-6">
           Начните автоматизировать свой бизнес уже сегодня
         </h2>
         <p className="text-base md:text-xl text-muted-foreground mb-8">
           Первые 15 дней бесплатно. Подключайтесь к более чем 50,000 довольных клиентов
         </p>
         
         <div className="flex flex-wrap justify-center gap-4 mb-8">
           <div className="flex items-center gap-2">
           <CheckCircle2 className="text-primary h-5 w-5" />
           <span className="text-sm md:text-base">Без ограничений функционала</span>
           </div>
           <div className="flex items-center gap-2">
           <CheckCircle2 className="text-primary h-5 w-5" />
           <span className="text-sm md:text-base">Бесплатная настройка</span>
           </div>
           <div className="flex items-center gap-2">
           <CheckCircle2 className="text-primary h-5 w-5" />
           <span className="text-sm md:text-base">Поддержка 24/7</span>
           </div>
         </div>

         <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
           Попробовать бесплатно
         </Button>
       </motion.div>
     </div>
   </section>
 );
}