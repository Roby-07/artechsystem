import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";

type Tool = { name: string; logo: string };

// Brand logos via Devicon CDN or official resources
const tools: Tool[] = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Vite", logo: "https://vitejs.dev/logo.svg" },
  { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Three.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
  { name: "React Query", logo: "https://raw.githubusercontent.com/TanStack/query/main/media/emblem-dark.svg" },
  { name: "Zod", logo: "https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg" },
  { name: "Radix UI", logo: "https://avatars.githubusercontent.com/u/75042455?s=200&v=4" },
  { name: "Vitest", logo: "https://vitest.dev/logo.svg" },
  { name: "GIS", logo: "/placeholder.svg" },
  { name: "Databases", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
];

export default function ToolsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", dragFree: true });

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => {
      if (!emblaApi) return;
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      else emblaApi.scrollTo(0);
    }, 2500);
    return () => clearInterval(id);
  }, [emblaApi]);

  const onPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const onNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-10 bg-background border-t">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-heading text-xl md:text-2xl font-semibold tracking-tight">Tools we use</h3>
          <div className="flex gap-2">
            <button onClick={onPrev} className="inline-flex h-8 w-8 items-center justify-center rounded-md border bg-background hover:bg-muted">
              <span className="sr-only">Previous</span>‹
            </button>
            <button onClick={onNext} className="inline-flex h-8 w-8 items-center justify-center rounded-md border bg-background hover:bg-muted">
              <span className="sr-only">Next</span>›
            </button>
          </div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {tools.map((t, i) => (
              <div key={i} className="shrink-0 w-40 md:w-48">
                <div className="flex flex-col items-center justify-center gap-3 rounded-lg border bg-card p-6 hover:bg-muted transition-colors">
                  <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center overflow-hidden">
                    <img src={t.logo} alt={`${t.name} logo`} className="h-8 w-8 object-contain" loading="lazy" />
                  </div>
                  <div className="text-sm font-medium text-center">{t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
