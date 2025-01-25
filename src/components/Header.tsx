// src/components/Header.tsx
import { useState } from 'react';
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from './theme-toggle';
import { scrollToSection } from '@/utils/smoothScroll';

const navItems = [
 { title: "Возможности", href: "#features" },
 { title: "Тарифы", href: "#pricing" },
 { title: "Для кого?", href: "#for-who" },
 { title: "Поддержка", href: "#support" },
 { title: "Контакты", href: "#contacts" },
];

export function Header() {
 const [isOpen, setIsOpen] = useState(false);

 return (
   <motion.header 
     initial={{ y: -100 }}
     animate={{ y: 0 }}
     className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
   >
     <div className="container flex h-16 items-center">
       <a href="/" className="text-2xl font-bold text-foreground">
         Poster
       </a>

       <nav className="hidden md:flex ml-10 gap-8">
        {navItems.map((item) => (
          <a
            key={item.title}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.href.substring(1));
            }}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            {item.title}
          </a>
        ))}
       </nav>

       <div className="ml-auto hidden md:flex items-center gap-4">
         <ThemeToggle />
         <Button variant="outline" size="sm">
           Вход
         </Button>
         <Button 
           className="bg-primary text-primary-foreground hover:bg-primary/90" 
           size="sm"
         >
           Попробовать бесплатно
         </Button>
       </div>

       <Sheet open={isOpen} onOpenChange={setIsOpen}>
 <div className="flex items-center gap-2 ml-auto md:hidden">
   <ThemeToggle />
   <SheetTrigger asChild>
     <Button variant="ghost" size="icon">
       <Menu className="h-5 w-5" />
     </Button>
   </SheetTrigger>
 </div>
 <SheetContent>
   <nav className="flex flex-col gap-4 mt-8">
     {navItems.map((item) => (
       <a
         key={item.title}
         href={item.href}
         onClick={(e) => {
           e.preventDefault();
           scrollToSection(item.href.substring(1));
           setIsOpen(false); // Close sheet after click
         }}
         className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
       >
         {item.title}
       </a>
     ))}
     <div className="flex flex-col gap-2 mt-4">
       <Button variant="outline" size="sm">
         Вход
       </Button>
       <Button 
         className="bg-primary text-primary-foreground hover:bg-primary/90"
         size="sm"
       >
         Попробовать бесплатно
       </Button>
     </div>
   </nav>
 </SheetContent>
</Sheet>
     </div>
   </motion.header>
 );
}