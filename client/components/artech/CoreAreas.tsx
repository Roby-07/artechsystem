import { motion } from "framer-motion";
import { BrainCircuit, BarChart3, Smartphone, Map, BookOpen, FlaskConical } from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    title: "AI Development & Training",
    desc: "Custom AI models, MLOps, and applied machine learning solutions.",
    features: ["Custom Models", "MLOps", "Computer Vision", "NLP", "Predictive Analytics"]
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Visualization",
    desc: "Executive dashboards and interactive visualizations for data-driven decisions.",
    features: ["Dashboards", "Real-time Analytics", "Custom Reports", "Data Storytelling"]
  },
  {
    icon: Smartphone,
    title: "Mobile Data Collection",
    desc: "Field data capture and real-time visualization pipelines at scale.",
    features: ["Offline Collection", "GPS Integration", "Real-time Sync", "Mobile Forms"]
  },
  { 
    icon: Map, 
    title: "Geographic Information Systems", 
    desc: "Spatial analysis, mapping, and geospatial infrastructure solutions.",
    features: ["Spatial Analysis", "Interactive Mapping", "Location Intelligence", "Spatial Modeling"]
  },
  { 
    icon: BookOpen, 
    title: "Publications & Knowledge", 
    desc: "Reports, briefs, and knowledge assets with clear data narratives.",
    features: ["Research Reports", "Policy Briefs", "Data Narratives", "Knowledge Assets"]
  },
  { 
    icon: FlaskConical, 
    title: "Research & Consultancy", 
    desc: "Methodological design, data audits, and expert advisory services.",
    features: ["Research Methods", "Data Audits", "Statistical Analysis", "Strategic Planning"]
  },
];

export default function CoreAreas() {
  return (
    <section id="services" className="relative py-20 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight">Core Areas</h2>
          <p className="mt-3 text-muted-foreground">Six pillars that power your data transformation.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-lg hover:shadow-gold/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" style={{background:
                "radial-gradient(600px 150px at 0% 0%, hsl(var(--gold)/0.15), transparent)"}} />

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="shrink-0 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 text-gold p-4 ring-1 ring-gold/20 group-hover:ring-gold/40 group-hover:scale-110 transition-all duration-300">
                  <s.icon className="size-8" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-xl group-hover:text-white transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {s.features.map((feature, idx) => (
                      <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-muted/50 text-muted-foreground group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              <div className="mt-4 text-center">
                <span className="text-sm text-muted-foreground group-hover:text-gold transition-colors cursor-pointer">
                  Learn more →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
