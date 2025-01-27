import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { Play } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";


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
 const [isPlaying, setIsPlaying] = useState(false);

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
     className="aspect-video bg-background rounded-lg overflow-hidden shadow-lg relative"
   >
     {!isPlaying ? (
       <>
         {/* <img 
           src="/video-thumbnail.jpg" 
           alt="Видео превью"
           className="w-full h-full object-cover"
         /> */}
         <Button 
           variant="secondary" 
           size="lg"
           onClick={() => setIsPlaying(true)}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
         >
           <Play className="h-4 w-4" />
         </Button>
       </>
     ) : (
       <ReactPlayer
         url="https://youtu.be/kRuqyhz7b_o?si=2QLZACCT8m6RbfP_"
         width="100%"
         height="100%"
         playing
         controls
       />
     )}
   </motion.div>
       </div>
     </div>
   </section>
 );
}