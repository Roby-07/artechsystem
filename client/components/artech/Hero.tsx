import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Threads from "./Threads";

export default function Hero() {
  return (
    <section id="who-we-are" className="relative overflow-hidden">
      {/* Threads Background */}
      <div className="absolute inset-0 -z-20">
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
          color={[0.8, 0.8, 0.8]}
        />
      </div>
      
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 size-[28rem] rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 size-[28rem] rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--muted))_0%,transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-6xl font-semibold leading-tight tracking-tight"
          >
            Transforming Data into
            <span className="block text-transparent bg-clip-text bg-gold-gradient animate-shine"> Actionable Intelligence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground"
          >
            Artech Systems delivers data intelligence, AI solutions, and digital transformation services to help
            organizations operate smarter and make confident decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#contact">
              <Button className="h-11 px-6 bg-primary text-primary-foreground hover:bg-primary/90">Talk to us</Button>
            </a>
            <a href="#services">
              <Button variant="outline" className="h-11 px-6 border-gold text-foreground hover:bg-gold/10">Our services</Button>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-8">
        <div className="h-10 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>
    </section>
  );
}
