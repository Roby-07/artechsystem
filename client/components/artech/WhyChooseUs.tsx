import { useEffect, useRef, useState } from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  { label: "Q1", v: 24 },
  { label: "Q2", v: 38 },
  { label: "Q3", v: 52 },
  { label: "Q4", v: 76 },
  { label: "Q5", v: 92 },
];

const backgroundImages = [
  {
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Data visualization dashboard"
  },
  {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
    alt: "Analytics and charts"
  },
  {
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Geographic information systems"
  },
  {
    url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Machine learning algorithms"
  },
  {
    url: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    alt: "Data research and analysis"
  },
  {
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Big data processing"
  },
  {
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "AI and neural networks"
  },
  {
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Database management"
  }
];

function CountUp({ to }: { to: number }) {
  const [val, setVal] = useState(0);
  const raf = useRef<number | null>(null);
  useEffect(() => {
    const duration = 1100;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [to]);
  return <span className="text-transparent bg-clip-text bg-gold-gradient">{val}</span>;
}

export default function WhyChooseUs() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="why-us" className="relative py-20 md:py-24 overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={backgroundImages[currentImageIndex].url}
              alt={backgroundImages[currentImageIndex].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/20 to-background/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight">Why choose Artech Systems</h2>
            <p className="mt-4 text-muted-foreground max-w-prose">
              We combine deep domain expertise with modern engineering to deliver reliable, decision-ready insights. Our
              work is trusted by enterprises, public sector, and research organizations.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Projects", value: 120 },
                { label: "Clients", value: 45 },
                { label: "Years", value: 8 },
                { label: "Datasets", value: 300 },
              ].map((m) => (
                <div key={m.label} className="rounded-xl border border-border p-5 bg-card">
                  <div className="text-3xl font-semibold tracking-tight text-foreground">
                    <CountUp to={m.value} />
                    <span className="text-gold align-super text-lg">+</span>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Uptime</div>
                <div className="text-2xl font-semibold">99.98%</div>
              </div>
              <div className="text-sm text-muted-foreground">Last 12 months</div>
            </div>
            <div className="mt-4 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="c" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--gold))" stopOpacity={0.75} />
                      <stop offset="95%" stopColor="hsl(var(--gold))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" />
                  <XAxis dataKey="label" stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
                  <YAxis stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                  <Area type="monotone" dataKey="v" stroke="hsl(var(--gold))" fill="url(#c)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              Our platform processes millions of records with resilient pipelines and strict QA, ensuring trustworthy
              analytics.
            </div>
          </div>
        </div>
        
        {/* Image Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-gold w-8' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
