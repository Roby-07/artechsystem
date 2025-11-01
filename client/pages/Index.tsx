import Header from "@/components/artech/Header";
import Hero from "@/components/artech/Hero";
import Footer from "@/components/artech/Footer";
import { Helmet } from "react-helmet-async";
import { Suspense, lazy } from "react";

const ToolsSection = lazy(() => import("@/components/artech/ToolsSection"));
const CoreAreas = lazy(() => import("@/components/artech/CoreAreas"));
const WhyChooseUs = lazy(() => import("@/components/artech/WhyChooseUs"));
const Testimonial = lazy(() => import("@/components/artech/Testimonial"));
const FAQ = lazy(() => import("@/components/artech/FAQ"));
const ContactForm = lazy(() => import("@/components/artech/ContactForm"));

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Artech Data | Data Engineering, Visualization, GIS, Publications, Research & Consultancy</title>
        <meta
          name="description"
          content="Artech Data delivers data engineering pipelines, real-time dashboards, GIS mapping, publications, and research consultancy to transform your data into impact."
        />
        <meta name="keywords" content="data engineering, data visualization, GIS, publications, research consultancy, data pipelines, dashboards" />
        <link rel="canonical" href="/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Artech Data | Data Engineering, Visualization, GIS" />
        <meta
          property="og:description"
          content="Data engineering, visualization, GIS, publications, and research consultancy for data-driven organizations."
        />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/placeholder.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Artech Data | Data Engineering, Visualization, GIS" />
        <meta name="twitter:description" content="End-to-end data solutions: pipelines, dashboards, GIS, and research services." />
        <meta name="twitter:image" content="/placeholder.svg" />
        <meta name="theme-color" content="#0ea5e9" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Artech Data",
            "url": "/",
            "logo": "/favicon.ico",
            "sameAs": []
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Artech Data",
            "url": "/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Core Services",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Data Engineering & Pipelines" },
              { "@type": "ListItem", "position": 2, "name": "Data Visualization & Dashboards" },
              { "@type": "ListItem", "position": 3, "name": "Geographic Information Systems (GIS)" },
              { "@type": "ListItem", "position": 4, "name": "Publications & Knowledge Products" },
              { "@type": "ListItem", "position": 5, "name": "Research & Data Consultancy" }
            ]
          }
        `}</script>
      </Helmet>
      <Header />
      <main className="flex-1">
        <Hero />
        <Suspense fallback={<div className="container mx-auto px-4 py-8" aria-busy="true">Loading…</div>}>
          <ToolsSection />
          <CoreAreas />
          <WhyChooseUs />
          <Testimonial />
          <FAQ />
        </Suspense>

        <section id="get-in-touch" className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <div className="rounded-xl border border-border bg-card overflow-hidden h-full">
                <img
                  src="/forForm.jpg"
                  alt="Get in touch illustration"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <Suspense fallback={<div className="p-6" aria-busy="true">Loading form…</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
