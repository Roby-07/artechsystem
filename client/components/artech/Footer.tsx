import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3 text-center md:text-left">
          <div>
            <div className="font-heading text-xl font-semibold">Artech Systems</div>
            <p className="mt-2 text-sm text-muted-foreground/80 max-w-sm">
              Data intelligence, AI solutions, and digital transformation.
            </p>
            <div className="mt-4 flex items-center justify-center md:justify-start gap-3">
              <a aria-label="Email" href="mailto:hello@artech.systems" className="p-2 rounded-md bg-background text-foreground/90 hover:text-foreground border border-border"><Mail className="size-4"/></a>
              <a aria-label="Phone" href="tel:+15550102040" className="p-2 rounded-md bg-background text-foreground/90 hover:text-foreground border border-border"><Phone className="size-4"/></a>
            </div>
            <div className="mt-4 flex items-center justify-center md:justify-start gap-3">
              <a aria-label="LinkedIn" href="#" className="p-2 rounded-md bg-background text-foreground/90 hover:text-foreground border border-border"><Linkedin className="size-4"/></a>
              <a aria-label="Twitter/X" href="#" className="p-2 rounded-md bg-background text-foreground/90 hover:text-foreground border border-border"><Twitter className="size-4"/></a>
              <a aria-label="GitHub" href="#" className="p-2 rounded-md bg-background text-foreground/90 hover:text-foreground border border-border"><Github className="size-4"/></a>
            </div>
          </div>

          <div>
            <div className="font-heading text-lg font-semibold">Navigation</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#who-we-are" className="hover:underline">Who We Are</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#why-us" className="hover:underline">Why Artech</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="font-heading text-lg font-semibold">Newsletter</div>
            <p className="mt-3 text-sm text-muted-foreground/80">Get insights on data strategy and AI delivered to your inbox.</p>
            <form className="mt-4">
              <div className="flex items-center gap-2 bg-background rounded-lg p-1 border border-border max-w-md mx-auto md:mx-0">
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="flex-1 bg-transparent px-3 py-2 outline-none text-sm"
                />
                <Button className="bg-gold text-gold-foreground hover:bg-gold/90">Subscribe</Button>
              </div>
            </form>
            <div className="mt-2 text-xs text-muted-foreground/70">We respect your privacy. Unsubscribe anytime.</div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground/80 text-center md:text-left">
          <div>© {new Date().getFullYear()} Artech Systems. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
