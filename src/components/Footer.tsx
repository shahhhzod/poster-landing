import { Button } from "./ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const socials = [
  { icon: <FontAwesomeIcon icon={faYoutube} className="h-5 w-5" />, href: "https://www.youtube.com/@PosterPosAsia", label: "Youtube" },
  { icon: <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />, href: "https://www.instagram.com/postertajikistan/", label: "Instagram" },
  { icon: <FontAwesomeIcon icon={faTelegram} className="h-5 w-5" />, href: "#", label: "Telegram" },
  { icon: <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />, href: "#", label: "Whatsapp" },
];

const links = [
 {
   title: "Продукт",
   items: [
     { name: "Тур по продукту", href: "https://joinposter.com/tour/terminal" },
     { name: "Тарифы", href: "#pricing" },
     { name: "Интеграции", href: "https://joinposter.com/applications" },
   ]
 },
 {
   title: "Компания",
   items: [
     { name: "О нас", href: "https://joinposter.com/about" },
     { name: "Контакты", href: "#contacts" },
     { name: "Блог", href: "https://joinposter.com/blog" }
   ]
 },
 {
   title: "Обучение",
   items: [
     { name: "База знаний", href: "https://support.joinposter.com/ru/?_gl=1*1w8emsp*_gcl_au*ODY2MjEyMTI2LjE3Mzc3NDAyODQ." },
     { name: "Документация API", target: "_blank", rel: "noopener noreferrer", href: "https://dev.joinposter.com/docs/v3/start/index" },
     { name: "Полезные материалы", href: "https://joinposter.com/useful-materials" }
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
                 <a 
                   href={social.href} 
                   aria-label={social.label} 
                   target="_blank" 
                   rel="noopener noreferrer"
                 >
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
                     target={item.href.startsWith('#') ? undefined : "_blank"}
                     rel={item.href.startsWith('#') ? undefined : "noopener noreferrer"}
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
             <a href="https://joinposter.com/terms" target="_blank" className="hover:text-foreground transition-colors">
               Соглашение
             </a>
             <a href="https://joinposter.com/privacy" target="_blank" className="hover:text-foreground transition-colors">
               Конфиденциальность
             </a>
           </div>
         </div>
       </div>
     </div>
   </footer>
 );
}