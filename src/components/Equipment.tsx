import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { 
  Tablet, 
  Printer, 
  AppleIcon, 
  MonitorIcon,
} from 'lucide-react';

import posterpos from '@/assets/poster-pos.jpg';

const requirements = [
  {
    system: 'MacOS',
    icon: AppleIcon,
    specs: ['8 ГБ ОЗУ, M1', 'macOS X 13+'],
    downloadLink: 'https://s3.eu-central-1.amazonaws.com/poster-desktop-update/Poster-4.0.4.dmg',
  },
  {
    system: 'iOS',
    icon: AppleIcon,
    specs: ['iPad Air 4', 'iPad 10.2 и с iOS 15+'],
    downloadLink: 'https://apps.apple.com/us/app/poster/id691098784',
  },
  {
    system: 'Android',
    icon: Tablet,
    specs: ['4 Гб ОЗУ', 'Android 11+'],
    downloadLink: 'https://play.google.com/store/apps/details?id=com.joinposter&hl=en',
  },
  {
    system: 'Windows',
    icon: MonitorIcon,
    specs: ['8 Гб ОЗУ', 'Windows 10+'],
    downloadLink: 'https://s3.eu-central-1.amazonaws.com/poster-desktop-update/Poster+Setup+4.0.4.exe',
  },
];


export function Equipment() {
const MotionCard = motion(Card);
  return (
    <section id='equipment' className="py-24">
      <div className="container">
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h2 className="section-title mb-2">Оборудование для работы с Poster</h2>
            <p className="section-text text-muted-foreground">
              Poster — облачная POS-система. Для её работы нужен:
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img 
                src={posterpos}
                alt="POS оборудование Poster" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full z-0" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">

          {[
            {
              title: "Терминал",
              description: "Планшет, телефон или компьютер для терминала официанта",
              icon: Tablet,
            },
            {
              title: "Принтер чеков",
              description: "Для печати чеков и заказов",
              icon: Printer,
            },
            {
              title: "Дополнительно",
              description: "Другое оборудование в зависимости от потребностей вашего бизнеса",
              icon: MonitorIcon,
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-muted rounded-lg p-8 mb-16"
        >
          <div className="flex items-start gap-4 mb-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Уже есть планшет или компьютер?</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Проверьте совместимость с Poster. Откройте ссылку POS.PS на вашем устройстве. 
                Подойдет любой совместимый планшет на iOS/Android или компьютер на Windows/macOS
              </p>
            </div>
          </div>
          <Button asChild className="group">
            <a href="https://pos.ps/" target="_blank" rel="noopener noreferrer">
              Проверить совместимость
              <ExternalLinkIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div> */}

        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="relative"
    >
      <h3 className="section-title mb-8">
        Минимальные требования
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {requirements.map((req, index) => (
          <motion.div
            key={req.system}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
          >
            <MotionCard 
              className="h-full relative overflow-hidden group bg-gradient-to-br from-background to-muted hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {/* Декоративный элемент */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />
              
              <CardHeader className="relative pb-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <req.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {req.system}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="relative">
                <ul className="space-y-3">
                  {req.specs.map((spec, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 + i * 0.1 }}
                      className="flex items-start gap-3 group/item"
                    >
                  
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                        {spec}
                      </span>
                    </motion.li>
                  ))}
                </ul>

            {req.downloadLink && (
                <div className="pt-6 mt-auto">
                  <a
                    href={req.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2.5 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]"
                  >
                    Скачать 
                  </a>
                </div>
            )}
            
              </CardContent>
            </MotionCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
      </div>
    </section>
  );
}

export default Equipment;