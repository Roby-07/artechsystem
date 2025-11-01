import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What data engineering services do you offer?",
    answer: "We provide comprehensive data engineering solutions including ETL/ELT pipeline development, data warehousing, real-time data processing, cloud data migration, and data quality management. Our team specializes in building scalable, reliable data infrastructure using modern tools and cloud platforms."
  },
  {
    question: "How do you approach data visualization projects?",
    answer: "Our data visualization approach focuses on understanding your business needs first. We create interactive dashboards, executive reports, and custom visualizations using tools like Tableau, Power BI, and custom web applications. Every visualization is designed to tell a clear story and drive actionable insights."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity and scope. Simple dashboards may take 2-4 weeks, while comprehensive data platforms can take 3-6 months. We provide detailed project plans with milestones and regular updates to keep you informed throughout the development process."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support and maintenance packages including system monitoring, performance optimization, security updates, and feature enhancements. Our support ensures your data solutions remain reliable, secure, and up-to-date with evolving business needs."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Get answers to common questions about our data services and solutions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-border rounded-xl bg-card overflow-hidden"
                initial={false}
                animate={{ 
                  backgroundColor: openIndex === index ? "hsl(var(--muted))" : "hsl(var(--card))"
                }}
                transition={{ duration: 0.2 }}
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-lg pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
