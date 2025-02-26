// components/CTASection.tsx
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { CheckCircle2 } from "lucide-react";
import ReactGA from "react-ga4";

const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault(); 
  ReactGA.event({
    category: "Button",
    action: "Click",
    label: "Попробовать беслпатно - CTA Секция",
  });

  setTimeout(() => {
    window.open("https://joinposter.com/signup?ref=partner-davlatos", "_blank");
  }, 300); 
};

export function CTASection() {
 return (
   <section className="section bg-primary/5">
     <div className="container">
       <motion.div 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         className="max-w-3xl mx-auto text-center"
       >
         <h2 className="section-title mb-6">
           Начните автоматизировать свой бизнес уже сегодня
         </h2>
         <p className="section-text mb-8">
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

                  <a 
            href="https://joinposter.com/signup?ref=partner-davlatos" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleClick}
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Попробовать бесплатно
            </Button>
          </a>
       </motion.div>
     </div>
   </section>
 );
}