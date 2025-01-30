// components/ForWho.tsx
import { motion } from "framer-motion";
import { Store, Coffee, Martini, Beer, Cake, ShoppingBag, Building, Sandwich } from "lucide-react";

const businesses = [
  {
    icon: <Martini className="w-8 h-8" />,
    title: "Ресторан",
    description: "Автоматизируйте управление кухней, залом и заказами."
  },
  {
    icon: <Store className="w-8 h-8" />,
    title: "Кафе",
    description: "Контролируйте заказы, персонал и продажи в кафе."
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Кофейня",
    description: "Управляйте продажами напитков и программами лояльности."
  },
  {
    icon: <Beer className="w-8 h-8" />,
    title: "Бар",
    description: "Следите за остатками алкоголя и контролируйте кассу."
  },
  {
    icon: <Cake className="w-8 h-8" />,
    title: "Пекарня",
    description: "Управляйте производством, заказами и продажами."
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "Магазин",
    description: "Контролируйте ассортимент, продажи и аналитику."
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Франшиза",
    description: "Управляйте сетью точек в одном месте."
  },
  {
    icon: <Sandwich className="w-8 h-8" />,
    title: "Фастфуд",
    description: "Оптимизируйте кассовые операции и скорость обслуживания."
  }
];


export function ForWho() {
 return (
   <section id="for-who" className="section">
     <div className="container">
       <div className="section-head">
         <h2 className="section-title">Для кого подходит Poster?</h2>
         <p className="section-text">Решение для бизнеса любого масштаба</p>
       </div>

       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
         {businesses.map((business, index) => (
           <motion.div
             key={business.title}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: index * 0.1 }}
             className="group p-6 rounded-xl border bg-card hover:border-primary/50 transition-colors"
           >
             <div className="flex justify-center mb-4">
               <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                 {business.icon}
               </div>
             </div>
             <h3 className="text-xl font-semibold mb-2">{business.title}</h3>
             <p className="text-muted-foreground">{business.description}</p>
           </motion.div>
         ))}
       </div>
     </div>
   </section>
 );
}