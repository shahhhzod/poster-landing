import { Button } from "./ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const socials = [
  { icon: <FontAwesomeIcon icon={faYoutube} className="h-5 w-5" />, href: "#", label: "Youtube" },
  { icon: <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />, href: "#", label: "Instagram" },
  { icon: <FontAwesomeIcon icon={faTelegram} className="h-5 w-5" />, href: "#", label: "Telegram" },
  { icon: <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />, href: "#", label: "Whatsapp" },
];

const links = [
 {
   title: "Продукт",
   items: [
     { name: "Возможности", href: "#features" },
     { name: "Тарифы", href: "#pricing" },
     { name: "Интеграции", href: "#integrations" },
     { name: "Обновления", href: "#updates" }
   ]
 },
 {
   title: "Компания",
   items: [
     { name: "О нас", href: "#about" },
     { name: "Клиенты", href: "#clients" },
     { name: "Контакты", href: "#contacts" },
     { name: "Блог", href: "#blog" }
   ]
 },
 {
   title: "Поддержка",
   items: [
     { name: "Центр помощи", href: "#help" },
     { name: "База знаний", href: "#knowledge" },
     { name: "Документация API", href: "#api" },
     { name: "Статус системы", href: "#status" }
   ]
 }
];

export function Footer() {
 return (
   <footer className="bg-background border-t">
     <div className="container">
       <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
         <div className="lg:col-span-2 space-y-6 text-left">
           <a href="/" className="inline-block">
             <span className="text-2xl font-bold">Poster</span>
           </a>
           <p className="text-muted-foreground max-w-sm">
             Комплексное решение для автоматизации вашего бизнеса
           </p>
           <div className="flex gap-3">
             {socials.map((social) => (
               <Button
                 key={social.label}
                 variant="ghost"
                 size="icon"
                 className="hover:bg-primary/10 hover:text-primary"
                 asChild
               >
                 <a href={social.href} aria-label={social.label}>
                   {social.icon}
                 </a>
               </Button>
             ))}
           </div>
         </div>

         {links.map((group) => (
           <div key={group.title} className="space-y-4 text-left">
             <h3 className="font-semibold">{group.title}</h3>
             <ul className="space-y-3">
               {group.items.map((item) => (
                 <li key={item.name}>
                   <a
                     href={item.href}
                     className="text-muted-foreground hover:text-foreground transition-colors"
                   >
                     {item.name}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
         ))}
       </div>

       <div className="py-6 border-t">
         <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
           <p>© 2025 Poster. Все права защищены</p>
           <div className="flex flex-wrap justify-center gap-6">
             <a href="#" className="hover:text-foreground transition-colors">
               Условия использования
             </a>
             <a href="#" className="hover:text-foreground transition-colors">
               Конфиденциальность
             </a>
             <a href="#" className="hover:text-foreground transition-colors">
               Правовая информация
             </a>
           </div>
         </div>
       </div>
     </div>
   </footer>
 );
}