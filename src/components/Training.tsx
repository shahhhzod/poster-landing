import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { VideoIcon, PhoneCall, UserCog, ArrowRight, HeadphonesIcon, MessageSquareText, Rocket } from "lucide-react";
import { DemoForm } from "./ModernModal";

const services = [
 {
   icon: <VideoIcon className="w-10 h-10 text-primary" />,
   title: "Обучение",
   description: "Подробные видеоуроки и документация"
 },
 {
   icon: <PhoneCall className="w-10 h-10 text-primary" />,
   title: "Поддержка 24/7",
   description: "Оперативные ответы на все вопросы"
 },
 {
   icon: <UserCog className="w-10 h-10 text-primary" />, 
   title: "Консультации",
   description: "Персональная помощь в настройке"
 },
  {
    icon: <HeadphonesIcon className="w-10 h-10 text-primary" />,
    title: "Профессиональная поддержка",
    description: "Опытные специалисты готовы помочь с любыми вопросами"
  },
  {
    icon: <MessageSquareText className="w-10 h-10 text-primary" />,
    title: "Мультиканальность",
    description: "Поддержка через чат, email и телефон"
  },
  {
    icon: <Rocket className="w-10 h-10 text-primary" />,
    title: "Без ограничений",
    description: "Неограниченное количество обращений бесплатно"
  }
];

export function Training() {
 return (
  <section id="support" className="section bg-muted/30">
  <div className="container px-4 sm:px-6">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto text-center"
    >
      <h2 className="section-title mb-4">
        Мы поможем вам начать
      </h2>
      <p className="section-text mb-12 max-w-2xl mx-auto">
        Пошаговое обучение и круглосуточная поддержка для вашего успеха
      </p>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 sm:p-8 rounded-xl bg-background hover:bg-primary/5 shadow-md hover:shadow-lg transition-all"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-muted-foreground text-sm sm:text-base">{service.description}</p>
          </motion.div>
        ))}
      </div>
      <DemoForm 
  trigger={
      <Button 
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-primary/90 group w-full sm:w-auto text-sm sm:text-lg py-6 px-8"
      >
        Записаться на демонстрацию
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Button>
        }
/>
    </motion.div>
  </div>
</section>
 );
}