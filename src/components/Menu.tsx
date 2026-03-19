import { motion } from 'motion/react';

const menuData = {
  kebabs: [
    { name: 'Mały', weight: '140 g', chicken: 20, pork: 24 },
    { name: 'Średni', weight: '180 g', chicken: 25, pork: 29 },
    { name: 'Duży', weight: '200 g', chicken: 30, pork: 34 },
    { name: 'Bułka średnia', weight: '180 g', chicken: 25, pork: 29 },
    { name: 'Bułka gigant', weight: '220 g', chicken: 31, pork: 35 },
  ],
  burgers: [
    { name: 'Kidosmini', price: 18, desc: 'bułeczka z wieprzowiną / cheddar / sos łagodny' },
    { name: 'Bacon', price: 32, desc: 'wieprzowina / podwójny bekon / piklowana kapusta / prażona cebulka / sos bbq' },
    { name: 'Dominek', price: 32, desc: 'grillowany kurczak / bekon / cheddar / czerwona cebula / pomidor / sos sambal' },
    { name: 'Lokator', price: 31, desc: 'wieprzowina / cheddar / piklowany ogórek / sosy housowe / mix sałat' },
    { name: 'Spice', price: 35, desc: 'wieprzowina / spianata / bekon / cheddar / jalapeño / sos spice jalapeño' },
  ],
  dishes: [
    { name: 'Średni', weight: '180 g', chicken: 29, pork: 33 },
    { name: 'Gigant', weight: '220 g', chicken: 32, pork: 36 },
  ],
  salads: [
    { name: 'Grillowany kurczak', price: 36, desc: 'sałaty / bekon / pomidor / ogórek / sos housowy / grillowana pita z cheddarem' },
    { name: 'Grillowana wieprzowina', price: 37, desc: 'sałaty / bekon / ogórek piklowany / jalapeño / cebulka czerwona / sos housowy / grillowana pita z cheddarem' },
  ],
  extras: [
    { name: 'Frytki', price: 8 },
    { name: 'Colesław', price: 6 },
    { name: 'Cheddar', price: 4 },
    { name: 'Bekon', price: 4 },
    { name: 'Jalapeño', price: 2 },
  ],
  sauces: [
    { name: 'Spice jalapeño', price: 3 },
    { name: 'Tzatziki', price: 3 },
    { name: 'Limonka z kolendrą', price: 3 },
  ],
  drinks: [
    { name: 'Lemoniada 0,4 l', price: 12 },
    { name: 'Lemoniada 1 l', price: 30 },
    { name: 'Pepsi / Mirinda / 7up / Lipton 0,5 l', price: 9 },
    { name: 'Pepsi / Mirinda / 7up / Lipton 0,85 l', price: 15 },
  ],
  beers: [
    { name: 'Perła lana 0,3 l', price: 8 },
    { name: 'Perła lana 0,5 l', price: 10 },
    { name: 'Perła 0%', price: 11 },
    { name: 'Okocim piwo smakowe 0%', price: 12 },
    { name: 'Dziki wschód (kraftowe) 0,5 l', price: 20 },
  ],
  coffeeTea: [
    { name: 'Espresso', price: 8 },
    { name: 'Espresso doppio', price: 10 },
    { name: 'Americano', price: 11 },
    { name: 'Cappuccino', price: 11 },
    { name: 'Flat White', price: 13 },
    { name: 'LateMacchiato', price: 14 },
    { name: 'Herbaty 0,4l (czarna/zielona/Earl Grey/jaśminowa)', price: 14 },
    { name: 'PLAN na wiosnę', price: 20, desc: 'czarna herbata / syrop wiśniowy / wanilia / rozmaryn / płatki wiśni' },
    { name: 'PLAN na pomarańcze', price: 20, desc: 'puree pomarańczowe / miód lipowy / sok z cytryny / cynamon / imbir' },
  ]
};

const SectionHeader = ({ title, subtitle, rotate = "-rotate-2", titleClass = "text-4xl md:text-5xl" }: { title: string, subtitle?: string, rotate?: string, titleClass?: string }) => (
  <div className={`mb-8 flex flex-col items-center transform ${rotate}`}>
    <h2 className={`${titleClass} font-display text-plan-orange bg-plan-light px-6 py-2 border-4 border-plan-dark shadow-[4px_4px_0_#2d1642] rounded-xl text-center`}>
      {title}
    </h2>
    {subtitle && <p className="text-plan-light font-bold mt-2 text-center text-sm md:text-base">{subtitle}</p>}
  </div>
);

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-plan-purple text-plan-light relative">
      {/* Decorative squiggles */}
      <svg className="absolute top-10 left-10 w-24 h-24 text-plan-orange opacity-50" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
        <path d="M10,50 Q25,10 50,50 T90,50" />
      </svg>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* KEBABS & DISHES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Kebabs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cartoon-border bg-plan-dark/40 p-6 md:p-8"
          >
            <SectionHeader title="PLAN KEBAB" subtitle="pieczywo do wyboru: lawasz lub pita!" />
            
            <div className="grid grid-cols-3 gap-4 mb-4 font-display text-lg text-plan-orange border-b-2 border-plan-light/20 pb-2 items-center">
              <div></div>
              <div className="text-center">kurczak</div>
              <div className="text-center leading-tight">karkówka<br/>z bekonem<br/><span className="text-xs text-plan-light font-body">mięso mieszane</span></div>
            </div>
            
            <div className="space-y-4">
              {menuData.kebabs.map((item, idx) => (
                <div key={idx} className="grid grid-cols-3 gap-4 items-center">
                  <div>
                    <div className="font-display text-xl text-plan-orange">{item.name}</div>
                    <div className="text-xs font-bold opacity-70">{item.weight}</div>
                  </div>
                  <div className="text-center font-bold text-xl">{item.chicken} pln</div>
                  <div className="text-center font-bold text-xl">{item.pork} pln</div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-plan-orange text-plan-dark font-bold p-3 rounded-lg text-center transform rotate-1 border-2 border-plan-dark">
              weekendowe krafty + 5 pln! [ o szczegóły zapytaj obsługę ]
            </div>
          </motion.div>

          {/* Dishes & Salads */}
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="cartoon-border bg-plan-dark/40 p-6 md:p-8"
            >
            <SectionHeader title="DANIE" subtitle="mięso / frytki julienne / sałatka z warzyw sezonowych / sos sambal / sos housowy" rotate="rotate-2" />
              
              <div className="grid grid-cols-3 gap-4 mb-4 font-display text-lg text-plan-orange border-b-2 border-plan-light/20 pb-2 items-center">
                <div></div>
                <div className="text-center">kurczak</div>
                <div className="text-center leading-tight">karkówka<br/>z bekonem</div>
              </div>
              
              <div className="space-y-4">
                {menuData.dishes.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-3 gap-4 items-center">
                    <div>
                      <div className="font-display text-xl text-plan-orange">{item.name}</div>
                      <div className="text-xs font-bold opacity-70">{item.weight}</div>
                    </div>
                    <div className="text-center font-bold text-xl">{item.chicken} pln</div>
                    <div className="text-center font-bold text-xl">{item.pork} pln</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="cartoon-border bg-plan-dark/40 p-6 md:p-8"
            >
            <SectionHeader title="SAŁATKI Z PLANU" rotate="-rotate-1" titleClass="text-3xl md:text-5xl" />
              <div className="space-y-6">
                {menuData.salads.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-display text-2xl text-plan-orange">{item.name}</h3>
                      <span className="font-bold text-xl whitespace-nowrap ml-4">{item.price} pln</span>
                    </div>
                    <p className="text-sm font-bold opacity-80 leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* BURGERS */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cartoon-border bg-plan-dark/40 p-4 sm:p-6 md:p-8 mb-16 relative mt-12 md:mt-0"
        >
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:-top-8 md:-left-8 md:-rotate-6 z-10">
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Burger" className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-4 border-plan-orange" referrerPolicy="no-referrer" />
          </div>
          <div className="pt-10 md:pt-0">
            <SectionHeader title="SMASHBURGERY" subtitle="wieprzowe 200g" rotate="rotate-1" titleClass="text-2xl sm:text-4xl md:text-5xl relative z-20" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuData.burgers.map((item, idx) => (
              <div key={idx} className="bg-white/5 p-4 rounded-xl">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-2xl text-plan-orange">{item.name}</h3>
                  <span className="font-bold text-xl text-plan-light">{item.price} pln</span>
                </div>
                <p className="text-sm font-bold opacity-80 leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="font-display text-xl md:text-2xl text-plan-light inline-block border-b-4 border-plan-orange pb-2">
              Hej, a może zjesz go z frytkami julienne i sałatką colesław za 9 pln?
            </p>
          </div>
        </motion.div>

        {/* EXTRAS & DRINKS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Dodatki & Sosy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cartoon-border bg-plan-dark/40 p-6"
          >
            <SectionHeader title="[ DODATKI ]" rotate="-rotate-3" titleClass="text-2xl sm:text-3xl md:text-4xl whitespace-nowrap" />
            <ul className="space-y-2 mb-8 font-display text-xl text-plan-orange">
              {menuData.extras.map((item, idx) => (
                <li key={idx} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="text-plan-light">{item.price} pln</span>
                </li>
              ))}
            </ul>

            <SectionHeader title="WIĘĘĘĘCEJ SOSU" subtitle="3 pln" rotate="rotate-2" titleClass="text-xl sm:text-2xl md:text-3xl" />
            <ul className="space-y-1 font-bold text-lg text-plan-orange">
              {menuData.sauces.map((item, idx) => (
                <li key={idx}>{item.name}</li>
              ))}
            </ul>
          </motion.div>

          {/* Napoje */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cartoon-border bg-plan-dark/40 p-6 md:col-span-2"
          >
            <SectionHeader title="NAPOJE" rotate="rotate-1" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <h3 className="font-display text-2xl text-plan-orange mb-2">Lemoniada</h3>
                  <p className="font-bold text-lg">0,4 l / 12 pln &nbsp;&nbsp; 1 l / 30 pln</p>
                </div>
                <div className="mb-6">
                  <h3 className="font-display text-2xl text-plan-orange mb-2 leading-tight">Pepsi / Mirinda / 7up / Lipton</h3>
                  <p className="font-bold text-lg">0,5 l / 9 pln &nbsp;&nbsp; 0,85 l / 15 pln</p>
                </div>
                <div className="mb-6">
                  <h3 className="font-display text-2xl text-plan-orange mb-2">Piwa</h3>
                  <ul className="space-y-1 font-bold">
                    <li>Perła lana 0,3 l / 8 pln &nbsp; 0,5 l / 10 pln</li>
                    <li>Perła 0% 11 pln</li>
                    <li>Okocim piwo smakowe 0% 12 pln</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-plan-orange mb-2">Piwa kraftowe*</h3>
                  <p className="font-bold">Dziki wschód 0,5 l / 20 pln</p>
                  <p className="text-xs opacity-70 mt-1">*inne smaki? Zapytaj obsługę!</p>
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <h3 className="font-display text-2xl text-plan-orange mb-2">Kawy</h3>
                  <ul className="space-y-1 font-bold">
                    <li>Espresso 8 pln</li>
                    <li>Espresso doppio 10 pln</li>
                    <li>Americano 11 pln</li>
                    <li>Cappuccino 11 pln</li>
                    <li>Flat White 13 pln</li>
                    <li>LateMacchiato 14 pln</li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="font-display text-2xl text-plan-orange mb-2">Herbaty 0,4l / 14 pln</h3>
                  <p className="font-bold text-sm">czarna / zielona / Earl Grey / jaśminowa</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-plan-light text-plan-dark p-3 rounded-lg border-2 border-plan-orange transform -rotate-1">
                    <h4 className="font-display text-xl text-plan-orange">PLAN na wiosnę 20 pln</h4>
                    <p className="text-xs font-bold leading-tight">czarna herbata / syrop wiśniowy / wanilia / rozmaryn / płatki wiśni</p>
                  </div>
                  <div className="bg-plan-light text-plan-dark p-3 rounded-lg border-2 border-plan-orange transform rotate-1">
                    <h4 className="font-display text-xl text-plan-orange">PLAN na pomarańcze 20 pln</h4>
                    <p className="text-xs font-bold leading-tight">puree pomarańczowe / miód lipowy / sok z cytryny / cynamon / imbir</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
