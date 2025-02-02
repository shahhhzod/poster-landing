import { motion } from "framer-motion";
import monkeys from '@/assets/logo/28monkeys.png';
import bundes from '@/assets/logo/bundes.png';
import broburger from '@/assets/logo/bro-burger.jpg';
import point from '@/assets/logo/point.jpg';
import wallstreet from '@/assets/logo/wall-street.jpg';
import dona from '@/assets/logo/dona.jpg';
import romashka from '@/assets/logo/romashka.png';
import theritz from '@/assets/logo/the_ritz.png';

const companies = [
  {
    name: "28monkeys",
    logo: monkeys,
  },
  {
    name: "Bundes bar",
    logo: bundes,
  },
  {
    name: "Bro burger",
    logo: broburger,
  },
  {
    name: "Romashka",
    logo: romashka,
  },
  {
    name: "Point",
    logo: point,
  },
  {
    name: "The Ritz",
    logo: theritz,
  },
  {
    name: "Dona",
    logo: dona,
  },
  {
    name: "Wallstreet Khujand",
    logo: wallstreet,
  }
];

export function TrustedBy() {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2 mb-16"
        >
          <p className="section-title">
            Нам доверяют
          </p>
          <h2 className="section-text">
            Более 100+ компаний используют наши решения
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
          duration: 0.5,
          delay: index * 0.1,
          type: "spring",
          stiffness: 100
              }}
              className="group flex flex-col items-center justify-center gap-4"
            >
              <div className="relative w-32 h-20">
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            className="w-full h-full object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
          />
              </div>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
          {company.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16 flex justify-center items-center gap-4 text-sm text-muted-foreground"
        >
          <span className="block h-[1px] w-8 bg-muted-foreground/30" />
          <p>И многие другие компании по всему миру</p>
          <span className="block h-[1px] w-8 bg-muted-foreground/30" />
        </motion.div>
      </div>
    </section>
  );
}

export default TrustedBy;