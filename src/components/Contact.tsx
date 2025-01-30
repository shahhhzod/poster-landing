// components/Contact.tsx
import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";


export function Contact() {
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    };

 return (
   <section id="contacts" className="section">
     <div className="container">
       <div className="grid lg:grid-cols-2 gap-12 text-left">
         <div>
           <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
           <p className="text-muted-foreground mb-8">
             Готовы ответить на ваши вопросы и помочь с выбором решения
           </p>

           <div className="space-y-6 text-left">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                 <Phone className="w-6 h-6" />
               </div>
               <div>
                 <p className="font-medium">Телефон</p>
                 <a href="tel:+992985000000" className="text-muted-foreground hover:text-primary">
                   +992 (985) 00-00-00
                 </a>
               </div>
             </div>

             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                 <Mail className="w-6 h-6" />
               </div>
               <div>
                 <p className="font-medium">Email</p>
                 <a href="mailto:info@poster.tj" className="text-muted-foreground hover:text-primary">
                   info@poster.tj
                 </a>
               </div>
             </div>

             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                 <MapPin className="w-6 h-6" />
               </div>
               <div>
                 <p className="font-medium">Адрес</p>
                 <p className="text-muted-foreground">
                   Душанбе, ул. Примерная, 123
                 </p>
               </div>
             </div>
           </div>
         </div>

         <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-card rounded-lg border text-left">
           <div className="grid sm:grid-cols-2 gap-4">
             <div>
               <label className="text-sm font-medium">Имя</label>
               <Input placeholder="Введите имя" />
             </div>
             <div>
               <label className="text-sm font-medium">Email</label>
               <Input type="email" placeholder="Введите email" />
             </div>
           </div>
           <div>
             <label className="text-sm font-medium">Тема</label>
             <Input placeholder="Тема сообщения" />
           </div>
           <div>
             <label className="text-sm font-medium">Сообщение</label>
             <Textarea placeholder="Ваше сообщение" className="min-h-[150px]" />
           </div>
           <Button className="w-full">Отправить сообщение</Button>
         </form>
       </div>
     </div>

     <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
       <DialogContent className="max-w-md">
         <DialogHeader>
           <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
             <CheckCircle className="w-6 h-6 text-primary" />
           </div>
           <DialogTitle className="text-center">Сообщение отправлено</DialogTitle>
           <p className="text-center text-muted-foreground">
             Спасибо за обращение! Мы свяжемся с вами в ближайшее время.
           </p>
         </DialogHeader>
       </DialogContent>
     </Dialog>
   </section>
 );
}