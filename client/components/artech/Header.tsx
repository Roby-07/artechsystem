import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";

const nav = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Services", href: "#services" },
  { label: "Why Artech", href: "#why-us" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between md:grid md:grid-cols-3">
        <a href="#who-we-are" className="flex items-center gap-2 group min-w-0">
          <img
            src="/artechLogo.jpeg"
            alt="Artech Systems Logo"
            className={cn(
              "size-9 rounded-md object-cover",
              "ring-1 ring-inset ring-border group-hover:ring-gold/60 transition"
            )}
          />
          <div className="leading-tight whitespace-nowrap">
            <div className="font-heading font-semibold tracking-tight truncate">Artech Systems</div>
            <div className="hidden sm:block text-xs text-muted-foreground">Data • AI • Insights</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center justify-center gap-6">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-foreground transition">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <a href="#get-in-touch" className="hidden md:inline-flex">
            <Button className="bg-gold text-gold-foreground hover:bg-gold/90 animate-glow">Get in touch</Button>
          </a>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md border border-border p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/90">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a href="#get-in-touch" onClick={() => setOpen(false)}>
              <Button className="w-full bg-gold text-gold-foreground hover:bg-gold/90">Get in touch</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
