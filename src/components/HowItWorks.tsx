import { motion } from "framer-motion";
import ReactPlayer from "react-player";

const steps = [
 {
   number: "01",
   title: "Подключите систему Poster к вашему бизнесу",
   description: "Быстрая интеграция с вашим оборудованием"
 },
 {
   number: "02",
   title: "Настройте меню, склад и финансовые потоки", 
   description: "Простая настройка всех компонентов системы"
 },
 {
   number: "03",
   title: "Управляйте бизнесом из любой точки мира",
   description: "Доступ к системе с любого устройства 24/7"
 }
];

export function HowItWorks() {
 return (
   <section className="section bg-muted/30">
     <div className="container">
       <div className="section-head">
         <h2 className="section-title">Как это работает?</h2>
         <p className="section-text">Запустите автоматизацию бизнеса за три простых шага</p>
       </div>

       <div className="grid lg:grid-cols-2 gap-8 items-center">
         <div className="space-y-8">
           {steps.map((step, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.2 }}
               className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 rounded-lg hover:bg-background/50 transition-colors items-center sm:items-start"
             >
               <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                 <span className="text-2xl font-bold text-primary">{step.number}</span>
               </div>
               <div>
                 <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                 <p className="text-muted-foreground">{step.description}</p>
               </div>
             </motion.div>
           ))}
         </div>

         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="aspect-video bg-background rounded-lg overflow-hidden shadow-lg"
         >
           <ReactPlayer
             url="https://youtu.be/kRuqyhz7b_o?si=2QLZACCT8m6RbfP_"
             width="100%"
             height="100%"
             controls={true}
             light={false} // отключаем превью
             playing={false} // видео не будет автоматически воспроизводиться
           />
         </motion.div>
       </div>
     </div>
   </section>
 );
}