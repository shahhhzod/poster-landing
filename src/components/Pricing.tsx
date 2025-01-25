// src/components/Pricing.tsx
import { useState } from 'react';
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
 {
   name: "Starter",
   subtitle: "Точка с кофе, фудтрак",
   monthlyPrice: 16,
   yearlyPrice: 12,
   features: [
     "50 товаров и тех. карт",
     "Управление меню",
     "Отчетность и аналитика",
     "Складской учет",
     "Кассовые смены",
     "Продажи с телефона",
     "Поддержка 24/7",
   ]
 },
 {
   name: "Mini",
   subtitle: "Кофейня",
   monthlyPrice: 29,
   yearlyPrice: 24,
   features: [
     "100 товаров и тех. карт",
     "Управление меню",
     "Отчетность и аналитика",
     "Складской учет",
     "Кассовые смены",
     "Продажи с телефона",
     "Финансовый учет",
     "Системы лояльности",
     "Управление доставкой",
     "Инвентаризации",
     "Поддержка 24/7",
   ]
 },
 {
   name: "Business",
   subtitle: "Кафе, бар",
   monthlyPrice: 39,
   yearlyPrice: 34,
   features: [
     "300 товаров и тех. карт",
     "Управление меню",
     "Отчетность и аналитика",
     "Складской учет",
     "Кассовые смены",
     "Продажи с телефона",
     "Финансовый учет",
     "Системы лояльности",
     "Управление доставкой",
     "Инвентаризации",
     "Акции",
     "Модификаторы тех. карт",
     "Учет заработной платы",
     "Поддержка 24/7",
   ]
 },
 {
   name: "Pro",
   subtitle: "Ресторан",
   monthlyPrice: 59,
   yearlyPrice: 54,
   features: [
     "1500 товаров и тех. карт",
     "Управление меню",
     "Отчетность и аналитика",
     "Складской учет",
     "Кассовые смены",
     "Продажи с телефона",
     "Финансовый учет",
     "Системы лояльности",
     "Управление доставкой",
     "Инвентаризации",
     "Акции",
     "Модификаторы тех. карт",
     "Учет заработной платы",
     "Бронирование столиков",
     "Расширенные доступы",
     "Акт разбора и переработки",
     "Поддержка 24/7",
   ]
 }
];

export function Pricing() {
 const [isYearly, setIsYearly] = useState(false);

 return (
   <section id="pricing" className="section">
     <div className="container">
       <div className="section-head">
         <h2 className="section-title">Выберите свой тариф</h2>
         <h2 className="section-text"></h2>
        <p className="text-muted-foreground">
            Выберите подходящий тариф для вашего бизнеса. При годовой оплате вы получаете существенную скидку.
        </p>
         <div className="flex justify-center gap-4 mt-8">
           <Button 
             variant={!isYearly ? "default" : "outline"}
             onClick={() => setIsYearly(false)}
           >
             Месячный
           </Button>
           <Button 
             variant={isYearly ? "default" : "outline"}
             onClick={() => setIsYearly(true)}
           >
             Годовой
           </Button>
         </div>
       </div>

       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
         {plans.map((plan, index) => (
           <motion.div
             key={plan.name}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: index * 0.1 }}
             className="rounded-xl p-6 bg-card border hover:border-primary/50 transition-colors"
           >
             <div className="mb-6">
               <h3 className="text-2xl font-bold">{plan.name}</h3>
               <p className="text-muted-foreground">{plan.subtitle}</p>
             </div>
             
             <div className="mb-6">
               <p className="text-3xl font-bold">
                 {isYearly ? plan.yearlyPrice : plan.monthlyPrice} $/мес
               </p>
               <p className="text-sm text-muted-foreground">
                 {isYearly ? "при годовой оплате" : "при месячной оплате"}
               </p>
             </div>

             <Button className="w-full mb-6">Выбрать тариф</Button>

             <ul className="space-y-3">
               {plan.features.map((feature, i) => (
                 <li key={i} className="flex items-center gap-2">
                   <Check className="h-4 w-4 text-primary" />
                   <span className="text-sm">{feature}</span>
                 </li>
               ))}
             </ul>
           </motion.div>
         ))}
       </div>
     </div>
   </section>
 );
}