import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { CirclePlay } from "lucide-react";
import ReactPlayer from 'react-player';
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import posterMain from '@/assets/poster-main.png';

export function Hero() {
return (
 <section className="section pt-24 pb-8 md:pt-32 md:pb-0">
   <div className="container">
     <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
       <motion.div
         initial={{ opacity: 0, x: -20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5 }}
         className="order-2 lg:order-1 mt-6 lg:mt-0"
       >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-left"
        >
          {Array.from("Управляйте своим бизнесом легко и эффективно с Poster").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: index * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
         <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.5, delay: 0.6 }}
           className="text-muted-foreground text-lg md:text-xl text-left mb-8"
         >
           {Array.from("От POS-терминала до финансового учета — всё, что нужно вашему бизнесу в одной системе").map((char, index) => (
           <motion.span
             key={index}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.1, delay: 0.6 + index * 0.05 }}
           >
             {char}
           </motion.span>
           ))}
         </motion.p>
         <div className="flex flex-wrap gap-4">
           <Button 
             size="lg"
             className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
           >
             Попробовать бесплатно
           </Button>
           <Dialog>
             <DialogTrigger asChild>
               <Button size="lg" variant="outline" className="group w-full sm:w-auto">
                 <CirclePlay className="mr-2" /> Смотреть демо
               </Button>
             </DialogTrigger>
             <DialogContent className='p-0 overflow-hidden max-w-[640px] xl:max-w-[1000px]'> 
               <AspectRatio ratio={16 / 9}>
                 <ReactPlayer 
                   url='https://www.youtube.com/watch?v=qMLx2XNWn3I' 
                   width="100%"
                   height="100%"
                 />
               </AspectRatio>
             </DialogContent>
           </Dialog>
         </div>
       </motion.div>

       <motion.div
         initial={{ opacity: 0, x: 20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5, delay: 0.2 }}
         className="order-1 lg:order-2"
       >
         <div className="mt-8 lg:mt-0 rounded-lg overflow-hidden shadow-xl">
           <img
           src={posterMain} 
           alt="Интерфейс Poster"
           />
         </div>
       </motion.div>
     </div>
   </div>
 </section>
);
}