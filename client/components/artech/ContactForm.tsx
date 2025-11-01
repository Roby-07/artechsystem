import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const update = (k: string, v: string) => setForm((s) => ({ ...s, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please complete all fields", description: "Name, email and message are required." });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const body = await res.json();
      if (!res.ok) throw new Error(body?.error || "Submission failed");
      toast({ title: "Message sent", description: "Thank you — we will get back to you shortly." });
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      console.error(err);
      toast({ title: "Error", description: (err as Error).message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 w-full">
      <h3 className="font-heading text-lg font-semibold">Get in touch</h3>
      <p className="mt-2 text-sm text-muted-foreground">Send us a message and our team will reach out to discuss your needs.</p>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        <input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Full name" className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm outline-none" />
        <input value={form.email} onChange={(e) => update("email", e.target.value)} type="email" placeholder="Email" className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm outline-none" />
        <input value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Company (optional)" className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm outline-none md:col-span-2" />
        <textarea value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="How can we help?" className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm outline-none md:col-span-2 min-h-[120px]" />
      </div>

      <div className="mt-4 flex items-center justify-end">
        <Button type="submit" className="bg-primary text-primary-foreground" disabled={loading}>{loading ? "Sending…" : "Send message"}</Button>
      </div>
    </form>
  );
}
