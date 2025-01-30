// src/components/Features.tsx
import { Monitor, Menu, Package, FileSpreadsheet, ClipboardCheck, CalendarRange, Truck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
 {
   icon: <Monitor className="w-6 h-6" />,
   title: "Отчеты и аналитика",
   description: "Подробная аналитика продаж и финансовых показателей"
 },
 {
   icon: <Menu className="w-6 h-6" />,
   title: "Управление меню",
   description: "Удобное создание и редактирование меню"
 },
 {
   icon: <Package className="w-6 h-6" />,
   title: "Управление складом",
   description: "Контроль остатков и движения товаров"
 },
 {
   icon: <FileSpreadsheet className="w-6 h-6" />,
   title: "Финансовый учет",
   description: "Полный контроль над финансами бизнеса"
 },
 {
   icon: <ClipboardCheck className="w-6 h-6" />,
   title: "Инвентаризация",
   description: "Простой учет товаров и материалов"
 },
 {
   icon: <Truck className="w-6 h-6" />,
   title: "Управление доставкой",
   description: "Организация службы доставки"
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
             className="p-6 rounded-lg border bg-card hover:border-primary/50 transition-colors"
           >
             <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto">
               {feature.icon}
             </div>
             <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
             <p className="text-muted-foreground">{feature.description}</p>
           </motion.div>
         ))}
       </motion.div>
     </div>
   </section>
 );
}