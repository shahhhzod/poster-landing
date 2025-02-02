// components/FAQ.tsx
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
   } from "@/components/ui/accordion";
   import { motion } from "framer-motion";
   
   const faqs = [
    {
      question: "Как начать пользоваться Poster?",
      answer: "Зарегистрируйтесь, получите бесплатный пробный период на 15 дней. Наши специалисты помогут с настройкой и обучат персонал."
    },
    {
      question: "Какое оборудование требуется?",
      answer: "Poster работает на любых устройствах - компьютерах, планшетах, смартфонах. Мы также поможем подобрать и настроить необходимое оборудование."
    },
    {
      question: "Сколько стоит Poster?",
      answer: "Стоимость зависит от выбранного тарифа. Доступны планы от 176 сомони в месяц. Все тарифы включают техподдержку 24/7."
    },
    {
      question: "Можно ли перенести данные из другой системы?",
      answer: "Да, мы поможем перенести все ваши данные из любой другой системы автоматизации бесплатно."
    },
    {
      question: "Как работает техническая поддержка?",
      answer: "Поддержка доступна 24/7 через чат, email и телефон. Среднее время ответа - 15 минут."
    }
   ];
   
   export function FAQ() {
    return (
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Часто задаваемые вопросы</h2>
            <p className="section-text">Ответы на популярные вопросы о Poster</p>
          </div>
   
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    );
   }